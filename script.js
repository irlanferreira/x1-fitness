function calcularIMC() {
    console.log()
        var altura = parseFloat(document.getElementById("altura").value);
var peso = parseFloat(document.getElementById("peso").value);

if (altura&&peso){
            var imc = peso / (altura * altura);
var imc = imc.toFixed(2)
document.getElementById("resultado").innerText = `Seu IMC é ${imc}`;
        } else {
    document.getElementById("resultado").innerText = "preencha altura e peso.";
        }
    }