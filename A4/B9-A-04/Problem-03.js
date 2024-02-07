//Problem 03 : Virus in my Array
function deleteInvalids(arr) {
    let validData = [];
    if (Array.isArray(arr)) {
        for (const i of arr) {
            if (typeof i === 'number' && !isNaN(i)) {
                validData.push(i);
            }           
        }
        return validData;
    }
    return "Invalid Array";
}
let arr = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]
console.log(deleteInvalids(arr));