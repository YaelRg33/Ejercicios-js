function calificacion(){

   let parcial1= parseFloat(document.getElementById("parcial1").value);
   let parcial2= parseFloat(document.getElementById("parcial2").value);
   let parcial3= parseFloat(document.getElementById("parcial3").value);
   let examen= parseFloat(document.getElementById("examen").value);
   let tfinal= parseFloat(document.getElementById("tfinal").value);

   let parciales= (parcial1+parcial2+parcial3)/3;
    
   let calfinal= (parciales*0.55)+(examen*0.3)+(tfinal*0.15);

   if(parcial1<0||parcial2<0||parcial3<0||examen<0||tfinal<0){
document.getElementById("resultado").innerText="Ingresa un valor igual o mayor a cero."

   }else{
    document.getElementById("resultado").innerText="La calificacion final es de: "+calfinal;
   }
}