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
    quizPage.classList.remove("active");
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple");
    let data = await response.json();
    quizPage.classList.add("active");
    console.log(data);
    showDetails(data.results[0]);

}

function showDetails(data){
     qQuestion.innerText = data.question;

    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    console.log(correctAnswer);
    console.log(optionsList);

    const optionA = document.querySelector(".quizOptionsA");
    const optionB = document.querySelector(".quizOptionsB");
    const optionC = document.querySelector(".quizOptionsC");
    const optionD = document.querySelector(".quizOptionsD");

    // qOptions.innerText = `${optionsList.map((option, index) =>`<li> ${index + 1}. <span>${option}</span> </li>`).join('')}`;
    optionA.innerHTML= optionsList[0];
    optionB.innerHTML= optionsList[1];
    optionC.innerHTML= optionsList[2];
    optionD.innerHTML= optionsList[3];
    
};

     
    //  qOptions.forEach((option) => option.innerHTML=" ");
    //  data.incorrect_answers.forEach((item , index )=>{
    //      let btn = createBtn(item,"wrong","btn-danger");
    //      btn.setAttribute("index",index+1);
    //      btn.addEventListener("click" , checkAnswer);
    //      qOptions[3 - (index + 1)].appendChild(btn);    
         
    //  });
    //  correctAnswer= data.correct_answer;
    //  askedCount++;
    //  if(askedCount === totalQuestion){
    //     resultScreen();
    //  }else{
    //    setTime();
    //  }
     
    //  var optionsList = document.createElement("ul");
    //  qOptions.forEach(function(option) {
    //      var optionItem = document.createElement("li");
    //      optionItem.textContent = option;
    //      optionsList.appendChild(optionItem);
    //  });


   


quizStartButton.addEventListener('click',getData);