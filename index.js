//=================HW2==================
//За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
let name = prompt('What is your name?');
alert(`Hello, ${name}! How are you?`);



//========================================================
//Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
let firstNumber = prompt('Введіть перше число від 1 до 10');
firstNumber = Number(firstNumber);
let secondNumber = prompt('Введіть друге число від 1 до 10');
secondNumber = Number(secondNumber);

let value = prompt('Введіть значення -, * або /');
console.log(value);
switch (value) {
    case '-':
        alert(firstNumber - secondNumber);
        break;
    case '*':
        alert(firstNumber * secondNumber);
        break;
    case '/':
        alert(firstNumber / secondNumber);
        break;
};


//=======================================================
//Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
let firstValue = prompt('Введіть перше значення');
let secondValue = prompt('Введіть друге значення');

if (firstValue === secondValue) {
    alert('Значення true')
} else{
    alert('Значення false')
};




//=======================================================
//Визначити середнє арифметичне трьох чисел
let one = prompt('Введіть перше число');
one = Number(one);
let two = prompt('Введіть друге число');
two = Number(two);
let three = prompt('Введіть третє число');
three = Number(three);

let result = alert((one + two + three) / 3)

//===========================================================
//Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)

let number = 12345;
let number1 = number % 10;
number = Math.floor(number / 10);
let number2 = number % 10;
number = Math.floor(number / 10);
let number3 = number % 10;
number = Math.floor(number / 10);
let number4 = number % 10;
number = Math.floor(number / 10);
let number5 = number % 10;
number = Math.floor(number / 10);
console.log(`${number5} ${number4} ${number3} ${number2} ${number1}`);
