function utilidad(){
let salario= Number(document.getElementById("salario").value);
let anios= Number(document.getElementById("anios").value);
let total=0;
if(anios<0){
    document.getElementById("resultado").innerText="Ingresa un valor positivo."
}else{
if (anios < 1) {
        total = salario * 0.05;
    } else if (anios >= 1 && anios < 2) {
        total = salario * 0.07;
    } else if (anios >= 2 && anios < 5) {
        total = salario * 0.1;
    } else if (anios >= 5 && anios < 10) {
        total = salario * 0.15;
    } else {
        total = salario * 0.2;
    }
}  document.getElementById("resultado").innerText=`La utilidad es de: $${total}`;


}