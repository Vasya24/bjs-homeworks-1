"use strict"

function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a, b, c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    let dis = Math.pow(b, 2) - 4 * a * c; //Формула дискриминанта
    let root;
    let result = [];
    if (dis < 0) {
        console.log("Уравнение не имеет корней");
        return result;
    }
    let x1 = (b + Math.sqrt(dis)) / (2 * a);
    let x2 = (b - Math.sqrt(dis)) / (2 * a);
    if (dis === 0) {
        root = -b / (2 * a);
        console.log(`Корень кравнения: ${root}`);
        return root;
    } else {
        result[0] = (-b + Math.sqrt(dis)) / (2 * a);
        result[1] = (-b - Math.sqrt(dis)) / (2 * a);
        console.log(`Корни уравнения: ${result[0]} и ${result[1]}`);
        return result;
    }
}

console.log("=============================")


function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    //Проверка количества оценок. Если превышает 5, сносим всё, начиная с 5 регистра
    if (marks.length > 5) {
        console.log("Оценок больше 5!")
        marks = marks.slice(0, 5)
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    //Число должно быть целым, поэтому округляем конечный результат
    let averageMark = sum / marks.length;
    return Math.round(averageMark);
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`
    }
    return result
}

askDrink("Василий", new Date(1992, 02, 24))