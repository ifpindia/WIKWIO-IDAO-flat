    
    $('.tt').hide();
        var replacevalues = { "no_constraints": "5", "no_robot": "35" , "no_state": "279", "no_species": "345"}; 
        localStorage.setItem('globalVar', JSON.stringify(replacevalues));
        var no_constraints = 5;
        var no_robot = 35;
        var no_state = 279;
        var no_species = 345;

        var percent = { "count": "345", "val": "0" }; 
        localStorage.setItem('percentage', JSON.stringify(percent));      
        $('.buttons').css({'text-align':'center'});
        var isframe = '<svg  id="svgquest" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink">';

         var test = 'staticSVGs/index.svg';    
            $.get(test, function(data) {
              isframe+=data;
              isframe+='</svg>';
              $('.message').html(isframe).show(); 
              $('#one').show();     
              //alert("hai");                     				
				      active_touch();
            },dataType="text");
/*
         var isframe = '<svg  id="homesvg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24000 18000" xmlns:xlink="http://www.w3.org/1999/xlink">';
         var src = 'img/Back_Grey.svg';  
            $.get(src, function(data) {
              isframe+=data;
              isframe+='</svg>';

              $('.message').html(isframe).show(); 
              $('#one').show();     
              //alert("hai");                             
              active_touch();
            },dataType="text");
*/

			 function extraHome(){
             var percent = { "count": "345", "val": "0" }; 
        localStorage.setItem('percentage', JSON.stringify(percent));


            var listvalues = localStorage.getItem('formvalues'); 
            var finalvalue = JSON.parse(listvalues);
             finalvalue.txtstore = "0";
            
             updateProcess(345,0);
            $(".end").html("<p> 345 espèces à </p>");

           }
       
            var listvalues = localStorage.getItem('percentage'); 
            var finalvalue = JSON.parse(listvalues);
            var number = finalvalue.count;
            var value = finalvalue.val;
          updateProcess(345,0);
           $(".end").html("<p>" + number + " espèces à </p>");

function updateProcess(number,value1){
console.log(number+" "+value1);
 var lan = 'fr';
         $(".languagecheck").each(function(){             
            var that = $(this);
            if(that.hasClass('ui-btn-active')){
              lan = that.attr('rel'); 
            }
         });

  $(".canvasdiv").empty();
  $(".canvasdiv").html('<div class="circle" onclick="showresults()" style="position: absolute; width:10vw; height: 10vw; cursor: pointer;" ></div> <p onclick="showresults()" style="position: absolute;z-index: 9999;color: red;left: 40px;top: 20px;width: 100px; cursor: pointer;"><span class="per_cou" style="margin-left: 10px;">'+number+'</span> <br>'+window.i8ln[lan].species+'</p><br><p onclick="showresults()" style="position: absolute;top: 65px;width: 100px;left: 50px;z-index: 9999;color: red; cursor: pointer;"> '+window.i8ln[lan].at+' <span class="per_num">'+value1+'%</span></p>');
  
  var val1 = value1*0.01;
  $('.circle').circleProgress({
        value:val1,
        // position: 10;
        style: "cursor: pointer;",
        //height:140,
        //width:140,
        size: 140,
        fill: {
            gradient: ["red", "orange"]
        }
    });
  // $("circle").css({"margin-left": "30px", "margin-right": "30px"});

}

var longpress;

function active_touch(){ 
 var newcheck = 0;

$("#homesvg g").on('touchstart' ,function(ev){      
 longpress=true;    
 setTimeout(function() {    
    if(longpress){
      newcheck = 1;
     //alert("long press works!");
   
     for(var j = 0; j < Object.keys(object_asc).length; j++){
            if(object_asc[j]['Objet'] == ev.target.id){
              //alert(object_asc[j]['TipText']);
              return false;
            }
     }

    }

  }, 2000);
 if(newcheck == 1){
  newcheck =0;
    return false;
  }
})
$("#homesvg g").on('touchend' ,function(){      
    longpress=false;    
})
}
