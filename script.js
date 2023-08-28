let celsius = document.getElementById('Celsius');
let fahrenheit = document.getElementById('Fahrenheit');
let kelvin = document.getElementById('Kelvin');
celsius.oninput = function () {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
}
fahrenheit.oninput = function () {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
}
kelvin.oninput = function () {
    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let c = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat(c.toFixed(2));
}
function clean() {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";
    }
}

