// Задача 4 - 1
// Callback функция
// Функция mapArray(array, cb), принимает 1 - м параметром array - массив чисел,
//     а вторым параметром cb - функцию обратного вызова(callback).
// Функция mapArray создает новый массив numbers и заполняет его числами из массива array преобразованными функцией cb.

// Оформи создание массива numbers нужной длины используя new Array() и необходимый аргумент для задания длины, равной длине array.

// Напиши функцию обратного вызова addIndex, которая принимает два параметра
//     - element и index и возвращает число - сумму element и index(сложение).

// Напиши функцию обратного вызова subIndex, которая принимает два параметра
//     - element и index и возвращает число - разность element и index(вычитание).
//
//
//

// Write code under this line
const addIndex = (element, index) => (element = element + index);
// тоже ссамое что и:

// const addIndex = function (element, index) {
//   element = element + index;
//   return element;
// };

// Write code under this line
const subIndex = (element, index) => (element = element - index);

function mapArray(array, cb) {
  "use strict";
  // Write code under this line

  console.log(array);

  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];

    console.log("element = ", element);

    const index = i;

    console.log("index = ", index);

    numbers[i] = cb(element, index);

    console.log(`${element} + ${index} = `, numbers[i]);
    console.log(`numbers[${i}]`, numbers[i]);
    console.log(numbers);
    console.log("");
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

//console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
