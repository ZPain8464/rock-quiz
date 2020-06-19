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
   $(".start-quiz").on('click', function() {
       $(renderForm());
   })
};

// try moving if statement to generate answers 6/18
function renderForm() {
    console.log('renderForm ran')
    if (currentQuestion < STORE.length-1) {
           let formHTML = `
           <ul class="question-score">
           <li>Question: <span class="js-q-tally">${STORE[11].questionTally++}</span> / 11</li>
           <li>Score: <span class="js-score">${score}</span></li>
       </ul class="start-quiz">
        <form>
        <fieldset>
        <h3></h3>
            <ul class="js-quiz">

            </ul>
            <div class="result"></div>
            <div class="quiz-buttons">
            <button class="submit-button">
            Submit
            </button>
            <button class="next-button">
            Next Question
            </button>
            </div>
            </div>
            </fieldset>
            </form>`
    $('.welcome-text').html(formHTML);
        $('h3').append(STORE[currentQuestion].question);
        generateAnswers();

    } else {
        finalScore();
    }
    $('.restart-button').click(function() {

    })
    $('.next-button').hide();
}

function generateAnswers() {
    console.log('generateAnswers ran')
    STORE[currentQuestion].answers.map(function(answerValue, answerIndex) {
        $(`<li>
        <input id="${answerIndex}" value="${answerValue}" name="color" type="radio">
        <label>${answerValue}</label></li>`).appendTo('.js-quiz');
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
            $('.result').html("<p><strong>Your answer is correct you rock star!</strong></p>"); 
            updateScore();
        } else {
            $('.result').html("<p><strong>Your answer is wrong. The correct answer is " + STORE[currentQuestion].correctAnswer + ". Go study more!</strong></p>")

        }
        $('.next-button').show()
        $('.submit-button').hide()
        $(nextQuestion());
    })
}


// updates currentQuestion variable
function updateCurrentQuestion() {
    console.log('updateCurrentQuestion ran')
    currentQuestion++;
}

//Updates score when user selects correct answer
function updateScore() {
    score++;
    $(".js-score").text(score)
};

function resetQuiz() {
    score = 0;
    currentQuestion = 0;
    $(STORE[11].questionTally = 1);
}

function nextQuestion() {
    console.log('nextQuestion ran')
    $('.next-button').click(function(event) {
        event.preventDefault();
        updateCurrentQuestion();
        renderForm();
    })
}

function finalScore() {
    console.log('finalScore ran')
    const great = [
        "You're a rockstar! Put another dime in the jukebox, baby."
    ];

    const good = [
        "You're no rock star, but ya did alright."
    ];

    const poor = [
        "You need to listen to more rock-n'-roll. Back to the front!"
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
         <button type="submit" class="restart-button">Go Back to School</button>
         </div>`);
         restartQuiz();
}

function restartQuiz() {
    console.log('restartQuiz ran')
    $('.restart-button').click(function(event) {
        event.preventDefault();
        $('.end-quiz').replaceWith(`
        <div class="welcome-text">
        <h2>So, you think you know rock-n'-roll?</h2>
            <div class="buttonCenter">
            <button class="start-quiz">
                Start Your Quiz
            </button>
            <p><strong>(... and prepare to get schooled.</strong>)</p>
        </div>
    </div>`);
    resetQuiz();
    startQuiz();
    });
}

function handleQuestions() {
    startQuiz();
    console.log('handleQuestions ran!')
}; 

$(handleQuestions())
