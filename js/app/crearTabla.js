    
    // creamos la funcion para el boton #conceptos 

    export function crearTabla() {
        $("#tabla").empty();
        let localJson = './json/tablaPrecios.json'
        $.getJSON(localJson, function (response, status) {
          if (status == "success"){           
            $("#tabla").append(`
                              <table id="tablaConceptos" class=" table mt-2 text-center table-dark">
                              <thead>
                                <tr>
                                  <th scope="col">Nombre</th>
                                  <th scope="col">Concepto</th>
                                  <th scope="col">Precio/Indice</th>
                                </tr>
                              </thead>`)
            for (const e of response) {
              $("#tablaConceptos").append(`
                                <tbody>
                                  <tr class= "text-center">
                                    <td>${e.nombre}</td>
                                    <td>${e.concepto}</td>
                                    <td>${e.precio}</td>
                                  </tr>
                              </tbody>
                            </table>`)

            }
            $("#tabla").slideToggle("slow")

            
          }
        })
        // comprobamos si el boton dice "dejar de ver" para cambiar su texto por ver conceptos y hacerlo dinamico

        if($("#conceptos").text()==="dejar de ver"){

          $("#conceptos").text("ver conceptos");

        } else {

          $("#conceptos").text("dejar de ver");
          
        }
      }
    

