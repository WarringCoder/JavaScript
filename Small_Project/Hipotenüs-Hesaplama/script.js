function hesapla() {
  let number1 = Number(document.querySelector("#kenar1").value);
  let number2 = Number(document.querySelector("#kenar2").value);
  const Hipotenüs = Math.sqrt(number1 * number1 + number2 * number2);
  document.querySelector(".sonuc").innerHTML = `
                <div class="hipotenüssonuc">
                    <span>Hipotenüsü :</span> <div>${Hipotenüs}</div>
                </div>
            `;
}
let button = document.querySelector("#btn");
button.onclick = hesapla;
