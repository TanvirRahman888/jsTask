//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(integers) {
    for (const i of integers) {
        sum=sum+i;
    }
    console.log("Sum of the integers: ",sum);
    return avg=sum/len;
    //console.log("Sum of the integers: ",sum);
}
let sum=0;
let  avg=0;
let integers=[3,5,3,5,3,6,3];
let len=integers.length;
console.log("Average of those values ",make_avg(integers));