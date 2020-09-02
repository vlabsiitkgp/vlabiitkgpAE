/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




/*
 * 
 * Author: P K JANA, Sukriti
 * IIT Kharagpur
 * 
 */

var i = 0;
//var radio;
var questionCount = 0;
var resultCount = 0;
 var fullresult = "";
// var timespntpostquiz;
 //var newdtpostquiz;
 var cpost=0;
var tpost;
var timer_is_on_post = 0;

function quizInitializeAllQuestion() {
    document.getElementById("vqt-start").style.display = "none";    
    var ansCount = 0;
    var questionOptions = "<form name=\"quiz\" method=\"post\" id=\"quiz\" onsubmit=\"return false\"><ul class=\"questionList\">";
    questionCount = quizJSON.questions.length;
    for (var qc = 0; qc < questionCount; qc++) {
        ansCount = quizJSON.questions[qc].a.length;
        questionOptions = questionOptions + "<li id=\"question" + qc + "\" style=\"font-weight:bold;padding-top:20px;text-align:justify\">" + (qc + 1) + ". " + quizJSON.questions[qc].q + "<ul>";
        for (var j = 0; j < ansCount; j++) {
            questionOptions = questionOptions + "<li><input type = \"radio\" name = \"ans" + qc + "\" value = \"" + j + "\">" + quizJSON.questions[qc].a[j].option + "</li>";
        }
        questionOptions = questionOptions + "</ul></li>";
    }
    questionOptions = questionOptions + "</ul><button class=\"submit\" onclick=\"return quizSubmit();\" type=\"submit\">Submit</button></form>";
    document.getElementById("vlab-quiz-question-answer-options").innerHTML = questionOptions;
    dynamicMathConveter();
	startCountpost();
}

function startCountpost() {
 cpost = 0;
  if (!timer_is_on_post) {
    timer_is_on_post = 1;
    timedCountpost();
  }  
}
function stopCountpost() {
  clearTimeout(tpost);
  timer_is_on_post = 0;
}

function quizSubmit() {
    for (var i = 0; i < questionCount; i++) {
        var radios = document.getElementsByName("ans" + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.checked) {
                document.getElementById("question" + i).classList.remove("cross");
                document.getElementById("question" + i).classList.remove("tick");
                if (quizJSON.questions[i].a[radio.value].correct === true) {
                    document.getElementById("question" + i).classList.add("tick");
					 resultCount++;
                } else {
                    document.getElementById("question" + i).classList.add("cross");
                }
            }
        }
    }
	//alert(resultCount)
	//document.getElementById("vlab-quiz-result").innerHTML = "<p> You have scored " + resultCount + " out of " + questionCount + ".</p>";// + fullresult;
    //dynamicMathConveter()
showResult();
}

function showResult() {
    document.getElementById("vlab-quiz-result").style.display = "block";
    document.getElementById("vqt-try-again").style.display = "block";
   
    /*var fullresult = "";
    for (var i = 0; i < questionCount; i++) {
      //  fullresult = fullresult + "<p><b>" + (i + 1) + ". " + quizJSON.questions[i].q + "</b></p>";
        var ansCount = quizJSON.questions[i].a.length;
        var k = -1;
        for (var j = 0; j < ansCount; j++) {
          //  fullresult = fullresult + "<p>(" + String.fromCharCode(97 + j) + ") " + quizJSON.questions[i].a[j].option + "</p>";
            if (quizJSON.questions[i].a[j].correct === true)
                k = j;
        }
        if (quizJSON.questions[i].a[radio.value].correct === true) {
            //resultCount++;
            //fullresult = fullresult + "<p> You have choosen option (" + String.fromCharCode(97 + parseInt(resultArray[i])) + "). The answer is correct." + quizJSON.questions[i].correct;
        } else {
            fullresult = fullresult + "<p><b>Question :" + quizJSON.questions[i].q.incorrect + "</b></p>"+"<p> The answer is incorrect. The correct option is (" + String.fromCharCode(97 + k) + ")." + quizJSON.questions[i].incorrect;
//You have choosen option (" + String.fromCharCode(97 + parseInt(resultArray[i])) + ").       
	   }
    }*/
    var resultPercent = (resultCount / questionCount) * 100;
	// newdtpostquiz = new Date();
	 //timespntpostquiz = newdtpostquiz.getSeconds();
    document.getElementById("vlab-quiz-result").innerHTML = "<p> You have scored " + resultCount + " out of " + questionCount + ".</p><br><p>Your Grade percentage:"+ (resultPercent).toPrecision(5) + "</p><br><p> Time Spent :" + cpost + "sec</p>";// + fullresult;
    dynamicMathConveter()
}
function tryAgain() {
    //document.getElementById("vlab-quiz-question-answer-options").style.display = "block";
    document.getElementById("vlab-quiz-result").style.display = "none";
   // document.getElementById("vqt-next").style.display = "block";
    document.getElementById("vqt-try-again").style.display = "none";
    i = 0;
	resultCount = 0;
    quizInitializeAllQuestion();
	stopCountpost();
	startCountpost();
}
function dynamicMathConveter() {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function timedCountpost() {
 // document.getElementById("txt").value = c;
  cpost = cpost + 1;
  tpost = setTimeout(timedCountpost, 1000);
}