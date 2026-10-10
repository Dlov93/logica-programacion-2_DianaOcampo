const prompt = require("prompt-sync")();

let n= prompt("Dame los grados en Celsius: ");



 function Kelvin(n){
    let numero = Number(n);
    let gKelvin= (numero + 273.15);
    console.log("Grados Kelvin es: ",gKelvin);
 }

 function Fahrenheit (n){
    let numero = Number(n);
    let gFahreheit = ((numero*(9/5))+32);
    console.log("Grados Fahrenheit: ",gFahreheit);
 }

 if (n != null && n.trim() != ""){
    if(!isNaN(Number(n))){
        Kelvin(n);
        Fahrenheit(n);


    }else{
        console.log("¡el ususario no introdujo un numero valido!")
    }
        
    }else{
        console.log("¡El usuario no introdujo datos!")
    }
 


