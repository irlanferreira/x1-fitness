function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    if (altura && peso) {
        var imc = peso / (altura * altura);
        var imc = imc.toFixed(2);

        var classificacao = "";
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = "Obesidade grau I";
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = "Obesidade grau II";
        } else {
            classificacao = "Obesidade grau III";
        }

        document.getElementById("resultado").innerText = `Seu IMC é ${imc} (${classificacao})`;
    } else {
        document.getElementById("resultado").innerText = "Preencha altura e peso.";
    }
}