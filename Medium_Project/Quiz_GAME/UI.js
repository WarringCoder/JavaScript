function UI()
{
    this.y_btn = document.querySelector("#y-btn");
    this.t_btn = document.querySelector("#t-btn");
    this.button_container = document.querySelector(".button-container");
    this.title_span = document.querySelector(".title-span");
    this.title_p = document.querySelector(".title-p");
    this.title_icon = document.querySelector(".title-icon");
    this.quiz_container = document.querySelector(".quiz-container");
    this.choices_container = document.querySelector(".choices-container");
    this.btn_next = document.querySelector(".btn-next");
    this.score_box = document.querySelector(".score_box");
    this.btn_quit = document.querySelector(".btn_quit");
    this.btn_replay = document.querySelector(".btn_replay");
    this.correctIcon = '<div ><i class="fa-solid fa-check"></i></div>';
    this.incorrectIcon = '<div ><i class="fas fa-times"></i></div>';
    this.time_text = document.querySelector(".time-text");
    this.time_second = document.querySelector(".time-second");
    this.time_line = document.querySelector(".time-line");
}

UI.prototype.soruGoster = function(soru)
{
    let question = `<span>${soru.soruMetni}</span>`;
    let options = "";

    for(let cevap in soru.seçenekler)
    {
        options += `
                <div class="choice">
                        <span><b>${cevap} :</b>${soru.seçenekler[cevap]}</span>
                    </div>
            `;
    }
    document.querySelector(".question-text").innerHTML = question;
    this.choices_container.innerHTML = options;

    const choice = this.choices_container.querySelectorAll(".choice");

    for (let opt of choice) {
      opt.setAttribute("onclick", "optionSelected(this)");
    }


}

UI.prototype.soruSayısınıGoster = function(soruSırası, ToplamSoru)
{
    let tag = ` <span>${soruSırası} / ${ToplamSoru} </span>`;
    document.querySelector(".question_index").innerHTML = tag;
}

UI.prototype.skoruGoster = function(toplamSoru, dogruCevap)
{
    let tag = `Toplam <strong>${toplamSoru}</strong> sorudan <strong>${dogruCevap}</strong> doğru cevap verdiniz.`;
    document.querySelector(".score_text").innerHTML = tag;
}