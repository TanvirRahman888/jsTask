//Find the friend with the smallest name.
function smallestName(names){
    let smallest=names[0];
    if (!Array.isArray(names)) {
        return "It's not an Array";   
    }
    for (let i = 0; i < names.length; i++) {
        if (typeof names[i]!=="string") {
            return "It's not a String"
        }
        else{
            if (names[i].length<smallest.length) {
                smallest=names[i];                
            }
        }
    }
    return smallest;
}
const names =['redf','drdfsdf','fefdsfds','tr'];
console.log(smallestName(names));