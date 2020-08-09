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
            "q": "What is the value of this resistor, in ohms<br/><p style=\"text-align:center\"><img src=\"image/ohmq1.png\" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": "270 &#937; ", "correct": false},
                {"option": "27 k&#937;", "correct": false},
                {"option": " 2700 k&#937;", "correct": false},
                {"option": " 2.7 k&#937;", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Shunt resistance is labeled with the following rating: 150 A , 50 mV. What is the resistance of this shunt, in ohms?<br/><p style=\"text-align:center\"><img src=\"image/ohmq2.png \" style=\"width:350px;height:200px\"></p>Shunt resistors are often used as current-measuring devices, in that they are designed to drop very precise amounts of voltage as large electric currents pass through them. By measuring the amount of voltage dropped by a shunt resistor, you will be able to determine the amount of current going through it:  ",
            "a": [
                {"option": "333.3 &#956;&#937; ", "correct":true},
                {"option": " 33.33 m&#937;", "correct": false},
                {"option": "3.333 &#937; ", "correct": false},
                {"option": " 3.333 m&#937;", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "If doubling the voltage across a resistor doubles the current through the resistor then ",
            "a": [
                {"option": "the resistor value decreased", "correct": false},
                {"option": "the resistor value did not change", "correct": true},
                {"option": " the resistor value increased", "correct": false},
                {"option": " it is impossible to determine the change in the resistor value", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Single True Answer
            "q": "If the voltage across a fixed value of resistance is increased five times, what does the current do?",
            "a": [
                {"option": "Not enough information", "correct": false},
                {"option": "It decreases by a factor of five.", "correct":false},
                {"option": "It stays the same.", "correct": false},
                {"option": " It increases by a factor of five", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 5 - Multiple Choice, Single True Answer
            "q": "What is the power in the given circuit?<br/><p style=\"text-align:center\"><img src=\"image/ohmq3.png\" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": "3.6 W", "correct": false},
                {"option": "245 W", "correct": false},
                {"option": "175 W", "correct": false},
                {"option": " 35 W", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
         {// Question 6 - Multiple Choice, Single True Answer
            "q": "If the voltage in the given circuit was cut in half, what would the current equal?<br/><p style=\"text-align:center\"><img src=\"image/ohmq4.png\" style=\"width:350px;height:200px\"></p> ",
            "a": [
                {"option": "30 mA	", "correct": false},
                {"option": "60 mA", "correct": true},
                {"option": "10 mA", "correct": false},
                {"option": " 90 mA", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
    {// Question 6 - Multiple Choice, Single True Answer
            "q":    " Resistance and current are _________."  ,	
 "a": [
                {"option": "inversely proportional		", "correct": true},
                {"option": "directly proportional", "correct": false},
                {"option": "not related", "correct": false},
                {"option": " similar to voltage", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};
