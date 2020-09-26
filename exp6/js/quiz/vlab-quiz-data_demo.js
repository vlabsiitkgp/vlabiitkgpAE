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
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "When steady state reaches in the tank then?",
            "a": [
                {"option": "The output velocity is always a constant", "correct": false},
                {"option": "The input velocity is always a constant", "correct": false},
                {"option": "The height of the fluid in the tank remains constant", "correct": true},
                {"option": "All of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "An arrangement as in your experiment is at steady state, what will happen if you increase the output flow rate?",
            "a": [
                {"option": "The fluid level in tank decreases continuously", "correct": true},
                {"option": "The fluid level in tank decreases and then becomes constant", "correct": false},
                {"option": "The fluid level in tank increases continuously", "correct": false},
                {"option": "The fluid level in tank increases and then becomes constant", "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        {// Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "An arrangement as in your experiment is at steady state, what will happen if you decrease the input flow rate?",
            "a": [
                {"option": "The fluid level in tank decreases continuously", "correct": true},
                {"option": "The fluid level in tank increases continuously", "correct": false},
                {"option": "The fluid level in tank decreases and then becomes constant", "correct": false},
                {"option": "The fluid level in tank increases and then becomes constant", "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        {// Question 4
            "q": "An arrangement as in your experiment is at steady state, what will happen if you increase the input first and then increase the output flow rate but by the same amount?",
            "a": [
                {"option": "The height first increases and then decreases and reaches to it's original value", "correct": false},
                {"option": "The height first increases and then becomes constant but is more than the previous steady state's value", "correct": true},
                {"option": "The height first decreases and then increases and reaches to it's original value", "correct": false},
                {"option": "The height first decreases and then becomes constant but is less than the previous steady states value", "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        {// Question 5
            "q": " The steady state value of the height obtained as done practically is different from that calculated from equations with certain assumptions because",
            "a": [
                {"option": "The value of inflow is not exactly equal to the value of the outflow", "correct": false},
                {"option": "There are fluctuations in the value of the inflow", "correct": false},
                {"option": "There is a problem of meniscus of the fluid which leads to misjudgement of the value obtained", "correct": false},
                {"option": "All of the above", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 6
            "q": "The work of a rotameter is to measure the",
            "a": [
                {"option": "Volumetric flow rate", "correct": true},
                {"option": "Mass flow rate", "correct": false},
                {"option": "Velocity", "correct": false},
                {"option": "None of these", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 7
            "q": "The use of a thermocouple is to",
            "a": [
                {"option": "Measure absolute temperature", "correct": false},
                {"option": "Measure velocity at a particular point", "correct": false},
                {"option": "Measure temperature difference", "correct": true},
                {"option": "Measure average velocity at a particular plane", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 8
            "q": "At steady tank and coil arrangement as in the experiment, if the coil inlet temperature is increased then the tank outlet temperature:",
            "a": [
                {"option": "Increases continuously", "correct": false},
                {"option": "Increases and then becomes constant above the previous steady state value", "correct": true},
                {"option": "Decreases continuously below the previous steady state value", "correct": false},
                {"option": "Decreases and then becomes a constant below the previous steady state value", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 9
            "q": "At steady tank and coil arrangement as in the experiment, if the tank inlet temperature is increased then the coil outlet temperature:",
            "a": [
                {"option": "Increases continuously above the previous steady state value", "correct": false},
                {"option": "Increases and then becomes constant above the previous steady state value", "correct": true},
                {"option": "Decreases continuously below the previous steady state value", "correct": false},
                {"option": "Decreases and then becomes a constant below the previous steady state value", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 10
            "q": " At steady tank and coil arrangement as in the experiment, if the coil inlet temperature is decreased then the tank outlet temperature:",
            "a": [
                {"option": "Increases continuously above the previous steady state value", "correct": false},
                {"option": "Increases and then becomes constant above the previous steady state value", "correct": false},
                {"option": "Decreases continuously below the previous steady state value", "correct": false},
                {"option": "Decreases and then becomes a constant below the previous steady state value", "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 11
            "q": "A person sets the inflow at a particular value, in an initial empty tank, and then keeps on increasing the outflow continuosly, then which of the following curves best describes the process?<br/><p style=\"text-align:center\"><img src=\"./images/sth-11.jpg\"></p>",
            "a": [
                {"option": "a", "correct": true},
                {"option": "b", "correct": false},
                {"option": "c", "correct": false},
                {"option": "d", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        },
        {// Question 12
            "q": "If the inlet temperature of the coil is increased from it initial steady state then which curves best describes the outlet temperatures of the tank and the coil:<br/><p style=\"text-align:center\"><img src=\"./images/sth-12.jpg\"></p>",
            "a": [
                {"option": "b & c respectively", "correct": true},
                {"option": "c & b respectively", "correct": false},
                {"option": "a & d respectively", "correct": false},
                {"option": "d & a respectively", "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        }// no comma here
    ]
};
