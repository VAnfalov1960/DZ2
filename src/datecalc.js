// Воспользуемся инструментарием luxon
// Загружаем локально сохранённый исходный код luxon
// luxon подключить через npm import { DateTime } from "luxon";
import { DateTime } from "./luxon.js";
// экспортируем ???
// (const не надо, т.к. переменные уже существуют)
export function diffDates(firstDate, secondDate) {
  firstDate = DateTime.fromISO(firstDate); // DateTime.fromISO - функция luxon, которая выводит даты в нужном формате
  secondDate = DateTime.fromISO(secondDate);

  // Выводим информацию

  if (firstDate > secondDate)
    secondDate = [firstDate, (firstDate = secondDate)][0]; // Меняем даты, если первая дата больше второй, чтобы не появились цифры с минусами.
  return secondDate.diff(firstDate, ["years", "months", "days"]).toObject();
}
// 3 Функция diffToHtml форматирует объект как html.
// Она имеет вид стрелочки, чтобы показать разные варианты экспорта.
// Придерживаемся одинакового синтаксиса объявления функций в проекте.
export const diffToHtml = (diff) => `
  <span>
    ${diff.years ? "Лет: " + diff.years + ", " : ""}
    ${diff.months ? "Месяцев: " + diff.months + ", " : ""}
    ${diff.days ? "Дней: " + diff.days : ""}
  </span>`;
