  // class de Usuarios para crear una base de datos en local con los datos del vehiculo
  
  class Usuario {
    constructor() {
      this.nombre = $("#nombre").val();
      this.marca = $("#marca").val();
      this.modelo = $("#modelo").val();

    }
    // funcion que crea base de datos en localstorage
    crearBase(usuario) {
      localStorage.setItem("Base De Datos", JSON.stringify(usuario))
    }
    // recuperamos los datos para mostrarlos despues en el resultado total 
    traerDatosLocal() {
      let recuperarBase = localStorage.getItem("Base De Datos");
      // RECUPERAR BASE POR PARSE 
      let baseParse = JSON.parse(recuperarBase);
      return baseParse;
    }
}
export default Usuario