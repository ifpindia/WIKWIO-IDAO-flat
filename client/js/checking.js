  var appstrcont =  localStorage.getItem('appstrvalue'); 
  var appstrvaluecont = JSON.parse(appstrcont);
  var contval = appstrvaluecont.contracode;
  var usrstore = [];
  var str="";
  var count=0;
  var exstore="";
  var elem;
  var test=0;
 
  for(var j=0;j<Object.keys(flore_full).length;j++){
    if(flore_full[j]["Code"]==contval){
      elem = j;
      break;
    }
  }
  $.each( flore_full[elem], function( key, value ) {
    test++;
    if(test>=6){
    	exstore+=value;
    }
  });

  for ( var i=0; i<no_state; i++){
    usrstore[i] = exstore.substr( i, 1);
  } 
  $(".loading-icon").show();

  for (var i = 0; i < no_robot; i++)
  {
     checkredrawquery(he[i]);
   }
   function checkredrawquery(values){
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
                                var robot_num = addLeadingZero(values[j].Robot_Num);
                                if (robot_num.length == 1){

                                    robot_num = addLeadingZero(values[j].Robot_Num);
                                }

                                path =  "robot" + "/" + robot_num + "/" + values[j].Nom;

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
              function getsvgData(){
                        var myarr = str.split("|");
                        var temp='';
                         var j=0;
                         var path;
                        for(var i = 0; i < myarr.length; i++){
                          (function(i) {
                          path = myarr[i];
                           $.get(path, function(data) { 
                                  j++;
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
                      $(".loading-icon").hide();

                     var a = window.innerHeight;
                      var h;
                      var style_h = '';
                      if(a>700){
                          h= a-60;
                          style_h = 'style="height:'+h+'px;"';
                      }else {
                          h = a;
                          style_h = 'style="height:'+h+'px;"';
                      }
                    $(".checkresultwrap").html('<svg  xmlns="http://www.w3.org/2000/svg" id="svgquest" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink"> ' + temp + '</svg>')
               }

                function errorObjCB(e){
                    alert("some error"+ e );
                    $(".message").append("hierachie table error: " + e + " rows found.");
                    }
                    