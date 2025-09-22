function pagos() {
  let horas = Number(document.getElementById("horas").value);
  let pagoHora = Number(document.getElementById("pago").value);
  let pagoTotal = 0;
if(horas<0||pagoHora<0){
    document.getElementById("resultado").innerText="Ingresa valores positivos."
}else{
  if (horas <= 40) {
    pagoTotal = horas * pagoHora;
  } else {
    let extras = horas - 40;
    if (extras <= 8) {
      pagoTotal = (40 * pagoHora) + (extras * pagoHora * 2);
    } else {
      pagoTotal = (40 * pagoHora) + (8 * pagoHora * 2) + ((extras - 8) * pagoHora * 3);
    }
  }

  document.getElementById("resultado").innerText = `Pago total: $ ${pagoTotal}`;
  }
}
