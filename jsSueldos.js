function calcularSueldo(){
    let sueldo= parseFloat(document.getElementById("sueldo").value);
    let venta1= parseFloat(document.getElementById("venta1").value);
    let venta2= parseFloat(document.getElementById("venta2").value);
    let venta3= parseFloat(document.getElementById("venta3").value);
    let total= (venta3*0.1)+(venta2*0.1)+(venta1*0.1)+sueldo;

    if(venta1<0 || venta2<0 || venta3<0 || sueldo<0){
    document.getElementById("resultado").innerText="Ingresa un numero mayor o igual a cero."
    }else{
    document.getElementById("resultado").innerText="El total recibido es de: $"+total;

    }

} 