/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




/*
 * 
 * Author: P K JANA, Sukriti Dhang
 * IIT Kharagpur
 * 
 */

//var i = 0;

var prequestionCount = 0;
var preresultCount = 0;
 var prefullresult = "";
 var preresultPercent;
 //var timespntprequiz;
 //var newdtprequiz;
 var yourname;
var cpre=0;
var tpre;
var timer_is_on_pre = 0;

function prequizInitializeAllQuestion() {
    document.getElementById("vqt-start-pre").style.display = "none";    
    var preansCount = 0;
    var prequestionOptions = "<form name=\"prequiz\" method=\"post\" id=\"prequiz\" onsubmit=\"return false\"><ul class=\"prequestionList\">";
    prequestionCount = prequizJSON.prequestions.length;
    for (var qc = 0; qc < prequestionCount; qc++) {
        preansCount = prequizJSON.prequestions[qc].prea.length;
        prequestionOptions = prequestionOptions + "<li id=\"prequestion" + qc + "\" style=\"font-weight:bold;padding-top:20px;text-align:justify\">" + (qc + 1) + ". " + prequizJSON.prequestions[qc].preq + "<ul>";
        for (var j = 0; j < preansCount; j++) {
            prequestionOptions = prequestionOptions + "<li><input type = \"radio\" name = \"preans" + qc + "\" value = \"" + j + "\">" + prequizJSON.prequestions[qc].prea[j].option + "</li>";
        }
        prequestionOptions = prequestionOptions + "</ul></li>";
    }
    prequestionOptions = prequestionOptions + "</ul><button class=\"submit\" id=\"submitpreans\" onclick=\"return prequizSubmit();\" type=\"submit\">Submit</button> </form>";
	//Seconds spent on page:&nbsp;<input id=\"seconds-spent\" size=\"6\" readonly=\"\" />
    document.getElementById("vlab-quiz-question-answer-options-pre").innerHTML = prequestionOptions;
    dynamicMathConveter();
	startCountpre();
}

function startCountpre() {
 cpre = 0;
  if (!timer_is_on_pre) {
    timer_is_on_pre = 1;
    timedCountpre();
  }  
}
function stopCountpre() {
  clearTimeout(tpre);
  timer_is_on_pre = 0;
}
function prequizSubmit() {
    for (var i = 0; i < prequestionCount; i++) {
        var radios = document.getElementsByName("preans" + i);
        for (var j = 0; j < radios.length; j++) {
           var radio = radios[j];
            if (radio.checked) {
                document.getElementById("prequestion" + i).classList.remove("cross");
                document.getElementById("prequestion" + i).classList.remove("tick");
                if (prequizJSON.prequestions[i].prea[radio.value].correct === true) {
                    document.getElementById("prequestion" + i).classList.add("tick");
					 preresultCount++;
                } else {
                    document.getElementById("prequestion" + i).classList.add("cross");
                }
            }
        }
    }
	//alert(resultCount)
	//document.getElementById("vlab-quiz-result").innerHTML = "<p> You have scored " + resultCount + " out of " + questionCount + ".</p>";// + fullresult;
    //dynamicMathConveter()
prequizshowResult();
//storedatafile();
document.getElementById("submitpreans").style.display="none";
}

function prequizshowResult() {
    document.getElementById("vlab-quiz-result-pre").style.display = "block";
    document.getElementById("vqt-try-again-pre").style.display = "block";
   
    /*var fullresult = "";
    for (var i = 0; i < questionCount; i++) {
      //  fullresult = fullresult + "<p><b>" + (i + 1) + ". " + prequizJSON.prequestions[i].q + "</b></p>";
        var ansCount = prequizJSON.prequestions[i].a.length;
        var k = -1;
        for (var j = 0; j < ansCount; j++) {
          //  fullresult = fullresult + "<p>(" + String.fromCharCode(97 + j) + ") " + prequizJSON.prequestions[i].a[j].option + "</p>";
            if (prequizJSON.prequestions[i].a[j].correct === true)
                k = j;
        }
        if (prequizJSON.prequestions[i].a[radio.value].correct === true) {
            //resultCount++;
            //fullresult = fullresult + "<p> You have choosen option (" + String.fromCharCode(97 + parseInt(resultArray[i])) + "). The answer is correct." + prequizJSON.questions[i].correct;
        } else {
            fullresult = fullresult + "<p><b>Question :" + prequizJSON.prequestions[i].q.incorrect + "</b></p>"+"<p> The answer is incorrect. The correct option is (" + String.fromCharCode(97 + k) + ")." + prequizJSON.questions[i].incorrect;
//You have choosen option (" + String.fromCharCode(97 + parseInt(resultArray[i])) + ").       
	   }
    }*/
     preresultPercent = (preresultCount / prequestionCount) * 100;
	  yourname=document.getElementById("yourname").value;
	// newdtprequiz = new Date();
	 //timespntprequiz = newdtprequiz.getSeconds();
//alert(tm);
 //document.getElementById("seconds-spent").innerHTML = tm;
    document.getElementById("vlab-quiz-result-pre").innerHTML = "<p> Name: " +yourname+ "</p><br><p> You have scored " + preresultCount + " out of " + prequestionCount + ".</p><br><p>Your Grade percentage: "+ (preresultPercent).toPrecision(5) + "</p><br><p> Time Spent: " + cpre + "sec</p>";// + fullresult;
	document.getElementById("yourname").style.display = "none";
	document.getElementById("labelyourname").style.display = "none";
	
   dynamicMathConveter()
	
}
function prequiztryAgain() {
    //document.getElementById("vlab-quiz-question-answer-options").style.display = "block";
    document.getElementById("vlab-quiz-result-pre").style.display = "none";
   // document.getElementById("vqt-next").style.display = "block";
    document.getElementById("vqt-try-again-pre").style.display = "none";
    //i = 0;

	preresultCount = 0;
    prequizInitializeAllQuestion();
	
	stopCountpre();
	startCountpre();
	document.getElementById("yourname").style.display = "block";
	document.getElementById('yourname').setAttribute('readonly', true); 
	document.getElementById("labelyourname").style.display = "block";
}
function dynamicMathConveter() {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
///////calculate timer///////
function timedCountpre() {
 // document.getElementById("txt").value = c;
  cpre = cpre + 1;
  tpre = setTimeout(timedCountpre, 1000);
}


/*function storedatafile()
{
  global  set fso = CreateObject("Scripting.FileSystemObject");  
    set s   = fso.CreateTextFile("E:/vlt_iitkgp/analoge_iitkgp/src/lab/storedata/filename.txt", True); 
 
    var firstName = document.getElementById('yourname'); 
    //var lastName  = document.getElementById('lastName'); 
 
    s.writeline("First Name :" + FirstName); 
  //  s.writeline("Last Name :" + lastName); 
 
    s.writeline("-----------------------------"); 
    s.Close(); 

}*/