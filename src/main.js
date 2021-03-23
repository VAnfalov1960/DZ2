// Импортируем 2 функции из файла src/datecalc.js
import { diffDates, diffToHtml } from "./datecalc.js";

// Импортируем функцию из файла src/utils.js для вывода только как ошибку
import { formatError } from "./utils.js";

// Получаем нужные нам DOM-элементы в HTML файле
const dateCalcForm = document.getElementById("datecalc"); // id формы
const dateCalcResult = document.getElementById("datecalc__result"); // id куда выводим

// Устанавливаем обработчик формы
// урок 1 - время 1 45 12 - меняет "втихушку" ничего не объясняя зачем, почему
dateCalcForm.addEventListener("submit", handleCalcDates);
function handleCalcDates(event) {
  dateCalcResult.innerHTML = ""; // при нажатии на кнопку очищаем результат
  event.preventDefault();
  // получаем из формы значения firstDate и secondDate
  let { firstDate, secondDate } = event.target.elements; // получаем доступ к значениям в форме

  (firstDate = firstDate.value), (secondDate = secondDate.value); // получаем сами значения из формы
  // для проверки ???????????????// испортил
  // alert(firstDate + ", " + secondDate);
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);

    // проверка, если одно из двух полей не выбрано
    // Вычитаем промежуток между датами
  }
  // выводим информацию об ошибке
  else
    dateCalcResult.innerHTML = formatError(
      "Для расчёта промежутка необходимо заполнить оба поля"
    );
}
