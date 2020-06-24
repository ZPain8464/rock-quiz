// question database 
const STORE = [
    {// 1 
        question: 'Which member of The Beatles died first?',
        answers: [
            'Paul McCartney',
            'Ringo Starr',
            'George Harrison',
            'John Lennon'
        ],
        correctAnswer: 'John Lennon'
    },
    {// 2 
        question: 'Which Metallica member is the most recent addition to their lineup?',
        answers: [
            'Jason Newsted',
            'Lars Ulrich',
            'Robert Trujillo',
            'Cliff Burton',
        ],
        correctAnswer: 'Robert Trujillo'
    },
    {// 3 
        question: 'Which of the following is NOT a song by Led Zeppelin?',
        answers: [
            'Immigrant Song',
            'Going to California',
            'Tears in Heaven',
            'Wanton Song',
        ],
        correctAnswer: 'Tears in Heaven'
    },
    {// 4
        question: 'Which of these frontmen is referred to as the "Prince of Darkness"?',
        answers: [
            'Ozzy Osbourne',
            'Robert Plant',
            'Ted Nugent',
            'Bruce Dickinson',
        ],
        correctAnswer: 'Ozzy Osbourne',
    },
    { // 5
        question: 'Fill in the correct lyrics to the following: "For those about to rock, ____."',
        answers: [
            "We're not gonna take it!",
            "We salute you!",
            "Raise your horns!",
            "Put on your battle jackets!",
        ],
        correctAnswer: "We salute you!",
    },
    { // 6
        question: "Which Led Zeppelin song references J.R. Tolkien's LOTR character Gollum?",
        answers: [
            "Ramble On",
            "Whole Lotta Love",
            "Achilles' Last Stand",
            'Tangerine',
        ],
        correctAnswer: "Ramble On",
    },
    { // 7 
        question: "Who's considered the godfather of rock-n'-roll?",
        answers: [
            'James Jamerson',
            'Chuck Berry',
            'Elvis Presley',
            'Eric Clapton',
        ],
        correctAnswer: 'Chuck Berry',
    },
    { // 8
        question: 'Which member of the band Rush passed away in January, 2020?',
        answers: [
            'John Bonham',
            'Geddy Lee',
            'Alex Lifeson',
            'Neil Pert',
        ],
        correctAnswer: 'Neil Pert',
    },
    { // 9
        question: 'Creedence Clearwater Revival (CCR) were from which state?',
        answers: [
            'Texas',
            'Alabama',
            'Mississippi',
            'California',
        ],
        correctAnswer: 'California',
    },
    { // 10
        question: 'Which of the following bands consists only of American members?',
        answers: [
            'Iron Maiden',
            'AC/DC',
            'Megadeth',
            'Pink Floyd',
        ],
        correctAnswer: 'Megadeth',
    },
    { // 11
        question: 'Tony Iommi played guitar in which band?',
        answers: [
            'Immortal',
            'The Scorpions',
            'Neutral Milk Hotel',
            'Black Sabbath',
        ],
        correctAnswer: 'Black Sabbath',
    },
    {
        questionTally: [1],
        currentQuestion: 0,
    },
];

let currentQuestion = 0;
let score = 0;

// User clicks "start" button
//calls renderForm function
function startQuiz() {
   console.log('startQuiz ran')
   $(".start-button").on('click', function() {
       $(renderForm());
   })
};

// renders HTML for form and quiz questions;
// calls finalScore function once user answers last quesiton
function renderForm() {
    console.log('renderForm ran')
    if (currentQuestion < STORE.length-1) {
           let formHTML = 
`
<form>
    <fieldset>
        <h3></h3>
        <ul class="js-quiz">

        </ul>
            <button type="button" class="submit-button button" >
                Submit
            </button>
            <button type="button" class="next-button">
                Next Question
            </button>
            <p>Question: <span class="js-q-tally">${STORE[11].questionTally++}</span> / 11   Score: <span class="js-score">${score}</span> / 11 </p>
    </fieldset>
</form>`;
    $('.welcome-text').html(formHTML);
        $('h3').append(`<p>${STORE[currentQuestion].question}</p>`);
        generateAnswers();

    } else {
        finalScore();
    }
    $('.next-button').hide();
}

// generates answers by dynamically accessing STORE array and assigning values to the <li> radio buttons
function generateAnswers() {
    console.log('generateAnswers ran')
    STORE[currentQuestion].answers.map(function(answerValue, answerIndex) {
        $(`<li>
        <input id="${answerIndex}" value="${answerValue}" name="color" type="radio" class="block">
        <label><p>${answerValue}</p></label></li>`).appendTo('.js-quiz');
    });
    $(generateAnswerResponse());
}


// Checks if answer is correct or incorrect and displays appropriate response
function generateAnswerResponse() {
    console.log('generateAnswerResponse ran')
    $('.submit-button').on('click', function(event) {
        event.preventDefault();
        let selected = $('input:checked').val();
        let correct = STORE[currentQuestion].correctAnswer;
        if (!selected) {
            alert("Ya kinda gotta pick an answer, dude.")
            return; 
        }
        if (selected === correct) {
            $('.result').html("<p>Your answer is correct you rock star!</p>"); 
            updateScore();
        } else {
            $('.result').html("<p>Your answer is wrong. The correct answer is " + STORE[currentQuestion].correctAnswer + ".</p>")

        }
        $('.next-button').show()
        $('.submit-button').hide()
        $(nextQuestion());

    })
}


// updates currentQuestion variable by incrementing by 1 each time function is called
function updateCurrentQuestion() {
    console.log('updateCurrentQuestion ran')
    currentQuestion++;
}

//Updates score when user selects correct answer
function updateScore() {
    score++;
    $(".js-score").text(score)
};

// resets quiz stats
function resetQuiz() {
    score = 0;
    currentQuestion = 0;
    $(STORE[11].questionTally = 1);
}

// calls and updates currentQuestion function;
// renders question form for each iteration
function nextQuestion() {
    console.log('nextQuestion ran')
    $('.next-button').click( function(event) {
        event.preventDefault();
        updateCurrentQuestion();
        renderForm();
    })
}

// creates responses for user's score
//calls restartQuiz function
function finalScore() {
    console.log('finalScore ran')
    const great = [
        "<p>You're a rockstar! Put another dime in the jukebox, baby.</p>"
    ];

    const good = [
        "<p>You're no jukebox hero, but ya did alright.</p>"
    ];

    const poor = [
        "<p>You need to listen to more rock-n'-roll. Back to the front!<p>"
    ];

    if (score >= 8) {
        array = great;
    } else if (score < 8 && score >= 5) {
        array = good;
    } else {
        array = poor;
    };
    
    $('.welcome-text').html(
        `<div class="end-quiz">
        <h3>${array[0]}</h3>
        <p>Your score is ${score} / 11</p>
         <button type="button" class="restart-button button">Go Back to School</button>
         </div>`);
         restartQuiz();
}

// renders original HTML to start quiz and allows user to retake 
function restartQuiz() {
    console.log('restartQuiz ran')
    $('.restart-button').click(function(event) {
        event.preventDefault();
        $('.end-quiz').replaceWith(`
        <div class="welcome-text">
        <h2>So, you think you know rock-n'-roll?</h2>
            <div class="buttonCenter">
            <button class="start-button">
                Start Your Quiz
            </button>
            <p><strong>(... and prepare to get schooled.</strong>)</p>
        </div>
    </div>`);
    resetQuiz();
    startQuiz();
    });
}
// starts quiz when page loads
function handleQuestions() {
    startQuiz();
    // renderForm();
    console.log('handleQuestions ran!')
}; 

$(handleQuestions())
