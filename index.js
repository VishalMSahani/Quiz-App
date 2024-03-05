const quizStartButton = document.querySelector("#startButton");
const firstPage = document.querySelector("#firstPage");
const quizPage = document.querySelector("#quizpage");
const qQuestion = document.querySelector("#quizQuestion");




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
    (data.results[0]);

}

// Function to shuffle an array using Fisher-Yates algorithm
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

// function showDetails(data){
//     // const quizDiv = document.getElementById("Options");
//     

//     qQuestion.innerText = data.question;
//     console.log(qQuestion);
  

// };


function showDetails(data){
 
    qQuestion.innerText = data.question;
 
    console.log(qQuestion);  
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