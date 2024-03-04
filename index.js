const quizStartButton = document.querySelector("#startButton");
const firstPage = document.querySelector("#firstPage");
const quizPage = document.querySelector("#quizpage");
const qQuestion = document.querySelector("#quizQuestion");
const qOptions = document.querySelectorAll("#quizOptions");

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;


// switching Between  Pages 
const  showQuiz = () => {
    // Hide the start button
    firstPage.classList.add("active");
    quizPage.classList.add("active");
};
quizStartButton.addEventListener('click',showQuiz);


// API call 
async function  getData() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple");
    let data = await response.json();
    console.log(data);
    showDetails(data.results[0]);

}

function showDetails(data){
    correctAnswer = data.correct_answer;  
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
   

 
    qQuestion.innerText = data.question;
    qOptions.innerText = 
    console.log(qOptions);  
};

// options selection
// function selectOption(){
//     qOptions.querySelectorAll('li').forEach(function(option){
//         option.addEventListener('click', function(){
//             if(qOptions.querySelector('.selected')){
//                 const activeOption = qOptions.querySelector('.selected');
//                 activeOption.classList.remove('selected');
//             }
//             option.classList.add('selected');
//         });
//     });
// }

// results[0].question

quizStartButton.addEventListener('click',getData);