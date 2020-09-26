/*
 * 
 * Author: P K JANA
 * IIT Kharagpur
 * 
 * Setup your quiz text and questions here
 * NOTE: pay attention to commas, IE struggles with those bad boys
 * 
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
        {// Question 1
            "q": "A two port network is shown in the fig.1. Find the Z-matrix of the network.<br/><p style=\"text-align:center\"><img src=\"./image/2portqz1.jpg\" style=\"width:450px;height:290px;\"></p>",
            "a": [
                {"option": "`[[Z_(1), Z_(1)+Z_(2)], [Z_(1)+Z_(2), Z_(2)]]`", "correct": false},
                {"option": "`[[Z_(1), Z_(1)], [Z_(1)+Z_(2), Z_(2)]]`", "correct": false},
                {"option": "`[[Z_(1), Z_(2)], [Z_(2),Z_(1)+Z_(2)]]`", "correct": false},
                {"option": "`[[Z_(1), Z_(1)], [Z_(1),Z_(1)+Z_(2)]]`", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p>Try again.</p>" // no comma here
        },
	{// Question 2
            "q": "The two port network P shown in fig.2 has ports 1 and 2, denoted by terminals (a,b) and (c,d) , respectively. It has an impedance matrix Z with parameters denoted by Z<sub>ij</sub>. A 1Ω resistor is connected in series with the network at port 1 as shown in fig.2. The impedance matrix of the modified two-port network (shown as a dashed box) is<br/><p style=\"text-align:center\"><img src=\"./image/2portqz2.jpg\" style=\"width:450px;height:330px;\"></p>",
            "a": [
                {"option": "`[[Z_(11)+1, Z_(12)+1], [Z_(21), Z_(22)+1]]`", "correct": false},
                {"option": "`[[Z_(11)+1, Z_(12)], [Z_(21), Z_(22+1)]]`", "correct": false},
                {"option": "`[[Z_(11)+1, Z_(12)], [Z_(21), Z_(22)]]`", "correct": true},
                {"option": "`[[Z_(11)+1, Z_(12)], [Z_(21)+1, Z_(22)]]`", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
	{// Question 3
            "q": "A two port device is defined by the following pair of equations:<br>          `i_(1)=2V_(1)+V_(2)      and i_(2)=V_(1)+V_(2)`<br>It's impedance parameters (Z<sub>11</sub>, Z<sub>12</sub>, Z<sub>21</sub>, Z<sub>22</sub>) are given by",
            "a": [
                {"option": "(1,-1,-1,2)", "correct": true},
                {"option": "(2,1,1,1)", "correct": false},
                {"option": "(1,1,1,2)", "correct": false},
                {"option": "(2,-1,-1,1)", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 4
            "q": "The parameters of the circuit shown in the fig.3 are R<sub>i</sub>=1MΩ,R<sub>o</sub>=10, A=10<sup>6</sup> V/V. If V<sub>i</sub>=1UV, the output voltage, input impedance and output impedance respectively are:<br/><p style=\"text-align:center\"><img src=\"./image/2portqz4.jpg\" style=\"width:450px;height:260px;\"></p>",
            "a": [
                {"option": "1V, 0, 10Ω", "correct": false},
                {"option": "1V, 0, &#8734;", "correct": false},
				{"option": "1V, &#8734;, 10Ω", "correct": true},
                {"option": "10V, &#8734;, 10Ω", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 5
            "q": "It's given that a network satisfies reciprocity, then pick the possible parameters of the network:",
            "a": [
                {"option": "`H=[[2, -1], [1, 1/3]]`", "correct": true},
                {"option": "`ABCD=[[&#8730;3, 1/2], [&#8730;2, &#8730; 3]]`", "correct": false},
				{"option": "`Z=[[11, 3], [-3, 9]]`", "correct": false},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 6
            "q": "It's given that a network satisfies symmetry, then pick the possible parameters of the network:",
            "a": [
                {"option": "`Z=[[2, 1], [1, 1/3]]`", "correct": false},
                {"option": "`Y=[[3, 1], [1/3, 2]]`", "correct": false},
				{"option": "`ABCD=[[1, -1/3], [-1/3, 1/3]]`", "correct": false},
                {"option": "`H=[[&#8730;2, 1], [1, &#8730;2]]`", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
		{// Question 7
            "q": "Y parameters of a network are given as `[[Y_11, Y_12], [y_21, Y_22]]`. It's given that network satisfies reciprocity and symmetry and |Y|=2. Then which of the following is possible admittance matrix:",
            "a": [
                {"option": "`[[2, 1/3], [1/3, 2]]`", "correct": false},
                {"option": "`[[&#8730;6, 2], [2, &#8730;6]]`", "correct": true},
				{"option": "`[[3, -1], [-1, 3]]`", "correct": false},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
    ]
};
