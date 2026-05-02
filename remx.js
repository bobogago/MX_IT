const quizData = [
    {q: "Perferes uma bebida forte ou fraca?", opts: ["Forte", "Fraca"]},
    {q: "Energética?", opts: ["Sim", "Não"]},
    {q: "Doce?", opts: ["Sim", "Não"]},
    {q: "Ácido?", opts: ["Sim", "Não"]},
    {q: "Com gás?", opts: ["Sim", "Não"],},
    {q: "Clássico ou maluco?", opts: ["Clássico", "Maluco"]}
];
const questionElement = document.getElementById("pergunta");
questionElement.classList.add("test");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let currentQuestion = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.q;
    btn1.innerText = question.opts[0];
    btn2.innerText = question.opts[1];
}

function selectAnswer() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

btn1.addEventListener("click", selectAnswer);
btn2.addEventListener("click", selectAnswer);

function showResult() {
    const score = Math.floor(Math.random() * (quizData.length + 1));
    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("pontuacao").innerText = score;
}

function repetir() {
    currentQuestion = 0;
    document.getElementById("resultado").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}
/*
document.querySelector("h1").innerHTML =
    document.querySelector("h1").innerText
        .split("")
        .map(char => Math.random() > 0.5 ? <span class="brilho">${char}</span> : char)
        .join("");
function atualizar() {
    document.querySelector("h1").innerHTML =
        document.querySelector("h1").innerText
            .split("")
            .map(char => Math.random() > 0.5 ? <span class="brilho">${char}</span> : char)
            .join("");
}

setInterval(atualizar, 2000);
atualizar();*/
showQuestion();