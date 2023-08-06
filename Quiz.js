// Quiz Code

let ques = [
    {
        question: "Q1: What is the full form of 'HTML' ?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Makeup Language",
        c: "Hyper Tag Markup Language",
        d: "Hyper Time Markup Language",
        correct: "ans1",
    },
    {
        question: "Q2: Difference in closing and opening tag ?",
        a: " . ",
        b: " # ",
        c: " > ",
        d: " / ",
        correct: "ans4",
    },
    {
        question: "Q3: Which tag is self closing ?",
        a: " <br> ",
        b: " <p> ",
        c: " <input> ",
        d: " <div> ",
        correct: "ans1",
    },
    {
        question: "Q4: Which tag is block level ?",
        a: " <h1> ",
        b: " <button> ",
        c: " <span> ",
        d: " <i> ",
        correct: "ans1",
    },
    {
        question: "Q5: What is the full form of 'CSS' ?",
        a: "Cascading Super Sheet",
        b: "Cascading Super Sheep",
        c: "Cascading Style Sheet",
        d: "Cartoon Super Sheet",
        correct: "ans3",
    },
    {
        question: "Q6: Which selector is use for 'Class' ?",
        a: " / ",
        b: " @ ",
        c: " # ",
        d: " . ",
        correct: "ans4",
    },
    {
        question: "Q7: Which is the correct CSS syntax ?",
        a: "{body;color:black;}",
        b: "{body:color=black;}",
        c: "body {color:black;}",
        d: "body:color=black;",
        correct: "ans3",
    },
    {
        question: "Q8: Which selector is use for 'Id' ?",
        a: " @ ",
        b: " # ",
        c: " $ ",
        d: " * ",
        correct: "ans2",
    },
    {
        question: "Q9: What is full form of 'JS' ?",
        a: "Jordan Shoes",
        b: "Java Script",
        c: "Java Share",
        d: "J Script",
        correct: "ans2",
    },
    {
        question: "Q10: Which parentheses are use for 'Array' ?",
        a: " { } ",
        b: " ( ) ",
        c: " [ ] ",
        d: "None of Them",
        correct: "ans3",
    }
];



let questions = document.getElementById("get");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let btn = document.getElementById("sub");
let btns = document.getElementById("subs");

let inp = document.querySelectorAll(".inp");
let show = document.getElementById("show");

let zero = 0;
let score = 0;

let load = () => {
    questions.innerText = ques[zero].question;
    opt1.innerText = ques[zero].a;
    opt2.innerText = ques[zero].b;
    opt3.innerText = ques[zero].c;
    opt4.innerText = ques[zero].d;
}
load();

let checkAns = () => {
    let jawab1;
    inp.forEach((curAns) => {
        if (curAns.checked) {
            jawab1 = curAns.id;
        }
    });
    return jawab1;
};

btn.addEventListener('click', () => {
    let checkedAnswer = checkAns();
    console.log(checkedAnswer);
    
    if (checkedAnswer == ques[zero].correct) {
        score = score + 5;
    }
    console.log(score);
    
    zero++;
    if (zero < ques.length) {
        load()
    } else {
        show.style.display = "inline";
        btn.style.display = "none";
        btns.style.display = "none";
    }
});

// Submit Page JS

var sets = document.getElementById("nun1");
function submit() {
    var nam = document.getElementById("nam").value;
    var roll = document.getElementById("roll").value;
    if ((nam != "") && (roll != "")) {
        sets.style.display = "none";
        form.style.display = "block";
        document.getElementById("name1").value = nam;
        document.getElementById("rollNum1").value = roll;
    }
    else {
        alert("Please Filled Input First");
    }
}

// MARKSHEET JS

var form = document.getElementById("main");
var see = document.getElementById("see");
function grade() {
    see.style.left = '0';
    form.style.display = "none";
    sets.style.display = "none";
    var total = score;
    document.getElementById("total1").value = total + "/50";
    var percent = + total / 50 * 100;
    document.getElementById("percentage").value = percent + "%";
    if (percent >= 80) {
        document.getElementById('grades').value = "A'"
    } else if (percent >= 70) {
        document.getElementById('grades').value = "A"
    } else if (percent >= 60) {
        document.getElementById('grades').value = "B"
    } else if (percent >= 50) {
        document.getElementById('grades').value = "C"
    } else if (percent >= 40) {
        document.getElementById('grades').value = "D"
    } else if (percent == 0) {
        document.getElementById('grades').value = "F"
    } else {
        document.getElementById('grades').value = "E"
    }
}

function hideSee() {
    see.style.left = '-208%';
    sets.style.display = "block";
    location.reload();
}

function rstrt() {
    location.reload();
}