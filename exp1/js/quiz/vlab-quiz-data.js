/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": " Oscilloscope is __________",
            "a": [
                {"option": " a ohmmeter ", "correct": false},
                {"option": " an ammeter", "correct": false},
                {"option": " a voltmeter ", "correct": true},
                {"option": " a multimeter", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "One oscilloscope selector knob that allows the major and minor divisions of the graticule to be used to determine a signal amplitude value is called the",
            "a": [
                {"option": " Time/cm control", "correct":false},
                {"option": " Volts/cm control", "correct": true},
                {"option": " Intensity control ", "correct":false},
                {"option": " Position control", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "A CRO can display",
            "a": [
                {"option": " AC signals", "correct": false},
                {"option": " DC signals", "correct": false},
                {"option": " Both AC and DC signals", "correct": true},
                {"option": " Time-invariant Signals", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 4 - Multiple Choice, Single True Answer
            "q": " 	If the vertical sensitivity is set to 1 volt per division and occupies 2 divisions, then peak-to-peak voltage is",
            "a": [
                {"option": " 4 volt", "correct": false},
                {"option": " 5 volt", "correct": false},
                {"option": "  2 volt ", "correct": true},
                {"option": "  20 volt", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 5 - Multiple Choice, Single True Answer
            "q": "  If the controls on the CRO are set at 0.2ms/div, find the frequency of the signal? <br/><p style=\"text-align:center\"><img src=\"image/postquiz3.png \" style=\"width:350px;height:200px\"></p>",
            "a": [
                {"option": " 1 kHz", "correct": false},
                {"option": " 2 kHz", "correct": true},
                {"option": " 3 kHz", "correct": false},
                {"option": " 4 KHz", "correct": false} // no comma here 
				//equation is in form  Em sin wt. w = 100 ᴨ rad/s. w=2 ᴨ x frequency. so frequency = w/2ᴨ =100ᴨ/2ᴨ=50
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
		
    ]
};




 