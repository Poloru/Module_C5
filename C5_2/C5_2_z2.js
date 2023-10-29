// Задание 2
// Вам дана заготовка и результат, который вы должны получить.
// Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

/* Этап 1. Подготовка данных */
// JSON, который мы будем парсить
const jsonString = `
{
 "list": [
  {
   "name": "Andrey",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

// /* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
const list = data.list;

/* Этап 3. Запись данных в результирующий объект */

// Перевод возраста в число
for(let i = 0; i < list.length; i++) {
    // data.list[i].age = parseInt(list[i].age);
    data.list[i].age = Number(list[i].age);
}

console.log("Res JSON: ",data);
