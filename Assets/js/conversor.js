const divisasAJAX = "divisas.json"
//Conversor de divisas
function conversorDivisas() {
    //Hacemos que el usuario ingrese su dinero
    $(".entry").append('<form action="javascript:void(0);" id="entradasConversor">Ingrese su dinero en pesos: <input type="text" name="inputsEntradas" id="entradasDatos" placeholder="Ingrese aqui el número"><button type="submit" form="entradasConversor" class="btn btn-send btn-block">Enviar</button></form>')
    $("#entradasConversor").on('submit', data => {
        let ingresoDato = parseInt(data.target[0].value)
        if (ingresoDato) {
            conversion(ingresoDato)
        }
    })
}
function conversion(ingreso) {
    $.getJSON(divisasAJAX, function (data) {
        recorrido(data, ingreso);
    })
}
//Clase con las caracteristicas de divisa
class Divisa {
    constructor(moneda, ingreso, converter) {
        this.moneda = moneda
        this.ingreso = ingreso
        this.converter = parseInt(converter)
    }
    //Uso del dom para mostrar en output en el html
    listar() {
        let lista = document.createElement("li")
        lista.innerHTML = `${this.moneda}: ${(this.ingreso / this.converter).toFixed(2)}`;
        document.body.appendChild(lista)
    }
}
//funcion para multiplicar el input del usuario en las divisas correspondientes
function recorrido(divisasJson, inputUsuario) {
    divisasJson.forEach(divisa => {
        const nuevaDivisa = new Divisa(divisa.moneda, inputUsuario, divisa.valor);
        nuevaDivisa.listar();
    });
}