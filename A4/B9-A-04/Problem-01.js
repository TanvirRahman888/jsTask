function calculateMoney(visitors) {
    if (visitors < 0 || typeof visitors !== "number") {
        return "Invalid Number"
    }
    return (visitors * 120) - (500 + (8 * 50));
}
console.log(calculateMoney(10));