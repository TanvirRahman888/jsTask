//Make A Great Password
function password(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return "Invalid Object Received."
    }
    if (typeof obj.name ==="string" && typeof obj.birthYear==="number" && obj.birthYear >= 1000 && typeof  obj.siteName=== "string") {
        let passwordIs= `${obj.siteName}#${obj.name}@${obj.birthYear}`;
        let targetedPassword=passwordIs.split('');
        let x= targetedPassword.shift().toLocaleUpperCase();
        return `${x}${targetedPassword.join("")}`;
    } else {
        return'invalid'
    }
}
let obj = { name: 'kolimuddin', birthYear: 1999, siteName: 'google' };
console.log(password(obj));