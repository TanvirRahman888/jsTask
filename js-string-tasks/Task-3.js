//Check whether a string contains all the vowels a, e, i, o, u
const str = "Hello! Amar sonar bangla, ami tomai -----u----";
// let strSplit=[];
let strSplit = str.split("");
// console.log(strSplit);
let n = [0, 0, 0, 0, 0];
for (let i = 0; i < str.length; i++) {
    if (strSplit[i] === "a" || strSplit[i] === "A") {
        n[0]++;
    }
    else if (strSplit[i] === "e" || strSplit[i] === "e") {
        n[1]++;
    }
    else if (strSplit[i] === "i" || strSplit[i] === "I") {
        n[2]++;
    }
    else if (strSplit[i] === "o" || strSplit[i] === "O") {
        n[3]++;
    }
    else if (strSplit[i] === "u" || strSplit[i] === "U") {
        n[4]++;
    }
}
if (n[0] && n[1] && n[2] && n[3] && n[4] > 0) {
    console.log("This string contains all the vowels")
}
else {
    if (n[0] === 0) {
        console.log("There are no (a or A)");
    }
    else { console.log("There are ", n[0], "(a  or A)"); }
    if (n[1] === 0) {
        console.log("There are no (e or E)");
    }
    else { console.log("There are ", n[1], "e  or E)"); }
    if (n[2] === 0) {
        console.log("There are no (i or I)");
    }
    else { console.log("There are ", n[2], "(i  or I)"); }
    if (n[3] === 0) {
        console.log("There are no (o or O)");
    }
    else { console.log("There are ", n[3], "(o  or O)"); }
    if (n[4] === 0) {
        console.log("There are no (u or U)");
    }
    else { console.log("There are ", n[4], "(u  or U)"); }
}
