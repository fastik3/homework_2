const student = "Уткин Денис Алексеевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;


let semesterOne = Array(16).fill([4, 1, 2, 5, 2, 2, 0]).flat();
let examOne = Array(1).fill([0, 2, 0, 2, 0, 0, 0]).flat();
let holidays = Array(2).fill([0, 0, 0, 0, 0, 0, 0,]).flat();
let semesterTwo = Array(23).fill([1, 4, 4, 2, 5, 0, 0]).flat();
let examTwo = Array(1).fill([2, 0 , 2, 0, 2, 0, 0]).flat();

let array = [semesterOne, examOne, holidays, semesterTwo, examTwo].flat();

let consoles = +prompt('Стоимость приставки', 23500);
let transport = +prompt('Стоимость транспорта', 120);
let passage = +prompt('Сумма денег от мамы на проезд', 150);
let lunch = +prompt('Сумма денег от мамы на обед', 250);

const ride_difference = passage - transport

let totalMoney = 0;
let totalDays = 0;


if (ride_difference < 0) {
    alert('Ошибка! Стоимость проезда больше, чем сумма денег от мамы за проезд.')
} else {
    for (let element = 0; element < array.length; element++) {

        if (totalMoney >= consoles) {
            break
        }

        if ((array[element] <= 3) && (array[element] > 0)) {
            totalMoney = totalMoney + lunch + ride_difference
        
        } else if (array[element] > 3) {
            totalMoney = totalMoney + ride_difference 
        
        }

        totalDays = totalDays + 1
        continue
        
    }
}


if (totalMoney >= consoles) {
    alert('На приставку накопить удалось на ' + Number(totalDays) + ' день.')
} else {
    alert('На приставку накопить не удалось, но за все время было накоплено ' + Number(totalMoney) + ' рублей.')
}




