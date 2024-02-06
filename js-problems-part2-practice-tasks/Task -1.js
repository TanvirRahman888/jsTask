//Find the lowest number in the array below.

function lowestNumber(numbers) {
    let lowest=numbers[0];
    if (Array.isArray(numbers)) {
        for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] === "number") {
                if (numbers[i] > lowest) {
                    lowest = numbers[i];
                }
            }
            else {
                return "Please Enter all Integer value ";
            }
        }
    }
    else {
        return "Insert an Array."
    }
    return lowest;
}

const numbers = [43, 6, 4, 35];
console.group(lowestNumber(numbers));