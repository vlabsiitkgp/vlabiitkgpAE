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
            "preq": " 	A ________ filter rejects all frequencies within a specified band and passes all those outside this band. ",
            "prea": [
			 {"option": "Low Pass", "correct": false},
                {"option": "High Pass ", "correct": false},              
                {"option": " Band Stop", "correct": true},
				{"option": " Band Pass", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "preq": " 	A low-pass filter has a cutoff frequency of 1.23 kHz. Determine the bandwidth of the filter.",
            "prea": [
                {"option": "2.46 kHz ", "correct":false},
                {"option": "1.23 kHz", "correct": true},
				{"option": "  not enough information given ", "correct": false},
				{"option": "  644 hz", "correct": false}//no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "preq": " Refer to the given figure. The roll-off of the circuit shown is about <br/><p style=\"text-align:center\"><img src=\"image/pre_quiz1.png \" style=\"width:350px;height:200px\"></p>",
            "prea": [
                {"option": " 40 dB/decade", "correct": false},
                {"option": " 60 dB/decade", "correct": false},
                {"option": " 20 dB/decade", "correct": true},
				{"option": "  80 dB/decade", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "preq": "  Refer to the given figure. The cutoff frequency of this filter is ________, and the circuit is known as a ________. <br/><p style=\"text-align:center\"><img src=\"image/pre_quiz2.png \" style=\"width:350px;height:200px\"></p>",
            "prea": [
                {"option": "721 Hz, high-pass filter", "correct": false},
                {"option": "721 Hz, band-pass filter", "correct": false},
                {"option": "	721 Hz, low-pass filter	", "correct": true},
                {"option": " 72 Hz, low-pass filter", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },	
       {// Question 5 - Multiple Choice, Single True Answer
            "preq": " A ________ filter passes all frequencies within a band between a lower and an upper critical frequency and rejects all others outside this band. ",
            "prea": [
                {"option": "Low Pass", "correct": false},
                {"option": "High Pass ", "correct": false},              
                {"option": " Band Stop", "correct": false},
				{"option": " Band Pass", "correct": true},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }	
    ]
};
