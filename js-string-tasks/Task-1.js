//Count how many times a string has the letter a
const str="Count how many times a string has the letter a";
// let strSplit=[];
let strSplit=str.split("");
// console.log(strSplit);
let n=0;
for(let i=0;i<str.length;i++){
    if (strSplit[i]==="a") {
        n++;
    }
}

console.log(n);

