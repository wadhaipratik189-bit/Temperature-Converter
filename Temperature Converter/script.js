function celsiusToFahrenheit(celsius){
    return celsius * (9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit){
    return (5/9)*(fahrenheit - 32);
}

function formatTemperature(value, unit){
    return `${value}, ${unit}`;
}

const celsius = fahrenheitToCelsius(45);
console.log(formatTemperature(celsius, "C"));

const fahrenheit = celsiusToFahrenheit(45);
console.log(formatTemperature(fahrenheit, "F"));

const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, "C"));

const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, "F"));