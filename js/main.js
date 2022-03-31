import { crearTabla } from "./app/crearTabla.js"
import { calculador } from "./app/calculador.js"


// BOTONES 

// BOTON PARA INTERACTUAR CON AJAX Y UN JSON LOCAL QUE MUESTRA LOS CONCEPTOS PRINCIPALES PARA HACER EL CALCULO DEL PRESUPUESTO ( UNA AYUDA PARA EL USUARIO )

$("#conceptos").click(crearTabla);

// BOTON CON EVENTO CALCULAR 

$("#boton").click(calculador);

// BOTON CON FUNCION PARA LIMPIAR EL RESULTADO 
  
$("#botonLimpiar").click(() => {$("#total").empty()})


