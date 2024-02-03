//Capitalize Every first Letter of each word in a String
let gvnString="Capitalize Every first Letter of each word in a String";
let splitString =gvnString.split(" ");
console.log(splitString);
let splitChar=[];//Split the Sentence.
for(let i=0;i<splitString.length;  i++){
    splitChar.push(splitString[i].split(""));
    console.log(splitChar);//Split the words
    // for(let j=0;j<1;j++){
    //     splitChar[0].push(splitChar[0]);
    // }
}
console.log(splitChar.length);
for (let i = 0; i < splitChar.length; i++) {
    splitChar[0].push(splitChar[0].toUpperCase());
}
