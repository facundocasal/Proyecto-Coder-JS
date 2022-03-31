import Usuario from './usuario.js'
import CostoTransferencia from './costoTransferencia.js'


// creamos la funcion y class que se ejecutaran en el boton Calcular Costo
export function calculador() {
    
    const nuevaTrasnferencia = new CostoTransferencia;
    const nuevoUsuario = new Usuario;

    if (($("#nombre").val() != "") && ($("#modelo").val() != "") && ($("#anio").val() != "") && ($("#precio").val() != "")) {
      // creamos la base en local
      nuevoUsuario.crearBase(nuevoUsuario);

      // calculamos los costos de la transferencia 

      nuevaTrasnferencia.calcularTotal();
      // traemos los datos de local storage para poder mostrarlos despues 
      nuevaTrasnferencia.mostrarCosto(nuevoUsuario.traerDatosLocal());
    }
    else {
      // determinamos el error si no estan todos los casilleros completados del formulario agregando un P y una animacion para mostrarlo 
      $("#total").empty();
      $("#total").append(`<p class="rounded parrafoRojo fw-bold">debe completar todos los casilleros para poder ver su presupuesto </p>`).fadeOut("fast", () => $("#total").fadeIn("fast"))
    }
}