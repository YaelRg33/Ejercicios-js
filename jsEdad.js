function Edad(){
    const fechaActual=new Date();
    const añoActual= fechaActual.getFullYear();

    let nacimiento= parseFloat(document.getElementById("nacimiento").value);

   edad= añoActual-nacimiento;

    if(nacimiento<0){
        document.getElementById("resultado").innerText="Ingresa un valor positivo o cero."

    }else{
        document.getElementById("resultado").innerText=`Tu edad es de: ${edad} años.`
    }
}