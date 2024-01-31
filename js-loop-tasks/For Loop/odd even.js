/***
Subtask-1: Find all the odd numbers from 61 to 100.
Subtask-2: Find all the even numbers from 78 to 98.
 */

let oddNum=[];
let evenNum=[];

for(let i= 61;i<=100;i++)// oddNum
{
    if (i%2===1) {
        oddNum.push(i);        
    }
} 
console.log("Odd  Numbers : ",oddNum);


for(let i= 78;i<=98;i++)// oddNum
{
    if (i%2===0) {
        evenNum.unshift(i);        
    }
} 
console.log("Even  Numbers : ",evenNum);