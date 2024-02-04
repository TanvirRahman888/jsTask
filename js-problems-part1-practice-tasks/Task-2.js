//You are given an array of numbers. Count how many times the a number is repeated in the array.
function arr(numbers){
    // for (let i of numbers) {
    //     if (find===numbers[i]) {
    //         count++;
    //     }        
    // }    
    for (let i = 0; i < numbers.length; i++) {
        if (find===numbers[i]) {
            count++;
        }           
    }
    if (count>0) {
        return  count;
    }return 'Not Found!';
}
let numbers=[6,66,1,2,6,4,5,6,8,6];
let find=6;
let count=0;
console.log(arr(numbers));