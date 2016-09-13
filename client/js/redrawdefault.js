 
function include(file) {
    var oScript =  document.createElement("script");
    oScript.src = file;
    oScript.type = "text/javascript";
    document.body.appendChild(oScript);
}


function print_array(array)
{
  for ( var i = 0; i < array.length; i++ )
  {
    document.write(array[i]+" ");
  }
  return;
}


// new Element("script", {src: "json/object_asc.js", type: "text/javascript"});

// Script.load("json/object_asc.js");

include("json/object_asc.js");


  var listvalues = localStorage.getItem('formvalues'); 

  var Last = localStorage.getItem('Last_charname'); 

  var finalvalue = JSON.parse(listvalues);

  var value_Last = JSON.parse(Last);

  var questname  = finalvalue.txtquest;
  // console.log("==============="+questname);

  var charname = finalvalue.txtcharname;

  var back = finalvalue.txtback;

  if ( back != "1" )
  {
    Tab_char = value_Last.Last_charname;
    Tab_char += "|"+charname;
    value_Last.Last_charname = Tab_char;

    Tab_quest = value_Last.Last_quest;
    Tab_quest += "|"+questname;
    value_Last.Last_quest = Tab_quest;
  }

  finalvalue.txtback = "0";

  localStorage.setItem('Last_charname', JSON.stringify(value_Last)); 

  console.log("String Char default : "+value_Last.Last_charname);

  console.log("String Quest default : "+value_Last.Last_quest);

  // Sauvg_charname = charname;

  console.log(" charname value in redrawdefault : "+charname);

  var appstr  = finalvalue.txtappstr;

  var store = finalvalue.txtstore;

  console.log(" appstr value in redrawdefault : "+appstr);

  console.log(" store value in redrawdefault : "+store);

  localStorage.setItem('formvalues', JSON.stringify(finalvalue)); 

  var no_of_car;

  var usrstore = [];

  var perarray = new Array(); 

  var str = "";

  var userval;

  var flag;

  var count = 0;

  if(store.length == 1){

    for ( var i=0; i<no_state; i++){
      store += "0";
   }
  }
 

  for ( var i=0; i<no_state; i++){
    usrstore[i] = store.substr( i, 1);
    } 
 
 if( typeof flore_asc == 'undefined'){
  $.getScript( 'json/flore_asc.js', function( data, textStatus, jqxhr ) {
     extractFromObjDB();
  });
}else{
     extractFromObjDB();
}
                    
                     

                function extractFromObjDB(){
                     //var db = window.sqlitePlugin.openDatabase({name: "wikwio_idao.db"});
                     //db.transaction(queryObjDB, errorObjCB);
                     //db.transaction(queryroboDB, errorObjCB);
                     show();

                }

               
                function show(){
                    flag = false;
                    var object_asc_row;
                    for (var i = 0; i < Object.keys(object_asc).length; i++)
                    {
                      // console.log(object_asc[i]['Objet'].toLowerCase() +" == "+questname.toLowerCase());
                      if(object_asc[i]['Objet'].toLowerCase() == questname.toLowerCase()){                        
                        flag = true;
                        object_asc_row = object_asc[i];
                        // appstr[i] = "0";

                      }
                      if(flag)
                        break;
                    }

                    var len= 1;
                    // console.log("length value  "+ len);
                    userval = char_val[charname];
                    var start;
                    var presentflag;
                    var dependancy = 0 ;
                    var depval = -1;
              

                    if (len > 0)
                      {
                        // console.log(object_asc_row);
                        no_of_car = object_asc_row['Nb_Car']; 
                        start = object_asc_row['Index_Car'];
                      }
                      if (usrstore[userval] == "1") {
                          presentflag = 1;
                      }

                        var new_temp = parseInt(start) + parseInt(no_of_car);
                    
                        var user_temp;
                      for (var i =  start; i <= (new_temp) - 1; i++)
                        {
                          user_temp = parseInt(usrstore[i]);
                          dependancy  +=  user_temp ;
                          // console.log(dependancy);
                          if (usrstore[i] == "1"){
                             depval = i;
                          }
                        }
                    
                        if (dependancy != 0) 
                          {
                            // console.log("IN");
                            desloop(depval);
                          }

                          if (presentflag == 1) {
                             // console.log(" Old : "+appstr);
                             appstr = desloop_2(userval,appstr,usrstore,char_val,1);
                             // console.log(" New : "+appstr);
                             usrstore[userval] = "0";  
                           }
                          else
                          {
                            var incrval = 0;
                            // console.log(" Suppression des questions liées aux caractère adjacents ");
                            while (incrval < no_of_car)
                            {
                              // console.log(" caractère : "+start);
                              appstr = desloop_2(start,appstr,usrstore,char_val,1);
                              usrstore[start] = "0";
                              start++;
                              incrval++;
                            }
                            // console.log(" Fin ");
                            // console.log(" New : "+appstr);
                            appstr = desloop_2(userval,appstr,usrstore,char_val,0);
                            // console.log(" New après entrée du caractère principal : "+appstr);
                            usrstore[userval] = "1";  
                          }

                      var Nb_Car = 0;
                      var store = "";
                      for ( var i = 0; i < no_state; i++ ) 
                      {

                         store += usrstore[i];
                         if ( usrstore[i] == 1 )
                         {
                           Nb_Car++;
                         }

                       }

                        Nb_Carac = Nb_Car;
                        var listvalues = localStorage.getItem('formvalues'); 

                        var finalvalue = JSON.parse(listvalues);

                        finalvalue.txtstore = store;

                        // var appstrval =  localStorage.getItem('appstrvalue'); 
                        // var appstrvalue = JSON.parse(appstrval);

                        // var newappstr = appstrvalue.txtappstr;

                        finalvalue.txtappstr = appstr;
                        localStorage.setItem('formvalues', JSON.stringify(finalvalue));

                        for (var i = 0; i < Object.keys(flore_asc).length; i++){
                            perarray[flore_asc[i]["Code"]] = 0;
                          }
                          carDB(store);


                          queryroboDB();

                 }

/*            
                function desloop2(carval)
                 {
                  for (j = 0; j < Object.keys(descendance_Quest).length; j++)
                  {
                    console.log(" Objet = "+descendance_Quest[j]["Objet"]+" Quest = "+descendance_Quest[j]["Quest"]);
                  }                  
                 }
*/

                function desloop(carval)
                {
                  // console.log("start");
                  var Index_Car;
                  var Nb_Car
                  cardata = Select_all_From_objet_where_X_eqal_Y(caract_full,"NUM",carval);

  /*
  $sql = "select ID_CARAC from caracteres where NUM=" . $carval;
  $cardata = $conn->select($sql, 'OBJECT');
  if ((sizeof($cardata)) == 1)
    $charname = $cardata->ID_CARAC;
  */

                  if ( Object.keys(cardata).length == 1 )
                  {
                    charname = cardata[0]["ID_CARAC"];
                  }
                  // console.log("Carac = "+charname);
  /*      
  $query = "select * from descendance_Quest";
  $data = $conn->select($query, 'OBJECT');
  */

                  data = descendance_Quest;

                  var h = 0;
                  while ( h < Object.keys(data).length )
                  {
                    // console.log("etape = "+h);
                    if (data[h]["Carac"] == charname)
                    {
                      objet = data[h]["Quest"];
                      // console.log("Quest = "+objet);
                      objdata = Select_all_From_objet_where_X_eqal_Y(object_asc,"Objet",objet);

      /*
      $query1 = "select Index_Car,Nb_Car from objets_fic where objet ='$objet' ";
      //echo $query;
      $objdata = $conn->select($query1, 'OBJECT');
      */
      
                      Index_Car = parseInt(objdata[0]["Index_Car"]);
                      Nb_Car = parseInt(objdata[0]["Nb_Car"]);

                      for ( var i = Index_Car; i <= Index_Car + Nb_Car - 1; i++ )
                      {
                        usrstore[i] = 0;
                        // desloop(i);
                      }
                    }
                    h++;
                  } 
                return; 
                } 


                function desloop_2(carval,appstr,usrstore,char_val,present)
                {
                  // console.log("IN desloop_2");
                  var appellable = [];
                  var charname;
                  for ( var a = 0; a < appstr.length; a++ )
                  {
                    appellable[a] = appstr.substr(a,1);
                  }
  
                  // $sql = "select ID_CARAC from caracteres where NUM=" . $carval;
                  // $cardata = $conn->select($sql, 'OBJECT');

                  cardata = Select_all_From_objet_where_X_eqal_Y(caract_full,"NUM",carval);
                  if ( Object.keys(cardata).length == 1 )
                    charname = cardata[0]["ID_CARAC"];

                  // console.log(" charname = "+charname);

                  // $query = "select * from descendance_Quest";
                  // $data = $conn->select($query, 'OBJECT');

                  data = descendance_Quest;

                  cardata = Select_carac_From_objet("Objet",object_asc);

                  // $sql = "select Objet from objets_fic ORDER BY Index_Car";
                  // $cardata = $conn->select($sql, 'OBJECT');

                  if ( present == 0 )
                  {
                    for (var j = 0; j < Object.keys(data).length; j++)
                    {
                      var Car = data[j]["Carac"];
                      if ( Car == charname )
                      {
                        // echo " Extension ";
                        Objet = data[j]["Quest"];
                        // console.log(" Objet = "+Objet);
                        for (var k = 0; k < Object.keys(cardata).length; k++)
                        {
                          if ( cardata[k] == Objet )
                          {
                            // Q = cardata[k]["Objet"];
                            // echo " / Confirmé, question : $Q / ";
                            // T = appellable[k];
                            // echo " Valeure actuelle = $T / ";
                            // console.log(" Number = "+k);
                            appellable[k] = 1;
                            break;
                          }   
                        }
                      }                 
                    }
                  }
                  else if ( present == 1 )
                  {
                    for (var j = 0; j < Object.keys(data).length; j++)
                    {
                      var Car = data[j]["Carac"];
                      if ( Car == charname )
                      {
                        // echo " Extension ";
                        Objet = data[j]["Quest"];
                        for (var k = 0; k < Object.keys(cardata).length; k++)
                        {
                          if ( cardata[k] == Objet )
                          {
                            // Q = cardata[k]["Objet"];
                            // echo " / Confirmé, question : $Q / ";
                            // T = appellable[k];
                            // echo " Valeure actuelle = $T / ";
                            appellable[k] = 0;
                            break;
                          }   
                        }
                      } 
                    }
                  }
                  else
                  {

                  }

                  appstr_bis = "";
                  for ( var i = 0; i < appellable.length; i++)  
                  {
                    appstr_bis += appellable[i];
                  }
                
                  return appstr_bis;
                }



                function queryroboDB(){

                   for (var i = 0; i < no_robot; i++)
                  {
                      redrawquery(he[i]);

                   } 
                  
                } 

               function redrawquery(values){

                  count++;
                   var no_records = Object.keys(values).length;
                        var j = 0;
                        var flag = 0;
                        var path;
                        while ( j < no_records && flag == 0 && no_records > 1)
                          {
                            var k = 0;
                            while ( k < no_constraints && flag == 0)
                            {
                             var fldname = "C_" + k;
                              var dbvalue = values[j][fldname];
                              var cval = char_val[dbvalue];
                              
                              if ( dbvalue == "Fin")
                              { 
                                var robot_num = addLeadingZero(values[j]['Robot_Num']);
                                if (robot_num.length == 1){

                                    robot_num = addLeadingZero(values[j]['Robot_Num']);
                                }

                                path =  "robot" + "/" + robot_num + "/" + values[j]['Nom'];

                                if (str.length > 0 ) {
                                  str += "|" +path;
                                }
                                else {
                                  str += path;
                                }

                                 flag = 1;
                              }
                              
                              if (usrstore[cval] == "0") {
                                break;      
                              }
                            
                              k++;
                            }
                            j++;
                          }
                          if(count == no_robot){
                            getsvgData();
                          }
                      }

                       function getsvgData()
                       {
                        // console.log(" Old str : "+str);
                        if ( Nb_Carac > 0 )
                        {
                          str += "|img/Back_Green.svg";
                          // console.log("Boutton vert");
                        }
                        else
                        {
                          // console.log("Boutton vert");
                          str += "|img/Back_Grey.svg";
                        }
                        // console.log(" New str : "+str);
                        var myarr = str.split("|");
                        var temp='';
                        var j=0;
                        var path;
                        for(var i = 0; i < myarr.length; i++){
                          (function(i) {
                          path = myarr[i];
                          //console.log(path);
                        /*if(typeof robot != 'undefined'){

                            $.getScript('js/robot.js',function(){

                            });
                              var new_path = path.substring(6).split('.');
                						  var new_str = new_path[0].replace(/\//g, '_');
                						  temp+=robot[new_str];
                              console.log(temp);

                						  j++;
                						  if(j == myarr.length){
                								svgData(temp);
                							} 
                        }*/
						   
          						   $.get(path, function(data) { 
                                  j++;
                                  //console.log(data);
                                  //console.log(j);
                                   temp+=data;
                                    if(j == myarr.length){
                                        svgData(temp);
                                    }
                            },dataType="text")
                           .fail(function() {
                                 j++;
                                 });
          						   
						   
						   
                         }(i));
                        }
                      }
                
                function svgData(temp){

                  // console.log("Données = "+temp);

                    $(".loading-icon").hide();                    
                    $(".selectRedrawWrapper").html('<svg  xmlns="http://www.w3.org/2000/svg" id="svgquest" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink"> ' + temp + '</svg>')
                 active_touch();
                  updateProcess(ntopcount,topval);
                }
                 
                 function errorObjCB(e){
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }

