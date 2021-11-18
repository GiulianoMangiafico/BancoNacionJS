//Calculadora de intereses en plazo fijo
function plazoFijo() {
  /*let plataIngresada = prompt("Ingrese cantidad de dinero deseada: ");
  let cantidadPlata = parseInt(plataIngresada);
  let diasDepositados = prompt("Ingrese cantidad de dias que desea depositar");
  */
  $(".entry").append('<form action="javascript:void(0);" id="entradasPlazo">Ingrese lo solicitado: <br><input type="number" name="inputsEntradas" id="entradaDinero" placeholder="Dinero a depositar"><br><input type="number" name="inputsEntradas" id="entradaDias" placeholder="Dias a depositar"><button type="submit" form="entradasPlazo" class="btn btn-send btn-block">Enviar</button></form>')
  $("#entradasPlazo").on('submit', data => {
    let ingresoDinero = data.target[0].value
    let ingresoDias = data.target[1].value
    if (ingresoDinero && ingresoDias) {

      //Dado que en un plazo fijo si ingresas más de 1M se reduce la cantidad de interes podemos aplicar if else
      let interesGanado = 0;
      if (ingresoDinero <= 1000000) {
        interesGanado = ((ingresoDinero * 0.37) / 365) * ingresoDias;
      } else {
        interesGanado = ((ingresoDinero * 0.34) / 365) * ingresoDias;
      }
      //Hacemos una funcion para definir cuanto es el total
      function Calculo(plata, interes) {
        this.plata = plata;
        this.interes = interes;
        this.total = plata + interes;
        this.totalGanado = function mostrar() {
          let mostrarTotal = document.createElement("div")
          mostrarTotal.innerHTML = "Da un total ganado de: " + this.total
          document.body.appendChild(mostrarTotal)
        };
      }
      const totalFinal = new Calculo(ingresoDinero, interesGanado);
      function ingresos() {
        let mostrarIngresos = document.createElement("div")
        mostrarIngresos.innerHTML = "El capital " +
          ingresoDinero +
          " en el plazo de " +
          ingresoDias +
          " dias con una ganancia de interes de " +
          interesGanado
        document.body.append(mostrarIngresos)
      };
      ingresos();
      totalFinal.totalGanado();
    }
  })
}
