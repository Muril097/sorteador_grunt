document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('calc').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let username = document.getElementById('name').value;
        let peso = document.getElementById('peso').value;
        peso = parseFloat(peso);
        let alt = document.getElementById('alt').value;
        alt = parseFloat(alt);
        const valorIMC = (peso / (alt *alt)).toFixed(1);
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }
        else if (valorIMC < 25){
            classificacao = 'com peso ideal, Parabens!!!';
        }
        else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }
        else if (valorIMC < 35){
            classificacao = 'com obesidade grau I';
        }
        else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }
        else {
            classificacao = 'com obesidade grau III';
        }

        document.getElementById('username').innerText = username
        document.getElementById('resultado-valor').innerText = valorIMC
        document.querySelector('.resultado').style.display = 'block';
        document.getElementById('classificacao').innerText = classificacao
    })
})