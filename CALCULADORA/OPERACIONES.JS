function suma() {
    var valor1 = document.getElementsByName("num1")[0].value;
    var valor2 = document.getElementsByName("num2")[0].value;
    var resultadoSuma = parseInt(valor1) + parseInt(valor2);
    alert("El resultado es " + resultadoSuma);
}

function resta() {
    var valor1 = document.getElementsByName("num1")[0].value;
    var valor2 = document.getElementsByName("num2")[0].value;
    var resultadoResta = parseInt(valor1) - parseInt(valor2);
    alert("El resultado es " + resultadoResta);
}

function multi() {
    var valor1 = document.getElementsByName("num1")[0].value;
    var valor2 = document.getElementsByName("num2")[0].value;
    var resultadoMulti = parseInt(valor1) * parseInt(valor2);
    alert("El resultado es: " + resultadoMulti);
}

function division() {
    var valor1 = document.getElementsByName("num1")[0].value;
    var valor2 = document.getElementsByName("num2")[0].value;
    var resultadoDivision = parseInt(valor1) / parseInt(valor2);
    alert("El resultado es " + resultadoDivision);
}