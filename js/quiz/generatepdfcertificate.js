function generatepdfcertificate(){
  
  //---------------------------create main div element ----------------------------//
var div1 = document.createElement("div");
div1.id='content2';
div1.style.width = "800px";
div1.style.height = "600px";
div1.style.padding = "20px";
div1.style.textAlign = "center";
div1.style.margin=" auto";
div1.style.border="10px solid #07223b";
div1.style.backgroundColor="white";

var div2 = document.createElement("div");
div2.style.width = "750px";
div2.style.height = "550px";
div2.style.padding = "20px";
div2.style.textAlign = "center";
div2.style.border="5px solid #054d11";
//div2.style.backgroundImage=("/images/iit-kharagpur-logo.png");
div2.style.backgroundColor="white"; 

document.body.appendChild(div1);
div1.append(div2);
//------------------------------create image element -------------------------//
var x1 = document.createElement("IMG");
    x1.setAttribute("src", "../images/iit-kharagpur-logo.png");
    x1.setAttribute("width", "80px");
    x1.setAttribute("height", "80px");
    x1.style.position="relative";
    x1.style.float="right";
    
    div2.append(x1);
var x2 = document.createElement("IMG");
    x2.setAttribute("src", "../images/vlabslogo.png");
    x2.setAttribute("width", "80px");
    x2.setAttribute("height", "80px");
    x2.style.position="relative";
    x2.style.float="left";
    
    div2.append(x2);
 //-----------------------create span element----------------------------------// 
    var dataSpan = document.createElement('span');
    dataSpan.className='circTxt';
    dataSpan.id='myElement'
    dataSpan.style.fontSize="25px";
    dataSpan.style.fontWeight="bold";
    dataSpan.style.textDecorationColor="#07223b";
    dataSpan.style.display= "inline-block";
  /*adjust as needed*/
  dataSpan.style.marginBottom= "110px";
  dataSpan.style.top="20px";
  //dataSpan.style.fontSize= "medium";
  dataSpan.style.textAlign= "center";
  
    //dataSpan.innerHTML="Virtual Laboratory<br><br>";
    div2.append(dataSpan);

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

circularText("VIRTUAL LABORATORY ", 250, 0);

    var dataSpan1 = document.createElement('span');
    dataSpan1.style.fontSize="30px";
    //dataSpan1.style.fontWeight="bold";
    
    dataSpan1.innerHTML="<br><br><br>Certificate of Completion <br><br><br>";
    div2.append(dataSpan1);
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
                var clockElement = MMM+' '+dd+','+yyyy;
             //   document.getElementById("datetoday").innerHTML = clockElement.toString();

//-------------------create div element consisting main content of certificate------------------------//
var ttymspent=cpre+ cpost;
var tpercentage = ((preresultPercent+resultPercent)/2).toPrecision(4);
                  var studentname=document.getElementById("yourname").value;//'xyz abc';//
                  var prequizresult_student=preresultCount;//'a';//
                  var postquizresult_student=resultCount;//'b';//
                  var expname=document.getElementById("exp5").value;//'Experiment Name';//
                  var totaltymspent=ttymspent;//'tt';
                  var gradepercentage= tpercentage;
                  
    var div3 = document.createElement("div");
        div3.id = 'showcertificatecontent';
        div3.innerHTML = "<span style='font-size:20px;'><i>This is to certify that </i> <b>"+ studentname + "</b> <i>has scored</i> <b>"+ prequizresult_student +"</b> <i>in pre quiz and</i> <b>"+ postquizresult_student +"</b> <i>in post quiz. <br> He/She has performed the</i> <b>"+ expname +"</b> <i>experiment using <b>Analog Electronics Circuits</b> Virtual Laboratory. He/She has successfully completed the task in </i> <b>"+ totaltymspent + " sec</b> <i>with score of</i> <b>"+ gradepercentage + "%.</b></span><br>";
          //    document.getElementById("showcertificatecontent").innerHTML="<span style='font-size:20px;'><i>This is to certify that </i> <b>"+ studentname + "</b> <i>has scored</i> <b>"+ prequizresult_student +"</b> <i>in pre quiz and</i> </b>"+ postquizresult_student +"</b> <i>in post quiz. <br> He/She has performed the</i> <b>"+ expname +"</b> <i>using virtual laboratories. He/She has successfully completed the task in </i> <b>"+ totaltymspent + " sec</b> <i>with score of</i> <b>"+ gradepercentage + "%.</b></span>";
          div2.append(div3);
//-------------------------create div element to show date --------------------------------------------//
    var div4 = document.createElement("div"); 
       // div4.id = 'datetoday';
        div4.innerHTML = " <br><br><span style='font-size:20px'>Completed Date</span><br> <span id='datetoday' style='font-size:20px'><i><b> "+ clockElement + "</b></i></span><br><br>";
        div2.append(div4);
      
//------------------------create div element to show ratings------------------------------------------//
var div5 =  document.createElement("div");
    div5.id= 'ratings';
    div5.style.width='220px';
    div5.style.height='80px';
    div5.style.position=' relative';
   // div5.style.top='50%';
   // div5.style.left='50%'; 
    div5.style.marginTop='10px'; 
    div5.style.left='280px'; 
    //div5.style.float='center'; 
    
    div2.append(div5);
   
    var x3 = document.createElement("IMG");
    x3.id='3star';
    x3.style.position='absolute';  
    x3.style.top='- 20px'; 
    x3.style.left='10px'; 
    
    div5.append(x3);

    //------------------------------give star ratings based on performance----------------//
   
    if(gradepercentage>=70){
      image3 = document.getElementById('3star');
      image3.src = "../images/3star.png";
      
    }       
    else if(gradepercentage>=50 && gradepercentage<69)    {
      image2 = document.getElementById('3star');
      image2.src = "../images/2star.png";
    }
    else if(gradepercentage>=35 && gradepercentage<=49){
      image1 = document.getElementById('3star');
      image1.src = "../images/1star.png";
    }
    else
    {
    //alert("Try next time for getting star ratings");
    document.getElementById("ratings").style="block";
    //return;
    }
//--------------------- create elements table 1 <table> and a <tbody>---------------------------------//
        var tbl = document.createElement("table");
        
        var tblBody = document.createElement("tbody");
        //tblBody.style.marginTop="40px";
        tblBody.style.position="relative";
        tblBody.style.top="-50px";
        tblBody.style.float="left";

         // cells creation

    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cellText = document.createTextNode("$outrch.getSignature()");
    var cell11 = document.createElement("td");
    cell11.style.position="relative";
    cell11.style.float="right";
    cell11.style.right="-170px";
    var cellText11 = document.createTextNode("$pi.getSignature()");

    cell.appendChild(cellText);
    row.appendChild(cell);
    cell11.appendChild(cellText11);
    row.appendChild(cell11);


    var row1 = document.createElement("tr");
    var cell1 = document.createElement("td");
    cell1.style.textAlign="center";
    cell1.style.width="200px";
    cell1.style.float="left";
    cell1.style.border="0";
    cell1.style.borderBottom="1px solid #000";
    var cell21 = document.createElement("td");
    cell21.style.textAlign="center";
    cell21.style.position="relative";
    cell21.style.width="200px";
    cell21.style.float="right";
    cell21.style.right="-300px";
   // cell21.style.paddingRight="18px";
    cell21.style.border="0";
    cell21.style.borderBottom="1px solid #000";
   
    var cellText1 = document.createTextNode("");
    cell1.appendChild(cellText1);
    row1.appendChild(cell1);
    var cellText21 = document.createTextNode("");
    cell21.appendChild(cellText21);
    row1.appendChild(cell21);

   var row2 = document.createElement("tr");
   var cell2 = document.createElement("td");
   cell2.style.textAlign="center";
   cell2.style.position="relative";
   cell2.style.float="left";
   cell2.style.left="0px";
   var cellText2 = document.createTextNode("Signature of Outreach Coordinator");
   cell2.appendChild(cellText2);
   row2.appendChild(cell2);

   var cell22 = document.createElement("td");
   cell22.style.textAlign="center";
   cell22.style.position="relative";
   cell22.style.float="right";
   cell22.style.right="-300px";
   var cellText22 = document.createTextNode("Signature of Principal Investigator");
   cell22.appendChild(cellText22);
   row2.appendChild(cell22);

    //row added to end of table body
    tblBody.appendChild(row);
    tblBody.appendChild(row1);
    tblBody.appendChild(row2);
  
  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <div2>
  div2.appendChild(tbl);

  openWin();
  createPDF();
  }
 
  //----------------------------open window----------------------------//
function openWin() {
  var divText = document.getElementById("content2").outerHTML;
  var myWindow = window.open('', 'Generate e-certificate', 'width=900,height=750');
  var doc = myWindow.document;
  doc.open();
  doc.write(divText);
  doc.close();
  
}


 //--------------------------generate pdf---------------------//
    
     
 (function () {  
  //var  
  form = $('#content2'),  
   cache_width = form.width(),  
   //a4= [595.28, 841.89]; // for a4 size paper width and height  

  $('#downloadPDF').on('click', function () {  
      $('body').scrollTop(0);  
      createPDF();  
  });  
  //create pdf  
  function createPDF() {  
      getCanvas().then(function (canvas) {  
          var  
           img = canvas.toDataURL("image/png",5.0);
  
          var pdf = new jsPDF('1', 'pt',  [$('#content2').width(), $('#content2').height()]);
          pdf.addImage(img, 'JPEG', 30, 30, 730,530); 
     
          pdf.save('e-certificate.pdf');  
          form.width(cache_width);     
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
