//Count how many times a string has the letter a or A
const str="Count how many times a string has the letter a or A";
// let strSplit=[];
let strSplit=str.split("");
// console.log(strSplit);
let n=0;
for(let i=0;i<str.length;i++){
    if (strSplit[i]==="a" || strSplit[i]==="A") {
        n++;
    }
}

console.log(n);