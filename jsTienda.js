function calcularDescuento(){
let compra = parseFloat(document.getElementById("compra").value);
let total = compra-compra*0.15;
if(compra<=0){

    document,getElementById("resultado").innerText="Ingresa un numero mayor a cero."
}else{
    document.getElementById("resultado").innerText="El precio de la compra es de: $"+total;
}

}