//Write a function to convert temperature from Celsius to Fahrenheit.
// °F = °C × (9/5) + 32
// °C = (9/5)/°F + 32

function temperature(Celsius){
    let Fahrenheit = Celsius * (9/5) + 32;
    return Fahrenheit;
}
let Celsius=-40;
temperature(Celsius);
console.log(temperature(Celsius));