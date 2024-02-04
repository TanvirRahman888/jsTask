//Write a function to count the number of vowels in a string.
function findVowels(str) {
    let lwrStr = str.toLowerCase(); //need to Lower   Case in a line.
    let char = lwrStr.split('');
    console.log(char);
    for (let i = 0; i < char.length; i++) {
        if (char[i] === 'a' || char[i] === 'e' || char[i] === 'i' || char[i] === 'o' || char[i] === 'u') {
            numberOfVowels++;
        }
    }
    return numberOfVowels;
}
let str = 'Hello Bangladesh';
let numberOfVowels = 0;
console.log("Total NumberOf Vowels : ", findVowels(str));