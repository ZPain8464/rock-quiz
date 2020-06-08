// question database 
const STORE = [
    {
        question: 'Which member of The Beatles died first?',
        answers: [
            'Paul McCartney',
            'Ringo Starr',
            'George Harrison',
            'John Lennon'
        ],
        correctAnswer: 'John Lennon'
    },
    {
        question: 'Which Metallica member is the most recent addition to their lineup?',
        answers: [
            'Jason Newsted',
            'Lars Ulrich',
            'Robert Trujillo',
            'Cliff Burton',
        ],
        correctAnswer: 'Robert Trujillo'
    },
    {
        question: 'Which of the following is NOT a song by Led Zeppelin?',
        answers: [
            'Immigrant Song',
            'Going to California',
            'Tears in Heaven',
            'Wanton Song',
        ],
        correctAnswer: 'Tears in Heaven'
    },
    {
        question: 'Which of these frontmen is referred to as the "Prince of Darnkness"?',
        answers: [
            'Ozzy Osbourne',
            'Robert Plant',
            'Ted Nugent',
            'Bruce Dickinson',
        ],
        correctAnswer: 'Ozzy Osbourne',
    },
    {
        question: 'Fill in the correct lyrics to the following: For those about to rock, __ ____ __.',
        answers: [
            "We're not gonna take it!",
            "We salute you!",
            "Raise your horns!",
            "Put on your battle jackets!",
        ],
        correctAnswer: "We salute you!",
    },
    {
        question: "Which Led Zeppelin song references J.R. Tolkien's LOTR character Gollum?",
        answers: [
            "Ramble On",
            "Whole Lotta Love",
            "Achilles' Last Stand",
            'Tangerine',
        ],
        correctAnswer: "Ramble On",
    },
    {
        question: "Who's the godfather of rock-n'-roll?",
        answers: [
            'James Jamerson',
            'Chuck Berry',
            'Elvis Presley',
            'Eric Clapton',
        ],
        correctAnswer: 'Chuck Berry',
    },
    {
        question: 'Which member of the band Rush passed away in January, 2020?',
        answers: [
            'John Bonham',
            'Geddy Lee',
            'Alex Lifeson',
            'Neil Pert',
        ],
        correctAnswer: 'Neil Pert',
    },
    {
        question: 'Creedence Clearwater Revival (CCR) were from which state?',
        answers: [
            'Teaxas',
            'Alabama',
            'Mississippi',
            'California',
        ],
        correctAnswer: 'California',
    },
    {
        question: 'Which of the following bands consists only of American members?',
        answers: [
            'Iron Maiden',
            'AC/DC',
            'Megadeth',
            'Pink Floyd',
        ],
        correctAnswer: 'Megadeth',
    },
    {
        question: 'Tony Iommi played guitar in which band?',
        answers: [
            'Immortal',
            'The Scorpions',
            'Neutral Milk Hotel',
            'Black Sabbath',
        ],
        correctAnswer: 'Black Sabbath',
    },
];

// variables to store quiz score and question number information 

let score = 0;
let questionNumber = 0;

//template to generate each question 
function generateQuestion() {}

//increments the number value of the "score" variable by one
//and updates the "score" number text in the quiz view
function updateScore() {}

function updateQuestionNumber() {}

function resetStats() {}


//hide existing welcome message

//display form
    //access the questions array, create <li> with question and answers
function startQuiz() {
    $('button').on('click')
    console.log('function-ran')
}


function submitAnswer() {
    //check if answer is correct w/ correctAnswer
    //if answer is correct, add +1 score and congratulations message
    //if answer is incorrect, tell user correct answer 
    //render the 'next' button
}

function createThing() {}

function correctAnswer() {}

function wrongAnswer() {}

function nextQuestion() {}

function finalScore() {}

function restartQuiz() {}

//runs the functions
function makeQuiz() {
    startQuiz();
    generateQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

// $(makeQuiz)
