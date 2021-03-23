const products = [
  {
    nameProduct: `Калькулятор дат`,
    adrImgProduct: ["./img/01.jpg"],
  },
  {
    nameProduct: `Таймер отсчёта времени`,
    adrImgProduct: ["./img/timer.gif"],
  },
];

var timer;
var a1;
var a2;
var x;

/* Блок */
var divProduct = document.createElement("div");
divProduct.id = "divProduct";
divProduct.classList.add("divProduct");

/* Кнопка для выбора калькулятора дат */
var btnProductPrevious = document.createElement("button");
btnProductPrevious.id = "btnProductPrevious";
btnProductPrevious.classList.add("btnProduct");
// При загрузке кнопка выбора сразу становится бесцветной
// btnProductPrevious.classList.add("transparent");
btnProductPrevious.textContent = "Перейти в Калькулятор дат";

/* Кнопка для выбора Таймера */
var btnProductFollowing = document.createElement("button");
btnProductFollowing.id = "btnProductFollowing";
btnProductFollowing.classList.add("btnProduct");
btnProductFollowing.textContent = "Перейти в Таймер";

/* Картинки */
var pictureProduct = document.createElement("img");
pictureProduct.id = "pictureProduct";
pictureProduct.classList.add("pictureProduct");

/* Наименование */
var nameProduct = document.createElement("h4");
nameProduct.id = "nameProduct";
nameProduct.classList.add("h4");
nameProduct.style.display = "none";

/* Открывающийся блок Таймер обратного отсчёта */
var divCountdown_timer = document.createElement("div");
divCountdown_timer.id = "divCountdown_timer";
divCountdown_timer.classList.add("divCountdown_timer");
divCountdown_timer.style.display = "none";

/* Открывающийся блок Калькулятор дат */
var divCalc = document.createElement("div");
divCalc.id = "divCalc";
divCalc.classList.add("divCalc");
divCalc.style.display = "none";

// /* Наименование */
// var addCode = document.createElement("div");
// addCode.id = "addCode";
// addCode.classList.add("addCode");
// addCode.textContent = add1;

/* Кнопка Пуск Таймер обратного отсчёта */
var start_countdown_timer = document.createElement("button");
start_countdown_timer.id = "start_countdown_timer";
start_countdown_timer.classList.add("start_countdown_timer");
start_countdown_timer.textContent = "Пуск";
start_countdown_timer.style.display = "block";

/* Кнопка Пауза Таймер обратного отсчёта */
var pause_countdown_timer = document.createElement("button");
pause_countdown_timer.id = "pause_countdown_timer";
pause_countdown_timer.classList.add("pause_countdown_timer");
pause_countdown_timer.textContent = "Пауза";
pause_countdown_timer.style.display = "none";

/* Кнопка Продолжить Таймер обратного отсчёта */
var resume_countdown_timer = document.createElement("button");
resume_countdown_timer.id = "resume_countdown_timer";
resume_countdown_timer.classList.add("start_countdown_timer");
resume_countdown_timer.textContent = "Продолжить";
resume_countdown_timer.style.display = "none";

/* Кнопка Стоп Таймер обратного отсчёта */
var stop_countdown_timer = document.createElement("button");
stop_countdown_timer.id = "stop_countdown_timer";
stop_countdown_timer.classList.add("stop_countdown_timer");
stop_countdown_timer.textContent = "Стоп";
stop_countdown_timer.style.display = "none";

/* Поле для вывода отсчёта времени */
var result_countdown_timer = document.createElement("h4");
result_countdown_timer.id = "result_countdown_timer";
result_countdown_timer.classList.add("title1");
result_countdown_timer.textContent = a2;
result_countdown_timer.style.display = "none";

// отрисовываем
document.body.prepend(divProduct); // Блок
divProduct.append(btnProductPrevious); // Калькулятор дат
divProduct.append(btnProductFollowing); // Таймер
divProduct.append(pictureProduct); // Картинка
// divProduct.append(nameProduct); // Наименование

divProduct.append(divCountdown_timer);
divCountdown_timer.append(start_countdown_timer); // Пуск Таймер
divCountdown_timer.append(pause_countdown_timer); // Пауза Таймер
divCountdown_timer.append(resume_countdown_timer); // Продолжить Таймер
divCountdown_timer.append(stop_countdown_timer); // Стоп Таймер
divCountdown_timer.append(result_countdown_timer); // Результат

divProduct.append(divCalc);

var numberProduct = 0; // 0 или 1 для выбора картинки Калькулятора или Таймера при загрузке
var numberImgProduct = 0; // 0

/* Функция для кнопки выбора Таймера */
btnProductFollowing.onclick = function () {
  divCountdown_timer.style.display = "block";
  divCalc.style.display = "none";
  btnProductPrevious.style.display = "block";
  btnProductFollowing.style.display = "none";
  numberProduct = 1;
  a();
};

/* Функция для кнопки выбора Калькулятора дат  */
btnProductPrevious.onclick = function () {
  btnProductPrevious.style.display = "none";
  btnProductFollowing.style.display = "block";
  divCountdown_timer.style.display = "none";
  divCalc.style.display = "block";
  numberProduct = 0;
  a();
};

a();
function a() {
  nameProduct.textContent = products[numberProduct].nameProduct;
  pictureProduct.src = products[numberProduct].adrImgProduct[numberImgProduct];
  pictureProduct.alt = products[numberProduct].AltImgProduct; // выбор описания alt для картинки из массива
}

/* Функция для кнопки Пуск */
start_countdown_timer.onclick = function () {
  snd2.play();
  x = document.getElementById("inp_1").value;
  start_countdown_timer.style.display = "none";
  pause_countdown_timer.style.display = "block";
  resume_countdown_timer.style.display = "none";
  stop_countdown_timer.style.display = "block";
  result_countdown_timer.style.display = "block";
  start_countdown();
};

/* Функция для кнопки Пауза */
pause_countdown_timer.onclick = function () {
  snd2.play();
  start_countdown_timer.style.display = "none";
  pause_countdown_timer.style.display = "none";
  resume_countdown_timer.style.display = "block";
  stop_countdown_timer.style.display = "block";
  result_countdown_timer.style.display = "block";
  pause_countdown();
};

/* Функция для кнопки Продолжить */
resume_countdown_timer.onclick = function () {
  snd2.play();
  start_countdown_timer.style.display = "none";
  pause_countdown_timer.style.display = "block";
  resume_countdown_timer.style.display = "none";
  stop_countdown_timer.style.display = "block";
  result_countdown_timer.style.display = "block";
  start_countdown();
};

/* Функция для кнопки Стоп */
stop_countdown_timer.onclick = function () {
  snd1.play();
  start_countdown_timer.style.display = "block";
  pause_countdown_timer.style.display = "none";
  resume_countdown_timer.style.display = "none";
  stop_countdown_timer.style.display = "none";
  result_countdown_timer.style.display = "none";
  stop_countdown();
};

// запуск функции обратного отсчёта
function start_countdown() {
  document.getElementById("result_countdown_timer").innerHTML = x;
  x--; // уменьшаем число на единицу
  if (x < 0) {
    clearTimeout(timer); // таймер остановится на нуле
    snd1.play(); // вызываем звуковой сигнал
    start_countdown_timer.style.display = "block";
    pause_countdown_timer.style.display = "none";
    resume_countdown_timer.style.display = "none";
    stop_countdown_timer.style.display = "none";
    result_countdown_timer.style.display = "block";
  } else {
    timer = setTimeout(start_countdown, 1000); // отсчёт времени  по 1 секунде
  }
}

// пауза работы функции обратного отсчёта
function pause_countdown() {
  clearTimeout(timer);
  document.getElementById("result_countdown_timer").innerHTML = x;
}

function stop_countdown() {
  clearTimeout(timer);
  x = 0;
  document.getElementById("result_countdown_timer").innerHTML = x;
  result_countdown_timer.style.display = "none";
}
// ==================================================
// звуковой сигнал
const snd1 = new Audio("./audio/zv1.mp3");
const snd2 = new Audio("./audio/zv2.mp3");
// ==================================================
// функция для вывода выбранного времени
// не получается взять из JS файла, берётся только из HTML файла

// <form name="timeSelectionForm2" - переименовал, чтобы не было совпадения
document.getElementById("divCountdown_timer").insertAdjacentHTML(
  "afterBegin",
  `<form name="timeSelectionForm2"> 
      <table cellpadding="10">
        <tr>
          <td>
            <form id="countdown_timer2">
            <h3>Таймер отсчёта времени</h3>
            <br />
              <br>
              <label for="inp_1">Введите или выберите число:</label>
              <input type="number" class="form-control" id="inp_1" min="1" value="3">
            </form>
          </td>
        </tr>
        <tr>
          <td>
            <br />
            <input class="btnClear" type="reset" name="btnClear" value=" Очистить " />
          </td>
        </tr>
      </table>
    </form>
`
);

var add2 = document.getElementById("divCalc").insertAdjacentHTML(
  "afterBegin",
  `    <div id="divCalc">
  <form id="datecalc">
    <h3>Калькулятор дат</h3>
    <br /><br />
    <label>
      <strong>Первая дата:</strong>
      <input type="date" name="firstDate" />
    </label>
    <br /><br /><br />
    <label>
      <strong>Вторая дата:</strong>
      <input type="date" name="secondDate" />
    </label>
    <br /><br />
    <button class ="start_countdown_timer" type="submit">Рассчитать промежуток</button>
    <br /><br />
    <p id="datecalc__result"></p>
  </form>
</div>`
);
