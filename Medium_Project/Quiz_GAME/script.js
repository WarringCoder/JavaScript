const quiz = new Quiz(yazılım_sorular);
const ui = new UI();


ui.y_btn.addEventListener("click", function () 
{
    ui.button_container.classList.add("button-container-remove");
    ui.title_span.classList.add("title-span-remove");
    ui.title_p.classList.add("title-p-remove");
    ui.title_icon.classList.add("title-icon-add");
    ui.quiz_container.classList.add("quiz-container-add");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayısınıGoster(quiz.soruIndex + 1, quiz.sorular.length);
    startTimer(10);
    startTimerLine();
});

ui.btn_next.addEventListener("click", function()
{
    if(quiz.sorular.length != quiz.soruIndex + 1)
    {
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();
        quiz.soruIndex += 1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayısınıGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("btn-next-show");
    }
    else
    {
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_container.classList.remove("quiz-container-add");
        ui.score_box.classList.add("score_box_add");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

ui.btn_quit.addEventListener("click", function() {
    window.location.reload();
});

ui.btn_replay.addEventListener("click", function() {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.y_btn.click();
    ui.score_box.classList.remove("score_box_add");
});

function optionSelected(choice)
{
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = choice.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    
    if (soru.dogruCevabiKontrolEt(cevap)) 
    {
        quiz.dogruCevapSayisi += 1;
        choice.classList.add("correct");
        choice.insertAdjacentHTML("beforeend", ui.correctIcon);   
    }
    else
    {
        choice.classList.add("incorrect");
        choice.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.choices_container.children.length; i++) 
    {
        ui.choices_container.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("btn-next-show");
}

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.time_second.textContent = time;
        time--;

        if(time < 0) {
            clearInterval(counter);

            ui.time_text.textContent = "Süre Bitti";

            let cevap = quiz.soruGetir().dogruCevap;

            for(let choice of ui.choices_container.children) {

                if (choice.querySelector("span b").textContent == cevap) {
                  choice.classList.add("correct");
                  choice.insertAdjacentHTML("beforeend", ui.correctIcon);
                }

                choice.classList.add("disabled");
            }

            ui.btn_next.classList.add("btn-next-show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 27);

    function timer() {
        line_width += 0.1;
        ui.time_line.style.width = line_width + "rem";

        if(line_width > 40) {
            clearInterval(counterLine);
        }
    }
}