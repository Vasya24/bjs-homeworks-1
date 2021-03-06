function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(2000);
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    switch (true) {
        case arr1.length === arr2.length:
            if (arr1.every((element, index) => { return element === arr2[index]; })) {
                return true
            }
            if (arr1.every((element) => { return arr2.indexOf(element) > -1 })) {
                return "false, разные индексы, хотя и одинаковые значения"
            } else {
                return "false, разные значения"
            };
        default:
            return "false, разные значения"
    };
};