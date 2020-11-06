const quizData = [
    {
        question: 'How old is Donald Trump ?',
        a: '66',
        b: '57',
        c: '25',
        d: '84',
        correct: 'a'
    },{
        question: 'Is the world flat ?',
        a: 'Yes',
        b: 'No',
        c: "I don't know",
        d: 'none of the above',
        correct: 'b'
    },{
        question: 'What is the most used programming language ?',
        a: 'python',
        b: 'javascript',
        c: 'php',
        d: 'c#',
        correct: 'b'
    },{
        question: 'How many kilograms you pooped today ?',
        a: '1',
        b: '0.5',
        c: '2',
        d: '5',
        correct: 'b'
    },
    {
        question: 'How many litres of Oxygen you inhaled today ?',
        a: '1 L',
        b: '2 L',
        c: '4 L',
        d: '5 L',
        correct: 'a'
    }
];
const result= document.getElementById('result');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
const displayQues = document.querySelector('.question');
const submitBtn = document.querySelector('.submit-btn');
const answersEl = document.querySelectorAll('.answer');
let currentQues = 0;
let score = 0;

loadQues();
function loadQues(){
    let currentQuesData = quizData[currentQues];
    displayQues.innerText = currentQuesData.question;
    
    a_text.innerText =currentQuesData.a;
    b_text.innerText =currentQuesData.b;
    c_text.innerText =currentQuesData.c;
    d_text.innerText =currentQuesData.d;

}

function getSelected(){
    
    let answer = undefined;
    answersEl.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        } 
        
    })
    return answer;
}
function deselect(){
    answersEl.forEach((answerEl)=>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();
    deselect();
    
    if(answer){
        if(answer===quizData[currentQues].correct){
            score++;
        }
        currentQues++;
        if(currentQues<quizData.length){
            loadQues();
        }
        else{
            result.innerHTML = `<h1>You answered correctly ${score} out of ${quizData.length}</h1><button onclick = "location.reload();">Reset</button>`
        }
    }
});



