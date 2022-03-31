
// class para hacer los calculos de los costos de una transferencia 
class CostoTransferencia {
    constructor() {
        this.modeloAno = parseFloat($("#anio").val());
        this.precioAuto = parseFloat($("#precio").val());
        this.cantidadFirmas = parseFloat($("#firmas").val());
        this.cantidadCedulas = parseFloat($("#cedulas").val());
        this.totalTransferencia = 0
    }
    // funcion del calculo del sellado(impuesto)
    calcularSellado() {
        let sellado = this.precioAuto * 3 / 100;
        if (this.modeloAno >= 1990) {
            return sellado;
        }
        else {
            return 0
        }
    }
    // calculo del arancel // arancel minimo 
    calcularArancel() {
        let arancel = this.precioAuto * 2.5 / 100;
        let arancelMinimo = 2500
        if (arancel > arancelMinimo) {
            return arancel;
        } return arancelMinimo
    }
    // calculo precio de firmas 
    calcularFirmas() {
        let precioFirmas = this.cantidadFirmas * 620;
        return precioFirmas
    }
    // calculo precio de cedulas 
    calcularCedulas() {
        let precioCedulas = this.cantidadCedulas * 780;
        return precioCedulas
    }
    //calculo del costo total 
    calcularTotal() {
        this.totalTransferencia = (this.calcularSellado() + this.calcularFirmas() + this.calcularCedulas() + this.calcularArancel()).toFixed(2);

        return this.totalTransferencia;
    }
    // muesta del resultado total en dos tablas con una animacion 
    mostrarCosto(base) {
        $("#total").empty();
        $("#total").append(`
                            <p class="parrafoVerde rounded shadow-lg fw-bold">${base.nombre} Gracias por usar nuestro simulador.</p>

                            <h2 class="text-center fw-bold border-2 mb-1 text-light ">Datos del Vehiculo </h2>

                            <table class="table table-sm text-center">
                            <thead>
                            <tr>
                                <th scope="col" class="bg-primary text-light">marca</th>
                                <th scope="col" class="bg-primary text-light">modelo</th>
                                <th scope="col" class="bg-primary text-light">año</th>
                                <th scope="col" class="bg-primary text-light">precio</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="table-info fw-bold">${base.marca.toUpperCase()}</td>
                                <td class="table-info fw-bold">${base.modelo.toUpperCase()}</td>
                                <td class="table-info fw-bold">${this.modeloAno}</td>
                                <td class="table-info fw-bold">$ ${this.precioAuto}</td>
                            </tr>
                            </tbody>
                            </table>

                            <h2 class="text-center fw-bold border-2 mb-1 text-light "> Presupuesto  </h2>
                            <table class="table table-sm table-dark text-center">
                            <thead>
                            <tr>
                                <th scope="col">Concepto </th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio/indice</th>
                                <th scope="col">Final</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">Arancel</th>
                                <td >1</td>
                                <td >2.5 %</td>
                                <td class="fw-bold">$ ${(this.calcularArancel()).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Firmas</th>
                                <td>${this.cantidadFirmas}</td>
                                <td>620</td>
                                <td class="fw-bold">$ ${this.calcularFirmas()}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cedulas</th>
                                <td>${this.cantidadCedulas}</td>
                                <td>780</td>
                                <td class="fw-bold">$ ${this.calcularCedulas()}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sellado</th>
                                <td>1</td>
                                <td>3 %</td>
                                <td class="fw-bold">$ ${this.calcularSellado()}</td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="3"> TOTAL</th>
                                <td class="fw-bold">$ ${this.totalTransferencia}</td>
                            </tr>
                            </tbody>
                        </table>`).fadeOut(1000, () => $("#total").fadeIn(1000))
    }
}

export default CostoTransferencia