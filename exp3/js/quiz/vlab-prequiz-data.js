/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var prequizJSON = {
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
    "prequestions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "preq": "Rectifier circuit helps to convert which of the following voltages: ",
            "prea": [
			 {"option": "Fixed ac to variable ac", "correct": false},
                {"option": "Fixed dc to variable dc ", "correct": false},              
                {"option": " dc to ac", "correct": false},
				{"option": " ac to dc", "correct": true},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": "Inductors are used to smoothen the dc output coming from rectifier units",
            "prea": [
                {"option": "True ", "correct":false},
                {"option": " False", "correct": true}//no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": "DC average current of a half wave rectifier output is ___________ (Where Im is the maximum peak current of input)",
            "prea": [
                {"option": "2I<sub>m</sub>/pi", "correct": false},
                {"option": "I<sub>m</sub>/pi", "correct": true},
                {"option": " I<sub>m</sub>/2pi", "correct": false},
				{"option": " 1.414/pi", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "preq": " Ripple factor of half wave rectifier is _________",
            "prea": [
                {"option": "1.414", "correct": false},
                {"option": "1.21", "correct": true},
                {"option": "1.3", "correct": false},
                {"option": " 0.48", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
       {// Question 5 - Multiple Choice, Single True Answer
            "preq": " If input frequency is 50Hz then ripple frequency of half wave rectifier will be equal to __________",
            "prea": [
                {"option": "100 Hz", "correct": false},
                {"option": "50 Hz", "correct": true},
                {"option": "25 Hz", "correct": false},
                {"option": " 500 Hz", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	
    ]
};
