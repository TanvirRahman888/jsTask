//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(Bin) {
    let count = Bin.split('');
    let count0 = 0;
    // for (let i of count) {
    //     console.log(count[i]);
    //     if (count[i] ==='0') {
    //         count0++;
    //     }
    // }
    // return count0;
    // --------------------------------
    for (let i = 0; i < count.length; i++) {
        console.log(count[i]);
        if (count[i] === '0') {
            count0++;
        }
    }
    return count0;
}
let Bin = "00101";
console.log("Number of o : ",count_zero(Bin));