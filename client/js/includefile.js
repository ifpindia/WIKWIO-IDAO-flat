var appstr = "";
var i;	
var appellable = [];                 	
for( i =0; i < Object.keys(object_asc).length; i++) {
	// var desc_num = object_asc[i]["Desc_Num"];
	appellable[/*desc_num*/i] = object_asc[i]["Joker"];
}
for ( i =0; i < appellable.length; i++){
appstr += appellable[i];
}
var localappstr = { "txtappstr": appstr,"contracode":"" ,"linkresult": "" ,"linkspecies": ""}
localStorage.setItem('appstrvalue',JSON.stringify(localappstr));

var replacevalues = { "txtstore": "0", "txtappstr": appstr , "txtcharname": "", "txtquest":"", "txtcurquest": "", "txtback": "" }
localStorage.setItem('formvalues', JSON.stringify(replacevalues));

var Last = { "Last_charname":"", "Last_quest":""}
localStorage.setItem('Last_charname', JSON.stringify(Last));



