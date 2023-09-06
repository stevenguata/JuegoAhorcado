const txtingresar = document.getElementById("texto")
const btnCalcular = document.getElementById("Calcular")
const txtsalida = document.getElementById("salida")

const palabras = ['automovil', 'colombia', 'programacion', 'tecnologia', 'deporte', 'murcielago'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)]

let palabraGuion = palabra.replace(/./g, "_ ");
let contador = 0;



String.prototype.replaceAt=function(index, character)
{ return this.substring(0, index) + character + this.substring(index+character.length); } 

btnCalcular.addEventListener('click', function(){
    
    const letra = document.querySelector('#texto').value;
    
    let fallado = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraGuion = palabraGuion.replaceAt(i*2, letra);
            fallado = false;
        }
    }
    if(fallado){
        contador++;
        document.querySelector('#imagen').style.backgroundPosition = -(254*contador) + 'px 0';
        if(contador == 5){
            alert('PERDISTE !!')
        }
    }else{
        if(palabraGuion.indexOf('_') <0){
            alert('GANASTE !!')
        }
    }


    txtsalida.innerText= (palabraGuion)
    document.querySelector('#texto').value = '';
    document.querySelector('#texto').focus();
});