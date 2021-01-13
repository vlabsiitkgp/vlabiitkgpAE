
                 /* var studentname='xyz abc';
                  var prequizresult_student=5;
                  var postquizresult_student=5;
                  var expname='Schmitt';
                  var totaltymspent=20;
                  var gradepercentage=40;*/

                  var ttymspent=cpre+ cpost;
                  var tpercentage = ((preresultPercent+resultPercent)/2).toPrecision(4);

                  var studentname='xyv';//document.getElementById("yourname").value;
                  var prequizresult_student=preresultCount;
                  var postquizresult_student=resultCount;
                  var expname='xy';//document.getElementById("exp5");
                  var totaltymspent=ttymspent;
                  var gradepercentage= tpercentage;

                  
              document.getElementById("showcertificatecontent").innerHTML="<span style='font-size:20px;'><i>This is to certify that </i> <b>"+ studentname + "</b> <i>has scored</i> <b>"+ prequizresult_student +"</b> <i>in pre quiz and</i> <b>"+ postquizresult_student +"</b> <i>in post quiz. <br> He/She has performed the</i> <b>"+ expname +"</b> <i> experiment using <b>Analog Electronics Circuits</b> Virtual Laboratory. He/She has successfully completed the task in </i> <b>"+ totaltymspent + " sec</b> <i>with score of</i> <b>"+ gradepercentage + "%.</b></span>";
              
              
              function circularText(txt, radius, classIndex) {
                txt = txt.split(""),
                classIndex = document.getElementsByClassName("circTxt")[classIndex];

                var deg = 180 / txt.length,
                origin = 280;

                txt.forEach((ea) => {
                  ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 80%'>${ea}</p>`;
                  classIndex.innerHTML += ea;
                  origin += deg;
                });
              }

circularText("Virtual Laboratory ", 180, 0);  
  //--------------------------enter current date------------------------------------//
                 // var clockElement=document.getElementById("clock");
                 var today = new Date();
                  var dd=today.getDate();
                 // var mm=today.getMonth()+1;
                 var months=["January", "February", "March", "April", "May","June","July","August","September","October","November","December"];
                 var MMM = months[today.getMonth()];
                  var yyyy=today.getFullYear();
                  if(dd<10){
                      dd='0'+dd;
                  }
                 /* if(mm<10){
                      mm='0'+mm;
                  }*/
                var clockElement = MMM+' '+dd+', '+yyyy;
                document.getElementById("datetoday").innerHTML = clockElement;    
    //------------------------------give star ratings based on performance----------------//
   
    if(gradepercentage>=70){
      image3 = document.getElementById('3star');
      image3.src = "./images/3star.png";
      
    }       
    else if(gradepercentage>=50 && gradepercentage<69)    {
      image2 = document.getElementById('3star');
      image2.src = "./images/2star.png";
    }
    else if(gradepercentage>=35 && gradepercentage<=49){
      image1 = document.getElementById('3star');
      image1.src = "./images/1star.png";
    }
    else
    {
    //alert("Try next time for getting star ratings");
    document.getElementById("ratings").style="block";
    //return;
    }
                

    //----------------------download as pdf------------------------//
 /*   $('#downloadPDF').click(function () {
   // domtoimage.toPng(document.getElementById('content2'))
      //  .then(function (blob) {
            var pdf = new jsPDF('l', 'pt', [$('#content2').width(), $('#content2').height()]);

          //  pdf.addImage(blob, 'PNG', 0, 0, $('#content2').width(), $('#content2').height());
            pdf.save("test.pdf");

          //  that.options.api.optionsChanged();
       // });
});*/
/*$(window).on('load', function() {
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
$('#downloadPDF').click(function () {
    doc.fromHTML($('#content2').html(), 15, 15, {
        'width': 700,
            'elementHandlers': specialElementHandlers
    });
    doc.save('file.pdf');
});
});*/
                     
                
  //--------------------------generate pdf---------------------//
    
     
        (function () {  
            //var  
            form = $('#content2'),  
             cache_width = form.width(),  
             a4= [595.28, 841.89]; // for a4 size paper width and height  
      
            $('#downloadPDF').on('click', function () {  
                $('body').scrollTop(0);  
                createPDF();  
            });  
            //create pdf  
            function createPDF() {  
                getCanvas().then(function (canvas) {  
                    var  
                     img = canvas.toDataURL("image/png",5.0);
                    
                   /* domtoimage.toPng(document.getElementById('content2'))
    .then(function (blob) {
       // window.saveAs(blob, './images/iit-kharagpur-logo.png');*/
   
                   //  doc = new jsPDF({  
                     //    unit: 'px',  
                       //  format: 'a4'  
                    // });  
                    var pdf = new jsPDF('1', 'pt',  [$('#content2').width(), $('#content2').height()]);
                  //  var width = pdf.internal.pageSize.getWidth();
                   // var height = pdf.internal.pageSize.getHeight();
               //    var options = {orientation: 'p', unit: 'mm', format: custom};
                    pdf.addImage(img, 'JPEG', 30, 30, 730,530); 
                  // pdf.addImage(blob, 'PNG', 0,0, [$('#content2').width(), $('#content2').height()]);
               
                    pdf.save('e-certificate.pdf');  
                    form.width(cache_width);  
               // that.options.api.optionsChanged();
              // });
                });  
            }  
      
            // create canvas object  
            function getCanvas() {  
               // form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');  
                return html2canvas(form, {  
                    imageTimeout: 1000,  
                    removeContainer: true  
                });  
            }  
      
        }());  
   