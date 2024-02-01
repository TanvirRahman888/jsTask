// let testString = "xoom Xoom";
// let splitTestString = testString.split("");
// console.log(splitTestString);
// let smx = [];
// let cpX = [];
// let i = 0;
// while (i < splitTestString.length) {
//     if (splitTestString[i] === 'x') {
//         smx.push(i);
//         // console.log("smx ", i);
//     }
//     else if (splitTestString[i] === 'X') {
//         cpX.push(i);
//         // console.log("cpX ", i);
//     }
//     i++;
// }

// console.log(smx);
// console.log(cpX);

// // splitTestString.splice(cpX[0],1,"Y")
// for (const iterator of smx) {
//     splitTestString.splice(smx[iterator], 1, "y")

// }
// for (const iterator1 of cpX) {
//     splitTestString.splice(cpX[iterator1], 1, "Y")

// }
// console.log(splitTestString);
// let changexX = splitTestString.join("");

// console.log(changexX);
//---------------------------------------
let cString ="XoxoX YuyuY"
let splitcString = cString.split("");
console.log(splitcString);
let smx = [];
let cpX = [];
for (let index = 0; index < splitcString.length; index++) {
    if (splitcString[index]==='x') {
        smx.push(index);
    }
    else if (splitcString[index]==='X') {
        cpX.push(index);
    }    
}
console.log(smx," ",  cpX);

for(let  key of smx){
    // console.log(key);
    splitcString.splice(key,1,'y');
}
console.log(splitcString);
for(let  key of cpX){
    console.log(key);
    splitcString.splice(key,1,'Y');
}
console.log(splitcString);
let nString=splitcString.join("");
console.log(nString);