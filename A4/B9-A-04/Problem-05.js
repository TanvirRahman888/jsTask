function monthlySavings(arr, num) {
    if (!Array.isArray(arr) || typeof num !== 'number') {
        return 'invalid input'
    }
    let totalIncome = 0;
    for (const i of arr) {
        if (typeof i !== 'number') {
            return 'Income should be in number format'
        }
        else if (i >= 3000) {
            totalIncome += i - i * 0.20;
        } else {
            totalIncome += i
        }
    }
    let saving = totalIncome - num;
    return saving >= 0 ? saving : 'earn more'
}
let arr = [ 900 , 2700 , 3400];
let num = 10000;
console.log(monthlySavings(arr, num));