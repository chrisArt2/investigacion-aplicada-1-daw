function ejemplo(){
    //Arreglo que posee los números a operar
    let nums = [1,2,3,4,5];
    //Variable contadora
    let i;
    
    document.write("<p class='ejemploPar'>Cadena de números a sumar: [");

    //Se imprimen los números según su orden en el arreglo
    for(i = 0; i < nums.length; i++){
        document.write(nums[i]);
        //validación para evitar que aparezca un coma en despúes del último número
        if(i<nums.length-1){
            document.write(", ");
        }
    }
    document.write("]");

    //Función encargada de sumar todos los números
    function suma(a,b,c,d,e){
        return a+b+c+d+e;
    }

    //Se imprimen los números, indicando que es una suma
    document.write("<br>Resultado: ");
    for(i = 0; i<nums.length ; i++ ){
        document.write(nums[i]);
        if(i<nums.length-1){
            document.write(" + ");
        }
    }
    //impresión del resultado de la suma
    /*El operador spread se encuentra acá (...nums)
    indica que le enviamos todos los valores del arreglo*/
document.write(" = "+suma(...nums)+"</p>");
}


//Función del segundo ejemplo
function ejemplo2(){
    //variables de entrada
    let nums = new Array;

    //variable contadora
    let i;

    //variable booleana para validación
    let f=false;

    //Primero se le solicitan los datos al usuario
        for(i=0;i<=2;i++){
            do{
                nums[i]=prompt("Escriba el "+(i+1)+"° número: ");
                if(isNaN(parseInt(nums[i]))){
                    f=false;
                }else{
                    f=true;
                }
            }while(f==false); 
        }

    //Funciones de salida
    promedio(...nums);
    
    //Se comparan los números para así ejecutar las funciones correspondientes
    if(nums[0] != nums[1] && nums[1] != nums[2] && nums[0] != nums[2]){
        mayor(...nums);
        menor(...nums);
    }else{
        iguales(...nums);
    }
}

//recibe todos los números del arreglo y calcula el promedio
function promedio(a,b,c){
    //constante que representa el tamaño del arreglo
    const NUMS_LENG = 3;

    /*variable de trabajo propia de la función
    además de que es el número que se imprimirá en pantalla*/
    let prom;
    
    prom = (parseInt(a)+parseInt(b)+parseInt(c))/NUMS_LENG;

    return alert("El promedio de los números ingresados es: "+prom);
}

//Función para calcular el número mayor
function mayor(a,b,c){
    //variable que se imprimirá en pantalla y es propia de esta función
    let max;

    if(a>b && a>c){
        max=a;
        return alert("El mayor de los número ingresados es: "+max);
    }else{
        if(b>a && b>c){
            max=b;
            return alert("El mayor de los número ingresados es: "+max);
        }else{
            if(c>a && c>b){
                max = c;
                return alert("El mayor de los número ingresados es: "+max);
            }else{
                max = 0;
            }
        }
    }
}

//Función para calcular el número menor
function menor(a,b,c){

    //variable de salida que es propia de esta función
    let min;
    if(a<b && a<c){
        min=a;
        return alert("El menor de los número ingresados es: "+min);
    }else{
        if(b<a && b<c){
            min=b;
            return alert("El menor de los número ingresados es: "+min);
        }else{
            if(c<a && c<b){
                min = c;
                return alert("El menor de los número ingresados es: "+min);
            }else{
                min = 0;
            }
        }
    }
}

//Función que calcula cuáles números son iguales y cuáles no
function iguales(a,b,c){
    if(a==b && b==c){
        return alert("Todos los números son iguales"); 
    }else{
        if(b==c){
            return alert("El segundo y tercer número son iguales ("+b+"), mientras que "+a+" es diferente"); 
        }else{
            if(c==a){
                return alert("El primer y tercer número son iguales ("+c+"), mientras que "+b+" es diferente"); 
            }else{
                if(a==b){
                    return alert("El primer y segundo número son iguales ("+a+"), mientras que "+c+" es diferente"); 
                }
            }
        }
    }
}