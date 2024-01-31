//Count the number of properties.
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let numOfPro=[];
for (const key in student) {
    // console.log(key);
    numOfPro.push(key);

}
console.log(numOfPro.length);