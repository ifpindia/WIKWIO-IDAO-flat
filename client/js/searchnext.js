


var globval = localStorage.getItem('globalVar'); 

var globvalue = JSON.parse(globval);

  var lang = 'fr';
         $(".languagecheck").each(function(){             
            var that = $(this);
            if(that.hasClass('ui-btn-active')){
              lang = that.attr('rel');  
            }
         });

var state       = globvalue.no_state;
var constraints	= globvalue.no_constraints
var robot		= globvalue.no_robot
var species		= globvalue.no_species

var frmvalues = localStorage.getItem('formvalues'); 
var fnlvalue = JSON.parse(frmvalues);
var store = fnlvalue.txtstore;
var appstr = fnlvalue.txtappstr;
var ddno = fnlvalue.txtcurquest;

var s = new Array();
var tri = new Array();	
var etat = new Array();

var usrstore = new Array();

var	max = 1;
var compteur = 0;

var questname;
// var qname;
var cname;

var compare = "";

for (var z=0; z<appstr.length; z++){

	compare+=0;
}
	//$('.showSearchContent').html(showLoader()).show();	

$(".loading-icon").show();


if (store.length == 1){
		for (var i=0; i < state; i++){
			store += "0";
		}
}

for (var i=0; i<state; i++){
	usrstore[i] = store.substr( i, 1);
}

var appellable = new Array();

for (var i = 0; i < appstr.length; i++){
	appellable[i] = appstr.substr( i, 1);
}


function print_array(array)
{
  for ( var i = 0; i < array.length; i++ )
  {
    console.log(array[i]+" ");
  }
  return;
}

appellable[ddno] = 0;
var appstrlen = appstr.length;
appstr = "";
for (var i = 0; i < appstrlen; i++){
	 appstr += appellable[i];
}

// console.log(appstr);

if(appstr == compare)
	{
	$('.nextbutton').hide();
	if(lang == 'fr'){
		$(".SearchWrapper").html("<p class='warning' >Pas plus d\'options disponibles </p>");
	}else{
		$(".SearchWrapper").html("<p class='warning' >No more options available </p>");
	}
	}



// _______________________________

print_array(usrstore);

etat = usrstore;

var Questions = Create_Quest(usrstore,appellable);

print_array(Questions);


flore = Select_species_flore(etat);
Size = Object.keys(flore).length;

numero = Best_Question(Questions,etat,Size);

//$(".SearchWrapper").html(' <script src=numero></script>  <p> numero :  numero </p>');	

//document.write(" / numero = " + numero);

//document.write(" 1 ");

// console.log("numero = "+numero);


var temp = "";
cname = Questions[numero];

for ( var k = 0; k < Object.keys(object_asc).length; k++ )
{
	if ( object_asc[k]["Objet"] == cname )
	{
		qname = k;
		break;
	}
}


                    var Obj_Quest = object_asc[qname]['Objet'];
                    // console.log(" Objet = "+Obj_Quest);
                    // console.log(" Msg = "+tooltips_en["Fl_Color"]);
                  

                    if ( lang == "en" )
                    {
                      // console.log("Rep = en");
                      var Msg_Quest = tooltips_en[Obj_Quest];
                    }
                    else
                    {
                      // console.log("Rep = fr");
                      var Msg_Quest = tooltips_fr[Obj_Quest];
                    }

                    // console.log("Msg_Quest = "+Msg_Quest);
                    // document.write(Msg_Quest);

                    var html = [
                    //'<div> salut </div>'

                    ' <div id="Msg_Quest" style=" font-size: 1.2vw; text-align: center; font-weight: bold; width: 32%; padding-top: 0.8vw; padding-bottom: 0.8vw; position: relative; top: 0.8vw; left: 32%; border: 0.25vw solid #E97900; border-radius: 2vw; " > '+Msg_Quest+'  </div> '

                    ].join('');



questname = "quest/" + object_asc[qname]["Popup"];	
// qname = object_asc[numero]["Desc_Num"];
// console.log("10");
if(searchNextComp == object_asc[qname]["Popup"]){
	$('.nextbutton').hide();
	if(lang == 'fr'){
		$(".SearchWrapper").html("<p class='warning' >Pas plus d\'options disponibles </p>");
	}else{
		$(".SearchWrapper").html("<p class='warning' >No more options available </p>");
	}
}

searchNextComp = object_asc[qname]["Popup"];
if(flag==0)
{
	temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="54%" height="100%" style="margin-left:21vw" ><param name="src" value="'+questname+'" ></object>';
	temp = html + temp;
	$(".SearchWrapper").html(temp);							
}

fnlvalue.txtappstr = appstr;
fnlvalue.txtstore = store;
fnlvalue.txtcurquest = qname;
fnlvalue.txtquest = cname;
localStorage.setItem('formvalues', JSON.stringify(fnlvalue));


//document.write(" 2 ");
//$(".SearchWrapper").html('<p> salut </p>');		

// _______________________________






/*

	searchquest();



                 function searchquest(){
                 	var tempvar;
                 	var provenance;
                 	var index_car;
                 	var nb_car;
                 	var etats = [];
                 	var dno;
                 	for (var ij =0; ij < Object.keys(object_asc).length; ij++)
					{
						dno = object_asc[ij]["Desc_Num"];
						if (appellable[object_asc[ij]["Desc_Num"]] == 1)
						{
							provenance  = -1;
							index_car= object_asc[ij]["Index_Car"];
							nb_car = object_asc[ij]["Nb_Car"];

							for (var i = index_car; i <= parseInt(index_car) + parseInt(nb_car) -1 ; i++){
								if (usrstore[i] != "0"){
									provenance = i - object_asc[ij]["Index_Car"];
								}
							}

						}
						else
						{
							provenance = 1;	
							s[compteur] = 0;
						}

						if (provenance == -1)
							{

								for (var j = 0; j <=  nb_car - 1; j++){
									etats[j] = 0;
								}
										 
								for (var i = 0; i <= nombre - 1 ; i++)
								{
									for (var k = 0; k <= nb_car - 1; k++)
									{	

										tempvar = parseInt(k) + parseInt(index_car);
										etats[k] = parseInt(etats[k])  + parseInt(matrice[i][tempvar]);
									}
								}
								
								s[compteur] = 0;
								for (var i = 0; i <= nb_car - 1 ; i++)
								{
									if (etats[i] != "0")
									{
										s[compteur] = s[compteur] - etats[i] / nombre * Math.log(nombre / etats[i]) / Math.log(nb_car);
									}	
								}		
								s[compteur] = Math.abs(s[compteur]);
					 		}
							else{
								s[compteur] = 0;
							}
							compteur = compteur + 1;
						}

						max = 0;
						var numero;
						for (var i = 0; i <= compteur - 1; i++)
						{
							if (max < s[i])
							{
								max = s[i];		   
								numero = i;
							}
						}
						if (max != "0")
						{		
							var temp = "";
							questname = "quest/" + object_asc[numero]["Popup"];	
							qname = object_asc[numero]["Desc_Num"];
							cname = object_asc[numero]["Objet"];
							$(".loading-icon").hide();
							temp = '<object id="svgquest" type="image/svg+xml" data="'+questname+'" width="100%" height="100%" ><param name="src" value="'+questname+'" ></object>';
								$(".SearchWrapper").html(temp);
							
						}
						else
						{
							
						}	
						fnlvalue.txtcurquest = qname;
				      	fnlvalue.txtquest = cname;
				      	fnlvalue.txtappstr = appstr;
						 localStorage.setItem('formvalues', JSON.stringify(fnlvalue));


					}
                 
*/

