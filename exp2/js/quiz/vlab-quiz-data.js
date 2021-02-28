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
            "q": "	A ________ filter significantly attenuates all frequencies below fc and passes all frequencies above fc. ",
            "a": [
                {"option": "Low Pass", "correct": false},
                {"option": "High Pass ", "correct": true},              
                {"option": " Band Stop", "correct": false},
				{"option": " Band Pass", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "2.	The gain of the multiple-feedback band-pass filter above is equal to which of the following? Assume C = C1 = C2 <br/><p style=\"text-align:center\"><img src=\"image/post_quiz1.png \" style=\"width:350px;height:200px\"></p>",
            "a": [
                {"option": "	A0 = R1 / R2", "correct":false},
                {"option": " 	A0 = R2 / 2 R1", "correct": true},
                {"option": " 	A0 = R2 / R1 ", "correct":false},
                {"option": " A0 = R1 / 2 R2", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "	The bandwidth in a ________ filter equals the critical frequency.",
            "a": [
                {"option": "Low Pass", "correct": true},
                {"option": "High Pass ", "correct": false},              
                {"option": " Band Stop", "correct": false},
				{"option": " Band Pass", "correct": false},// no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 4 - Multiple Choice, Single True Answer
            "q": " 	Refer to the given figure. This circuit is known as a ________ filter, and the fc is ________. <br/><p style=\"text-align:center\"><img src=\"image/post_quiz2.png \" style=\"width:350px;height:200px\"></p>",
            "a": [
                {"option": "high-pass, 1.59 kHz", "correct": false},
                {"option": "band-pass, 15.9 kHz ", "correct": false},
                {"option": "low-pass, 15.9 kHz", "correct": false},
                {"option": "high-pass, 15.9 kHz", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 5 - Multiple Choice, Single True Answer
            "q": "  Refer to the given figure. The roll-off of this filter is about <br/><p style=\"text-align:center\"><img src=\"image/post_quiz3.png \" style=\"width:350px;height:200px\"></p>",
            "a": [
                {"option": " 40 dB/decade", "correct": false},
                {"option": " 60 dB/decade", "correct": false},
                {"option": " 20 dB/decade", "correct": true},
				{"option": "  80 dB/decade", "correct": false},// no comma here
				//equation is in form  Em sin wt. w = 100 ᴨ rad/s. w=2 ᴨ x frequency. so frequency = w/2ᴨ =100ᴨ/2ᴨ=50
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
    ]
};




 