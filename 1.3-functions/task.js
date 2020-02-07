//1
function getSolutions(a, b, c) {
    let dis = Math.pow(b, 2) - 4 * a * c;

    if (dis < 0) {
        return { D: dis };
    } else if (dis === 0) {
        let x1 = -b / (2 * a);
        return {
            roots: [x1],
            D: dis
        }
    } else if (dis > 0) {
        let x1 = (-b + Math.sqrt(dis)) / (2 * a);
        let x2 = (-b - Math.sqrt(dis)) / (2 * a);
        return {
            roots: [x1, x2],
            D: dis
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}² + ${b} + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней.`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень: X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}


showSolutionsMessage(4, 20, -3)
console.log("=======================================================")

//2
function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let result = sum / marks.length;
    return result;
}

function getAverageScore(data) {
    let value = new Object();
    for (let prop in data) {
        value[prop] = getAverageMark(data[prop]);
    }
    let averageSum = 0;
    let propSum = 0;
    for (let prop in value) {
        averageSum += value[prop];
        propSum++;
    }
    value['average'] = averageSum / propSum;
    return value;
}

console.log(
    getAverageScore({
        algebra: [2, 4, 3, 3, 3, 5],
        geometry: [2, 3, 5],
        russian: [5, 5, 5, 5],
        physics: [3, 4],
        music: [4, 5, 5],
        english: [5, 5, 4],
        poetry: [4, 4, 4],
        chemistry: [2, 3, 3, 3],
        french: [2, 3, 4]
    })
);