function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid"
    }
    let givnName = name.toLowerCase().split('');
    let lastChar = givnName.length - 1;
    if (givnName[lastChar] === 'a' || givnName[lastChar] === 'y' || givnName[lastChar] === 'i' || givnName[lastChar] === 'e' || givnName[lastChar] === 'o' || givnName[lastChar] === 'u' || givnName[lastChar] === 'w') {
        return "Good Name"
    } else {
        return "Bad Name"
    }
}
console.log(checkName("ChoitY"));