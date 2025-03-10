// OOP: Nesne Tabanlı Programlama

let sorular = [
  new Soru(
    "1-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d:"npm"},
    "c"
  ),
  new Soru(
    "2-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "3-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "4-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};
function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};
const quiz = new Quiz(sorular);
document.querySelector(".btn_next").addEventListener("click",function(){

    if (quiz.sorular.length != quiz.soruIndex +1) {

        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
      } else {
        console.log("Quiz Bitti");
      }
});

document.querySelector(".btn_start").addEventListener("click", function () {
    document.querySelector(".quiz-box").classList.add("active");
    soruGoster(quiz.soruGetir());
});
function soruGoster(soru) {
  let question = `
    <span>${soru.soruMetni}</span>
    `;
let options=
    
        ``;

    for(let cevaplar in soru.cevapSecenekleri){
       options +=`
        <div class="option">
            <span><b>${cevaplar}</b>:${soru.cevapSecenekleri[cevaplar]}</span>
        </div>
        
        `;

    }
    document.querySelector(".question-text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;
}
