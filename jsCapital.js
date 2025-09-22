function calcularInversion() {
  let capital = parseFloat(document.getElementById("capital").value);
  let meses= parseFloat(document.getElementById("meses").value)
  let ganancia = capital * 0.02 * meses ;
  let total = capital + ganancia;
if(meses<=0 || capital<=0){
    document.getElementById("resultado").innerText="Ingresa un numero mayor a cero."
}else{
  document.getElementById("resultado").innerText = "Ganancia: " + ganancia + " Total: " + total;  
}
}
