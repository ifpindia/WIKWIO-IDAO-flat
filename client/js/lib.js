var svgdoc;
var searchNextComp = '';
function showhelp()
{
	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	$.get("help.html", function(data) {
         $('.showhelp').html(data);
         var lan = 'fr';
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');	
         		}
         });
          $('.showhelp').find('.hiding').hide();
         $('.showhelp').find('.lang_'+lan).show();
         $('.showhelp').show();
    });
 }

function check(code){

	menuCheck();
	var appstrcont =  localStorage.getItem('appstrvalue'); 
	var appstrvaluecont = JSON.parse(appstrcont);
	appstrvaluecont.contracode = code;
	localStorage.setItem('appstrvalue', JSON.stringify(appstrvaluecont));
	$('.tt').hide();
	$('#backbutton2').show();
	//$('.speciespopup').html(showLoader()).show();
		$.get("checking.html", function(data) {
         //$('.speciespopup').html(data).show();
         $('.message').html(data).show();
     });

}


 function showabout()
{

	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();

	$.get("about.html", function(data) {
         $('.showabout').html(data);


         var lan = 'fr';
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');	
         		}
         });
          $('.showabout').find('.hiding').hide();
         $('.showabout').find('.lang_'+lan).show();
         $('.showabout').show();

    });


}



function showhome()
{
	
	menuCheck();
	$('.lang_wrap').show();
	$('.SearchWrapper').empty();

	var appstrval =  localStorage.getItem('appstrvalue'); 
	var appstrvalue = JSON.parse(appstrval);

	var newappstr = appstrvalue.txtappstr;

	var frmvalues = localStorage.getItem('formvalues'); 
	var fnlvalue = JSON.parse(frmvalues);

	fnlvalue.txtcurquest = "";
	fnlvalue.txtquest = "";
	fnlvalue.txtappstr= newappstr;
	localStorage.setItem('formvalues', JSON.stringify(fnlvalue));

	if( $(".showContraContent:visible").is(":visible")){
      $('.lang_wrap').hide();

		$('.tt').hide();
		$('.showresults').show();
	}else{
		$('.tt').hide();
		$('.cancelbutton, .nextbutton').hide();
		$('#cbp-spmenu-s2 , #showRight, #backbutton').show();
		$('.message').show();
		$('.canvasdiv').show();
		$('#backbutton').hide();	
	}		
	
}

function shownewhome(){
	menuCheck();
	$('.lang_wrap').show();
	$('.canvasdiv').show();
	$('.tt').hide();
	$('#backbutton').hide();
	$('#backbutton1').hide();
	$('#backbutton2').hide();
	var a = window.innerHeight;
	var style_h ="";
	if(a>700){
            h= a-60;
   style_h = 'style="height:'+h+'px;"';
        }
	 var isframe = '<svg  xmlns="http://www.w3.org/2000/svg" id="svgquest" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"  '+style_h+' image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink">';
         var test = 'staticSVGs/index.svg';    
            $.get(test, function(data) {
              isframe+=data;
              isframe+='</svg>'; 

              $('.message').html(isframe).show();
            },dataType="text");

            /*
         var test = 'staticSVGs/index.svg'; 
         test += "|img/Back_Grey.svg";   
         var myarr = test.split("|");
            $.get(myarr[0], function(data) {
              isframe+=data;

            $.get(myarr[1], function(data) {
              isframe+=data;
              isframe+='</svg>'; 
            */


            var appstrval =  localStorage.getItem('appstrvalue'); 
			var appstrvalue = JSON.parse(appstrval);

			var newappstr = appstrvalue.txtappstr;

            var frmvalues = localStorage.getItem('formvalues'); 
			var fnlvalue = JSON.parse(frmvalues);

	    	fnlvalue.txtcurquest = "";
	    	fnlvalue.txtquest = "";
	    	fnlvalue.txtstore = "0";
	    	fnlvalue.txtappstr= newappstr;
	    	localStorage.setItem('formvalues', JSON.stringify(fnlvalue));

           extraHome();
 
}

function shownext()
{
  //$(".loading-icon").show();
        //$(".forLoader").show();

	$('.forLoader').html(showLoader()).show();	
  //console.log($(".showSearchContent").html())
	$.get("searchnext.html", function(data) {
    ////$(".loading-icon").hide();
    //console.log(data);
    $('.showSearchContent').html(data);
      $(".forLoader").hide();
    });

}

function showspecies()
{
	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
  	$('.showSpeciesContents').load("specieslistpage.html");
	$('.showspecies').show();

}

function menuCheck(){

	$('.lang_wrap').hide();
	$('.lang_wraplocal').hide();
	$('.lang_wrapcontra').hide();
	$('.canvasdiv').hide();
	var hasclass = $( "#cbp-spmenu-s2" ).hasClass( "cbp-spmenu-open" ) ;
	if(hasclass == true){
		$('#showRight').trigger('click');
	}
}
function showsearch()
{	

	menuCheck();
	$('.tt').hide();
	$('#cbp-spmenu-s2 , #showRight, #backbutton').hide();
	$('.cancelbutton, .nextbutton').show();
	
  $('.forLoader').html(showLoader()).show();  
	$('.showSearchContent').show();

	$.get("search.html", function(data) {
         $('.showSearchContent').html(data);
         $(".forLoader").hide();
    });

}

function showquest(charname)
{

//console.log(localStorage);
	var listvalues = localStorage.getItem('formvalues'); 
  //console.log(listvalues);
   	var finalvalue = JSON.parse(listvalues);
   	finalvalue.txtquest = charname;
    localStorage.setItem('formvalues', JSON.stringify(finalvalue));
	menuCheck();
	
	$('.tt').hide();
	$('#backbutton').show();
    $('#backbutton2').hide();

  
	$('.selectquest').html(showLoader());

	$.get("selectquest.html", function(data) {
	
         $('.selectquest').html(data).show();
    });

}		


function showresults()
{

	menuCheck();
	$('.tt').hide();
	$('#backbutton').show();
	$('.showResultContent').html(showLoader()).show();

	$.get("results.html", function(data) {
         $('.showresults').html(data);//.show();

          var lan = 'fr';
         $(".languagecheck").each(function(){         		
         		var that = $(this);
         		if(that.hasClass('ui-btn-active')){
         			lan = that.attr('rel');	
         		}
         });

         $('.showresults').find('.resultlistspec').html(window.i8ln[lan].nomspecies);
         $('.showresults').find('.resultpercentage').html(window.i8ln[lan].resultpercentage);
         $('.showresults').find('.resulterror').html(window.i8ln[lan].resulterr);
         $('.showresults').find('.resultview').html(window.i8ln[lan].resultview);

         $('.showresults').show();
    });
}

function popup(portalLink, localLink){ 


	menuCheck();
	$('.tt').hide();
	$('#backbutton1').show();
	$('.popup').html(showLoader()).show();

	$('.lang_wraplocal').show();

	var listvalues = localStorage.getItem('appstrvalue'); 
   	var finalvalue = JSON.parse(listvalues);
    var newLocalURL = generate_local_link(portalLink);
   // console.log(newLocalURL);
    //finalvalue.linkresult = localLink;

	//localStorage.setItem('appstrvalue', JSON.stringify(linkvar));

	$.get(newLocalURL, function(data) {
          //alert(data.instance);
          var html_output = gene_html(data.instance,'137');
                    $(".speciespopup").hide();

          $(".popup").html(html_output).show();
          //$.getScript('js/offline.js');
          },dataType="json")
    .fail(function(error) {
                                 alert("error on load species data"); // or whatever
                                 });
    //$(".popup").html('<iframe height="100%" width="100%" allowTransparency="true" frameborder="0" scrolling="yes"  src="'+portalLink+'" type= "text/javascript"></iframe>').show();
    
	    }
function generate_local_link(portalLink){
    
    var speciesURL = portalLink;
    var speciesURLSplit = speciesURL.split("/");
    var speciesId = speciesURLSplit[speciesURLSplit.length-1];
    var newLocalURL = 'species/json/'+speciesId+'.json';
    return newLocalURL;
}


function speciesPopup(link){

		menuCheck();
	$('.tt').hide();
	$('#backbutton2').show();
	$('.lang_wrapcontra').show();

	var listvalues = localStorage.getItem('appstrvalue'); 
   	var finalvalue = JSON.parse(listvalues);
   	finalvalue.linkspecies = link;
    localStorage.setItem('appstrvalue', JSON.stringify(finalvalue));


	//$('.speciespopup').html(showLoader()).show();
    
    var newLocalURL = generate_local_link(link);

//console.log(newLocalURL);
     $.get(newLocalURL, function(data) {
           //alert(data);
           var html_output = gene_html(data.instance,'137');
             $(".popup").hide();

           //$(".speciespopup").html(html_output).show();
                      $(".popup").html(html_output).show();

           },dataType="json")
    .fail(function(error) {
       alert("error on species data"); // or whatever
       });


	   // $(".speciespopup").html('<iframe  height="100%" width="100%" allowTransparency="true" frameborder="0" scrolling="yes" style="overflow:hidden;width:100%;height:200%;" src="'+link+'" type= "text/javascript"></iframe>').show();

}

function showlistpopup(){

	menuCheck();
	$('.tt').hide();
	$('#backbutton2').hide();
	$('.showspecies').show();
		
	}

	function showresultspopup(){

		menuCheck();
	$('.tt').hide();
	$('#backbutton1').hide();
	$('.showresults').show();
		
	}


function replacechar(cname)
{

	$('.cancelbutton, .nextbutton').hide();
	var listvalues = localStorage.getItem('formvalues'); 
    var finalvalue = JSON.parse(listvalues);
    finalvalue.txtcharname = cname;

    localStorage.setItem('formvalues', JSON.stringify(finalvalue));
	menuCheck();
	$('#showRight, #cbp-spmenu-s2 ').show();
	$('.lang_wrap').show();
	$('.canvasdiv').show();
	$('.SearchWrapper').empty();
	$('.tt').hide();
	$('#backbutton').hide();
    $('#backbutton2').hide();

  

	$('.showone').trigger('click');

	$('.message').html(showLoader()).show();
	$('.forLoader').html(showLoader()).show();

    $.get("redrawdefault.html", function(data) {
         $('.message').html(data).show();
    });


}


function showerrors(spcode)
{
	$('#backbutton').show();
	var errorVal = { "spcode": spcode}; 
    localStorage.setItem('errorPage', JSON.stringify(errorVal));
	$('.tt').hide();
	$('.showContraContent').html(showLoader()).show();

	$.get("contra.html", function(data) {
         $('.showContraContent').html(data);
    });
	
   
}

function showLoader(){

	var output_load = '<div class="loading-icon">';
        output_load += '<div class="loading-bar-0"></div>';
        output_load +=          '<div class="loading-bar-1"></div>';
        output_load +=          '<div class="loading-bar-2"></div>';
        output_load +=          '<div class="loading-bar-3"></div>';
        output_load +=          '<div class="loading-bar-4"></div>';
        output_load +=    '</div>';

        return output_load;
        
}

function pop(stype){

	$(".newspecieslistwrapper").hide();
	 if(stype==1){
	 	
	 	$("#commonnames").show();
	 	$(".scrollnames").hide();
	 }
	 else if(stype==2){
	 
	 	$("#commonfamilies").show();
	 }
	 else if(stype==3){
	 
	 	$("#commonspecies").show();
	 	$(".scrollspecies").hide();
	 }else {
	 	$("#reversecontra").show();
	 	$(".scrollcontra").hide();
	 }

}
	
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


 function markselected(cid) { 
 try
  {
  if (returnie())
    svgdoc = document.svgquest.getSVGDocument();
  else
    svgdoc = document.svgquest.contentDocument;   

  var bbox = svgdoc.getElementById(cid).getBBox();  
  
  var node = svgdoc.getElementById("imgtick");
  var nwidth = bbox.width;
  var newx = bbox.x+nwidth/2;
  var newy = bbox.y+2 +20;

  node.setAttribute("x", newx);
  node.setAttribute("y", newy);
 }
catch(err)
  {
    txt="There was an error on this page -- " + cid + ".\n\n";
    txt+="Error description: " + err.message + "\n\n";
    txt+="Error description: " + err.description + "\n\n";
    txt+="Click OK to continue.\n\n";
    alert(txt);
  } 
 }
 
 	function addLeadingZero(n) {
        return (n < 10) ? ("0" + n) : n;
    }


/*Species Page functions*/

function gene_breif(notes){
    return '<li><a href="#" class="jslist"><i></i>Brief</a><ul><li>'+notes+'</li></ul></li>';
}

/*function gene_classify(taxonRegistry){
 var output = '<li><a href="#" class="jslist"><i></i>Classifications</a><ul class="closed" >';
 $.each(taxonRegistry[0].hierarchies, function(k,v){
 //console.log(v);
 output +='<li>'+v.rank +'  --  '+ v.name+'</li>';
 });
 output += '</ul></li>';
 //console.log(output);
 return output;
 } */

function gene_synonyms(synonyms, langId){
  //alert(langId);
  if(langId == 123){
        var output = '<li><a href="#" class="jslist" style="color:white"><i></i>Synonyms</a><ul class="closed">';

  }else {
        var output = '<li><a href="#" class="jslist" style="color:white"><i></i>Synonymes</a><ul class="closed">';

  }
    $.each(synonyms, function(k,v){
           output +='<li>'+v.name+'</li>';
           });
    output += '</ul></li>';
    //console.log(output);
    return output;
}

function gene_commonnames(commonnames){
    var output = '';
    if(Object.keys(commonnames).length > 0){
        // To do make the list value
        
        return output;
        
        //return '';
    }else{
        return output;
    }
}

function gene_speciesFields(species_fields,langId){
  //console.log(species_fields)
    var output = '';
    var chjk = '';
    var ignore_fields = ['Nomenclature and Classification' , 'Documents','Nomenclature et Classification'];
    var ignore_repeat_category = [];
    var ignore_repeat_concept = [];
    var reference = 0;

    //console.log("Fields Total = "+Object.keys(species_fields).length);
    $.each(species_fields, function(k,v){
           //console.log("Passed 1" +langId);
           if(v.field.language.id == parseInt(langId)){
           //console.log("Passed Language");
           if($.trim(v.text) != ''){
           //console.log("Passed Text");
           if($.inArray( $.trim(v.field.concept), ignore_fields ) == -1){
           if( $.inArray( $.trim(v.field.category), ignore_fields ) == -1){
           if($.inArray( $.trim(v.field.concept), ignore_repeat_concept ) == -1){
           //console.log(v);
           output += chjk;
           chjk    = '</li></ul></li>';  // first li close for category close
           output += '<li><a href="#" class="jslist" style="color:white"><i></i>'+v.field.concept+'</a><ul class="closed">';
           if(v.field.category != 'Summary' && v.field.category != 'Références'&& v.field.category != 'References'){
            //console.log(v.field.category)
             output += '<li><h4>'+v.field.category+'</h4>';
             output += v.text;
           }
          
          
           ignore_repeat_concept.push(v.field.concept);
           }else{
           if($.inArray( $.trim(v.field.category), ignore_repeat_category ) == -1){
          // console.log("Passed concept");
          if(v.field.category != 'Références'&& v.field.category != 'References' ){
           output += '<li><h4>'+v.field.category+'</h4>';
           output += v.text;
          }
           ignore_repeat_category.push(v.field.category);
           }else{
           if(v.field.category != 'Références'&& v.field.category != 'References' ){
             output += "<hr>"+v.text;
            }
           }
           }
           
           }
           }
           if(v.field.category == 'Références'|| v.field.category == 'References' ){

              if(reference ==0){
                output += '<li><h4>'+v.field.category+'</h4>';
                output += '<ol>';
                reference = 2;

              }
            for(var i=0; i< v.references.length; i++){
              //console.log(i +"  "+ v.references[i]['title'].substring(0,3))
              if(v.references[i].hasOwnProperty('title')){
                if(v.references[i]['title'].substring(0,4) == "http"){
                   output +=  '<li><a target="_blank" href="'+v.references[i].title+'">'+v.references[i].title+'</a></li>'
                }else{
                  output += "<li>"+v.references[i].title+"</li>";
                }
            }else{
              //output += v.references[i].url;
              output +=  '<li><a target="_blank" href="'+v.references[i].url+'">'+v.references[i].url+'</a></li>'

            }
            if(i== (v.references - 1)){
             reference = 1;
            }
            }
            if(reference ==1){
             output += '</ol>';
            }
           }
          
           }
           
           }
            
           });
    //console.log(output);
    return output;
    
    
}
function gene_Images(resource){
  var html = '';

    //html += '<div style="margin-bottom: auto;">';
    /*html += '<ul class="topic">';
    html += '<li ><a class="set" href="#Portraits">Images</a>';
    html += '<ul>';*/
  var splitVar1, splitVar2;
  for(var i=0; i < resource.length; i++){
    

    if(resource[i].url.split('/')[4] != "observations"){
      splitVar1 = resource[i].url.split('org')[1].replace(/\s/g, "");
      splitVar2 = resource[i].icon.split('org')[1].replace(/\s/g, ""); 
      //console.log(splitVar2)
      html += '<div class="img">';
      html +=  '<a target="_blank" href="http://127.0.0.1:5000'+splitVar1+'">'
      html += '<img src="http://127.0.0.1:5000'+splitVar2+'" alt="Trolltunga Norway" width="300" height="200">'
      //var enco = encodeURI("http://127.0.0.1:81/biodiv/img/Abelmoschusficulneus/abmfi_20060928_113636_th1.jpg")
      //html += '<img src="'+enco+'" alt="Trolltunga Norway" width="300" height="200">'

      html += '</a></div>'
     // html += '<li><a href="'+splitVar1+'"><img src="'+splitVar2+'" alt="" title="" /></a></li>';
    }
  
  }
        //html += '</div><br>'

  /* html += '</ul>'
   html += '</li>';
   html += '</ul></div>';
   html += '<br>'*/
   return html;
}
function gene_html(speciesInstance,langId){
    var output ='';
    output += '<div class="specieslocal">';
    output += '<a href="#" rel="en_'+speciesInstance.id+'" class ="change_lan" style="color:#A0D37B;">En</a> | <a href="#" rel="fr_'+speciesInstance.id+'" class ="change_lan" style="color:#A0D37B;">Fr</a>';
    output += '<h1>'+speciesInstance.title;
    var portal_url = 'http://portal.wikwio.org/species/show/'+speciesInstance.id;
    if(langId == 123){
      output += '<a href="#" onclick=\'window.open("'+portal_url+'", "_system");\' style="text-decoration:none;color:#A0D37B;" class="portallinkanchor">- Online version</a></h1>';
    }else {
      output += '<a href="#" onclick=\'window.open("'+portal_url+'", "_system");\' style="text-decoration:none;color:#A0D37B;" class="portallinkanchor">- Version en ligne</a></h1>';

    }

    // output += '<img src="species/1.jpg" style="width: 100%;height: 50%;" />';
    /* Species List  Started */
    output += gene_Images(speciesInstance.resource) 
    output += '<ul style="float: left;width: 100%;">';
    
    //output += gene_breif(speciesInstance.notes);
    
    //output += gene_classify(speciesInstance.taxonRegistry);
    
    output += gene_synonyms(speciesInstance.synonyms, langId);
    
    output += gene_commonnames(speciesInstance.common_names);
    
    output += gene_speciesFields(speciesInstance.fields,langId);
    
    output += '</ul></div>';
    return output;
    
}



$(document).on('click',".jslist",function() {
    var _this = $(this);
    _this.toggleClass('active', 5);
    _this.next().toggleClass('closed', 500);
    $(".jslist").not(_this).each(function() {
            $(this).next().addClass('closed', 500);
            $(this).removeClass('active', 5);
    });
});



$(document).on('click','.change_lan',function(){
   var spLan    = $(this).attr('rel');
   var languageList = {'en' : '123', 'fr' : '137'};
   var spLanObj = spLan.split("_");
   var lanStr = spLanObj[0];
   var speciesId = spLanObj[1];
   console.log(spLanObj)
   var languageId = languageList[lanStr];
   //console.log("languageId ="+languageId+" speciesId ="+speciesId+" lanStr ="+lanStr);
   
   $.ajax({
          url : 'species/json/'+speciesId+'.json',
          dataType : "json",
          success : function(data){
          var html_output = gene_html(data.instance,languageId);
          $(".speciespopup").hide();
          $(".popup").html(html_output).show();
          }
          });
});




function showtooltip(cid, tiptext)
{
  /*if (returnie())
    svgdoc = document.svgquest.getSVGDocument();
  else
    svgdoc = document.svgquest.contentDocument; 
    
  var mid = svgdoc.getElementById(cid);
  
  if (!(mid.hasAttribute("fill-opacity")))
    mid.setAttribute("style", "fill-opacity:0.85");
  
  var bbox = svgdoc.getElementById(cid).getBBox();  
  
  var rectbox = svgdoc.getElementById("recttooltip");
  var node = svgdoc.getElementById("textboxid");
  var nwidth = bbox.width;
  var newx = bbox.x+nwidth/2-23;
  var newy = bbox.y+2 +20;

  var child = node.firstChild;
  while (child != null)
  {
    if (child.nodeName == "tspan" && child.hasChildNodes()) 
        child.firstChild.nodeValue = " ";
    
    child = child.nextSibling;
  }

  rectbox.setAttribute("x", newx);
  rectbox.setAttribute("y", newy);  
  rectbox.setAttribute("style", "fill:#FAFE90;stroke:#474746;stroke-width:18;fill-opacity:0.85");
  node.setAttribute("x", newx + 100);
  node.setAttribute("y", newy + 400);
  node.setAttribute("style", "font:380px verdana,Trebuchet MS, sans-serif;pointer-events:none;fill:#black");

  var lan = "fr";
  $(".languagecheck").each(function(){            
            var that = $(this);
            if(that.hasClass('ui-btn-active')){
              lan = that.attr('rel'); 
            }
         });
  if(lan == 'en'){
    response = tooltips_en[cid];
  }else{
        response = tooltips_fr[cid];

  }
  //console.log("cid ="+cid+" tooltips ="+response+" tiptext ="+tiptext);
  response = response.replace("&gt;", ">");
  response = response.replace("&lt;", "<");
  response = response.replace("&amp;", "&");
  response = response.replace("&#232;", "è");
  response = response.replace("&#233;", "é");
  newtip = response;       
//  new_width = response.length * 1.5 + response.length * 0.5 ;      
  new_width = response.length * 2 ;      
  calwidth = new_width + newx;
  node.firstChild.nodeValue = " ";
  flag = 1;
  
    if (calwidth > 23000)
    { 
    flag = 0;
    var mysplit = response.split(" ");
    newtip = "";
    remtip = ""
    addbr = mysplit.length/2;
    addbr = Math.floor(addbr);
    for(i = 0; i < mysplit.length; i++)
    {
      if (i <= addbr)
        newtip = newtip + mysplit[i] + " ";         
      else
        remtip = remtip + mysplit[i] + " ";
    }
    newstr = remtip.replace(/^s+|s+$/g,"");
    if (newstr.length > 0 )
    {
      // wrap the tooltip in two lines, if the tooltip is too big
      fspan = svgdoc.createElementNS(svgns, "tspan");
      var textnode = svgdoc.createTextNode(newtip);       
      fspan.appendChild(textnode);
      fspan.setAttribute("x", newx +2);
      fspan.setAttribute("y", newy+5);        
      node.appendChild(fspan);
      
      
      fspan = svgdoc.createElementNS(svgns, "tspan");
      var textnode = svgdoc.createTextNode(remtip);
      fspan.appendChild(textnode);
      fspan.setAttribute("x", newx+2);
      fspan.setAttribute("y", newy + 10);
      node.appendChild(fspan);
      
      rectbox.setAttribute("width", newtip.length * 1.5 + newtip.length * 0.35);
      rectbox.onclick = function() { parent.replacechar(cid)}
      node.onclick = function() { parent.replacechar(cid)}
      rectbox.setAttribute("height", 14);
    }         
    else
       flag = 1
      }
      if (flag == 1) 
      {         
    rectbox.setAttribute("height", 6*100);  
    rectbox.setAttribute("width",new_width*100 + 300);
    node.firstChild.nodeValue = response;
    rectbox.onclick = function() { parent.replacechar(cid)}
    node.onclick = function() { parent.replacechar(cid)}
       }*/
}


function showrobotip(cid, tiptext)
{
  /*if (returnie())
    svgdoc = document.svgquest.getSVGDocument();
  else
    svgdoc = document.svgquest.contentDocument; 
    
       // console.log(svgdoc)

  
  var mid = svgdoc.getElementById(cid);
  if (!(mid.hasAttribute("fill-opacity")))
    mid.setAttribute("style", "fill-opacity:0.85");

    var bbox = svgdoc.getElementById(cid).getBBox();  

  
  var rectbox = svgdoc.getElementById("recttooltip");
  var node = svgdoc.getElementById("textboxid");
  var nwidth = bbox.width;
  var newx = bbox.x + nwidth / 2 - 2500;
  if (newx < 0)
    newx = newx + 2000;
  var newy = bbox.y + 2;  
  
  //response = tiptext;
  //console.log(tooltips[cid] +" tiptext = "+tiptext+" cid="+cid);
  response = tooltips[cid];

  new_width = response.length * 1.5 + response.length * 0.4 + 6;      
  rectbox.setAttribute("width",new_width*100);
  
  calwidth = new_width + newx;
  if (calwidth > 240)
    newx = newx - 28;
    
  rectbox.setAttribute("x", newx);
  rectbox.setAttribute("y", newy);  
  rectbox.setAttribute("style", "fill:#FAFE90;stroke:#474746;stroke-width:18;fill-opacity:0.85");
  node.setAttribute("x", newx + 100);
  node.setAttribute("y", newy + 400);
  node.setAttribute("style", "font:380px verdana,Trebuchet MS, sans-serif;pointer-events:none;fill:#black");
  node.firstChild.nodeValue = response;
  rectbox.onclick = function() { parent.showquest(cid)}
  node.onclick = function() { parent.showquest(cid)}
  */
}


function hidetooltip(cid)
{ 
  /*if (returnie())
    svgdoc = document.svgquest.getSVGDocument();
  else
    svgdoc = document.svgquest.contentDocument;
  
  var mid = svgdoc.getElementById(cid);
  if (isNaN(parseInt(mid.getAttribute("fill-opacity"))))
  {
    //alert ("I am here")
    mid.setAttribute("style", "fill-opacity:1");
  }
  
  var rectbox = svgdoc.getElementById("recttooltip");
  var node = svgdoc.getElementById("textboxid");  
  rectbox.setAttribute("x", "-10000");
  rectbox.setAttribute("y", "-10000");
  node.setAttribute("x", "-10000");
  node.setAttribute("y", "-10000");
  //node.firstChild.nodeValue = " ";

  var child = node.firstChild;
  while (child != null)
  {
    //see if child is a tspan and has child nodes
    if (child.nodeName == "tspan" && child.hasChildNodes()) 
        child.firstChild.nodeValue = " ";
    
    child = child.nextSibling;
  }*/
}


function print_array(array)
{
  for ( var i = 0; i < array.length; i++ )
  {
    console.log(array[i]+" ");
  }
  return;
}

function print_array_console(array)
{
  for ( var i = 0; i < array.length; i++ )
  {
    console.log(array[i]+" ");
  }
  return;
}

function Select_carac_From_objet(carac, objet)
{
  Out = [];
  for ( var i = 0; i < Object.keys(objet).length; i++ )
  {
    Out.push(objet[i][carac]);
  }
  return Out;
}

function Select_all_From_objet_where_X_eqal_Y(objet,X,Y)
{
  var Objet_fic = [];
  var eps = 0;
  for ( var i = 0; i < Object.keys(objet).length; i++ )
  {
    if ( objet[i][X] == Y ) 
    {
      Objet_fic[i-eps] = objet[i];
    }
    else
    {
      eps++;
    }
  }
  return Objet_fic;
}


function zeros( usrstore, Index_car, Nb_car )
{
  for ( var i = Index_car; i < ((Nb_car*1)+(1*Index_car)); i++ )
  {
    if ( usrstore[i] == "1" )
    {
      return false;
    }
  }
  return true;
}

function Ones(Tab)
{
  for ( var i = 0; i < Tab.length ; i++ )
  {
    if ( Tab[i] != 1 )
    {
      return false;
    }
  }
return true;
}

function addzero(str)
{
  if (str.length == "1")
    return "0" + str;
  else
    return str;
}

function Entropy(A,Size)
{
  S = 0;
  C = A.length;
  for ( var i = 0; i < C ; i++ )  
  {
    if ( A[i] != 0 )
    {
      r = ( A[i] / Size );
      S = S - ( r * Math.log( r ) ) ; // log(2)
    }
  }
  S = S / Math.log( C );
  return S;   
}

function Dinstinct_Tab_flore(Union)
{
  New = [];
  for ( var i = 0; i < Union.length ; i++ ) 
    {
      if ( New.indexOf(Union[i]) == -1 )
      {
        New.push(Union[i]);
      }
    }
  return New;
}


function Select_species_flore(etat)
{
  Carac_ID = Select_carac_From_objet("ID_CARAC",caract_full);
  // print_array(Carac_ID+" ");

  flore = flore_full;
  L = etat.length;

  // document.write(L+" ");

  for ( var i = 0; i < L ; i++ )  
  {
    if ( etat[i] == 1 )
    {
      // document.write(" oui ");
      flore_bis = [];
      Carac = Carac_ID[i];
      // document.write(Carac+" ");
      for ( var j = 0; j < Object.keys(flore).length ; j++ )  
      {
        if ( flore[j][Carac] == 1 )
        {
          flore_bis.push( flore[j] );
        }
      }
      flore = flore_bis;
    }
  }

  return flore;   
} 



function rajout_Carac(flore,Carac)
{
  var eps = 0;
  var New = [];
  for ( var j = 0; j < Object.keys(flore).length; j++ ) 
  {
    if ( flore[j][Carac] == "1" )
    {
      New[j-eps] = flore[j];
    }
    else
    {
      eps++;
    }
  }
  return New;
}


function Nombre_rep_Dyna_2(obj,etat)    // Calcul des effectifs restants après les différentes réponses possibles de l'utilisateur, Pour UNE question.
{

  Objet_fic = Select_all_From_objet_where_X_eqal_Y(object_asc,"Objet",obj)

  effect = [];
  Union = [];

  Nb_Car = Objet_fic[0]["Nb_Car"];        // On établit les différents caractères qui interviennent pour répondre à la question.
  Index_Car = Objet_fic[0]["Index_Car"];      // Plage des caractère : NUM :  Index_Car  -->   Index_Car + Nb_Car.

  // document.write("Nb_Car = " + Nb_Car + " ");
  // document.write("Index_Car = " + Index_Car + " ");
  // document.write("Sum = " + ((Nb_Car*1)+(1*Index_Car)) + " ");

  caracteres = Select_carac_From_objet("ID_CARAC",caract_full);

  // etat_bis = etat;

  flore = Select_species_flore(etat);
  var Carac = "";



  for ( var i = Index_Car; i < ((Nb_Car*1)+(1*Index_Car)); i++ )    // Pour chaque caractère, effectif restant s'il est sélectionné.
  {
    // document.write(i);

    // etat_bis[i] = 1;


    Carac = caracteres[i];

    flore_bis = rajout_Carac(flore,Carac);

    effect.push(Object.keys(flore_bis).length);


    for ( var k = 0; k < Object.keys(flore_bis).length; k++ )
    {
      // document.write(flore[k]["Code"]);

      Union.push(flore_bis[k]["Code"]);
    }

    // etat_bis[i] = 0;

  }

  // document.write("size : "+Union.length+" / ");
  New_Union = Dinstinct_Tab_flore(Union);
  // document.write("New_size : "+New_Union.length+" / ");
  Nb = New_Union.length;

  return [effect,Nb];

}

/*
function Nombre_rep_Dyna(obj,etat)    // Calcul des effectifs restants après les différentes réponses possibles de l'utilisateur, Pour UNE question.
{

  Objet_fic = Select_all_From_objet_where_X_eqal_Y(object_asc,"Objet",obj)

  effect = [];
  Union = [];

  Nb_Car = Objet_fic[0]["Nb_Car"];        // On établit les différents caractères qui interviennent pour répondre à la question.
  Index_Car = Objet_fic[0]["Index_Car"];      // Plage des caractère : NUM :  Index_Car  -->   Index_Car + Nb_Car.

  // document.write("Nb_Car = " + Nb_Car + " ");
  // document.write("Index_Car = " + Index_Car + " ");
  // document.write("Sum = " + ((Nb_Car*1)+(1*Index_Car)) + " ");

  caracteres = Select_carac_From_objet("ID_CARAC",caract_full);

  etat_bis = etat;

  for ( var i = Index_Car; i < ((Nb_Car*1)+(1*Index_Car)); i++ )    // Pour chaque caractère, effectif restant s'il est sélectionné.
  {
    // document.write(i);

    etat_bis[i] = 1;

    flore = Select_species_flore(etat_bis);

    effect.push(Object.keys(flore).length);


    for ( var k = 0; k < Object.keys(flore).length; k++ )
    {
      // document.write(flore[k]["Code"]);
      Union.push(flore[k]["Code"]);
    }

    etat_bis[i] = 0;

  }

  // document.write("size : "+Union.length+" / ");
  New_Union = Dinstinct_Tab_flore(Union);
  // document.write("New_size : "+New_Union.length+" / ");
  Nb = New_Union.length;

  return [effect,Nb];

}
*/

function Create_Quest(etat,appellable)
{
  var eps = 0;
  var Questions = [];
  for (var i = 0; i < Object.keys(object_asc).length; i++)
  {
    var Index_car = object_asc[i]["Index_Car"];
    var Nb_car = object_asc[i]["Nb_Car"];

    var bool = zeros( etat, Index_car, Nb_car );
    //console.log(" / Objet = "+object_asc[i]["Objet"]+"  Index_car = "+Index_car+"  Nb_car = "+Nb_car+"  result = "+bool+" / ");
    if ( zeros( etat, Index_car, Nb_car ) && ( appellable[i] == 1 ) ) 
    {
      Questions[i-eps] = object_asc[i]["Objet"];
      //console.log(" / ajout : "+object_asc[i]["Objet"]+" / ");
    }
    else
    {
      eps++;
      //console.log(" / Pas de : "+object_asc[i]["Objet"]+" / ");
    }
  }
  return Questions;
}

function Create_Appellable_one()
{
  appellable = [];
  for (var i = 0; i < Object.keys(object_asc).length; i++)
  {
    appellable.push(1);
  }
  return appellable;
}

function Best_Question(Quest,etat,Size)
{

  E_Max = 0;
  i_Max = 0;
  // print_r($Quest);
  for ( var i = 0; i < Quest.length; i++ )
  {
    Val = Quest[i];
    T = Nombre_rep_Dyna_2(Val,etat);
    // echo " Tab $Val = ";
    // print_r($T[0]);

    A = T[0];
    // print_r($A);
    Union = T[1]; 
    E = Entropy(A,Size) * ( Union / Size ) ;  // $E = Entropy($A,$Size) * ( $Union / $Size ) ; // $E = Entropy($A,$Size);

    if ( ( Union == Size ) && Ones(A) )
    {
      E = E + 5;
    }

    // document.write( Quest[i] + " Entropy = " + E + " / ");

    if ( E > E_Max )
    {
      E_Max = E;
      i_Max = i;
    }
  }
  // document.write(Quest[i_Max]);
  return /*[$Quest,*/i_Max/*]*/;      
}

function create_str(array)
{
  string = "";
  for ( var i = 0; i < array.length; i++ )
  {
    string += "|"+array[i];
  }
  return string;
}

function showreturn()
{

  $('.cancelbutton, .nextbutton').hide();

  var Last = localStorage.getItem('Last_charname'); 
  var value_Last = JSON.parse(Last);
  var string_char = value_Last.Last_charname;
  var string_quest = value_Last.Last_quest;
  var Tab_char = string_char.split("|");
  var Tab_quest = string_quest.split("|");
  //console.log(" Tab 1 ");
  print_array_console(Tab_char);
  var cname = Tab_char.pop();
  var quest = Tab_quest.pop();
  //console.log(" Tab 2 ");
  print_array_console(Tab_char);
  string_char = create_str(Tab_char);
  string_quest = create_str(Tab_quest);
  value_Last.Last_charname = string_char;
  value_Last.Last_quest = string_quest;
  //console.log(" string char envoi : "+string_char);
  localStorage.setItem('Last_charname', JSON.stringify(value_Last));

  // console.log("cancel : "+cname);

  var listvalues = localStorage.getItem('formvalues'); 
  var finalvalue = JSON.parse(listvalues);
  finalvalue.txtcharname = cname;
  finalvalue.txtquest = quest;
  finalvalue.txtback = "1";
  localStorage.setItem('formvalues', JSON.stringify(finalvalue));
  menuCheck();

  $('#showRight, #cbp-spmenu-s2 ').show();
  $('.lang_wrap').show();
  $('.canvasdiv').show();
  $('.SearchWrapper').empty();
  $('.tt').hide();
  $('#backbutton').hide();

  $('.showone').trigger('click');

  $('.message').html(showLoader()).show();
  $('.forLoader').html(showLoader()).show();

  $.get("redrawdefault.html", function(data) {
    $('.message').html(data).show();
  });

}
function returnie()
{
  if (navigator.userAgent.toLowerCase().indexOf('msie') != -1)
    return true;
  else
    return false;
}


