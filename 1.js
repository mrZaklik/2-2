console.log ('TASK-1');
let name = prompt ('Как вас зовут?'),
    age = prompt ('Сколько вам лет?'),
    city = prompt ('В каком городе вы проживаете?'),
    phone = prompt ('Введите свой номер телефона'),
    email = prompt ('Введите свою электронную почту'),
    company = prompt ('В какой компании вы работаете?');
document.write ('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' +  company + '. Мои контактные данные: ' + phone + ', ' + email + '. ');


console.log ('TASK-2');
let year = 2020 - age;
document.write (name + ' родился в ' + year + ' году.');


console.log ('TASK-3');
let num = '123456';
let sum1 = (+num[0] + +num[1] + +num[2]);
let sum2 = (+num[3] + +num[4] + +num[5]);
console.log (sum1 == sum2);


console.log ('TASK-4');
let a = 1;
    (a > 0) ? console.log ('Верно') : console.log ('Неверно');
    a = 0;
    (a > 0) ? console.log ('Верно') : console.log ('Неверно');
    a = -3;
    (a > 0) ? console.log ('Верно') : console.log ('Неверно');


console.log ('TASK-5');
let a5 = 10,
    b5 = 2,

    sum = a5 + b5,
    dif = a5 - b5,
    mul = a5 * b5,
    div = a5 / b5,
    squ = sum * sum;
console.log (sum);
console.log (dif);
console.log (mul);
console.log (div);
if (sum > 1) console.log (squ);


console.log ('TASK-6');
((a5 > 2 && a5 < 11) || (b5 >= 6 && b5 < 14)) ? console.log ('Верно') : console.log ('Неверно');


console.log ('TASK-7');
let n = 59;

if (n <= 15) console.log ('Первая половина часа');
else if (n >= 16 && n <= 30) console.log ('Вторая половина часа');
else if (n >= 31 && n <= 45) console.log ('Третья половина часа');
else if (n >= 46 && n <= 60) console.log ('Четвёртая половина часа');


console.log ('TASK-8');
let day = 31;

if (day <= 10) console.log ('Первая декада меляца');
else if (day >= 11 && day <= 20) console.log ('Вторая декада меляца');
else if (day >= 21 && day <= 31) console.log ('Третья декада меляца');


console.log ('TASK-9');
let day9 = 548;

console.log (day9 / 365 + ' - лет');
console.log (day9 / 30 + ' - месяцев');
console.log (day9 * 24 + ' - часов');
console.log (day9 * 24 * 60 + ' - минут');
console.log (day9 * 24 * 60 * 60 + ' - секунд');


console.log ('TASK-10');
let x = 222;

if (x <= 31) console.log ('1-й месяц');
else if (x >= 32 && x <= 59) console.log ('2-й месяц');
else if (x >= 60 && x <= 90) console.log ('3-й месяц');
else if (x >= 91 && x <= 120) console.log ('4-й месяц');
else if (x >= 121 && x <= 151) console.log ('5-й месяц');
else if (x >= 152 && x <= 181) console.log ('6-й месяц');
else if (x >= 182 && x <= 212) console.log ('7-й месяц');
else if (x >= 213 && x <= 243) console.log ('8-й месяц');
else if (x >= 244 && x <= 273) console.log ('9-й месяц');
else if (x >= 274 && x <= 304) console.log ('10-й месяц');
else if (x >= 305 && x <= 334) console.log ('11-й месяц');
else if (x >= 335 && x <= 365) console.log ('12-й месяц');
else if (x >= 366) console.log ('Укажите число до 365 включительно');

switch (true) {
    case x <= 90:
        console.log ("Зима");
      break;
    case x >= 91 && x <= 181:
        console.log ('Весна');
      break;
    case x >= 182 && x <= 273:
        console.log ('Лето');
      break;
    case x >= 274 && x <= 365:
        console.log ('Осень');
      break;
    default:
        alert ("Что-то пошло не так...");
  }