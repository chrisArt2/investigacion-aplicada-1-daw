/*Ejemplo: Calculadora del índice de masa corporal. Verifica el estado de salud de peso de una persona conforme a su estatura y peso*/ 

//Los paréntesis de los parámetros se pueden omitir en las arrow functions o funciones flecha cuando solo se encuentre un parámetro.



const funcionPrincipal = ()=> {

    let pesoDeUsuario = document.getElementById('input-imc').value;
    pesoDeUsuario = parseFloat(pesoDeUsuario);

    let alturaUsuario = document.getElementById('input-imc2').value;
    alturaUsuario = parseFloat(alturaUsuario);


//Asignacion de la funcion flecha para capturar datos
const CalculoDeImc = (pesoParametro, alturaParametro) =>{
    alturaParametro = alturaParametro/100;
    alturaParametro = Math.pow(alturaParametro, 2);
    let resultado = pesoParametro/alturaParametro;
    return resultado;
};

let indiceFinal = CalculoDeImc(pesoDeUsuario, alturaUsuario);


alert("Su índice de masa es de: " + indiceFinal);


//Asignacion de la funcion flecha para el cálculo de peso / altura^2
const CalculoDeSalud = gradoDeObesidad =>{ //Se omiten los paréntesis

    gradoDeObesidad = parseFloat(gradoDeObesidad);

    switch (true) {
        case gradoDeObesidad>=1 && gradoDeObesidad<=14:
            return "Usted tiene delgadez muy severa";

        case gradoDeObesidad>=15 && gradoDeObesidad<=15.9:
            return "Usted tiene delgadez severa";

        case gradoDeObesidad>=16 && gradoDeObesidad<=18.4:
            return "Usted tiene delgadez";
        
        case gradoDeObesidad>=18.5 && gradoDeObesidad<=24.9:
            return "Usted tiene peso saludable";
        
        case gradoDeObesidad>=25 && gradoDeObesidad<=29.9:
            return "Usted tiene sobrepeso";
        
        case gradoDeObesidad>=30 && gradoDeObesidad<=34.9:
            return "Usted tiene obesidad moderada";
        
        case gradoDeObesidad>=35 && gradoDeObesidad<=39.9:
            return "Usted tiene obesidad severa";

        case gradoDeObesidad>=40:
            return "Usted tiene obssidad muy severa";
    }
};
    alert(CalculoDeSalud(indiceFinal));
}

alert(funcionPrincipal());

























// //Llamada a la función flecha y mensaje sobre tu salud en cuestion de peso, su rango.
// // alert(CalculoDeSalud(indiceFinal));