const bontonParalosNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-oper");
const botonIgual = document.getElementsByName("data-igual") [0];
const botonBorrar = document.getElementsByName("data-borrar") [0];
var resul = document.getElementById("resultado");
var operaActual = "";
var operaAnterior = "";
var operacion = undefined;




bontonParalosNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);   
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectoperacion(boton.innerText);   
    })
});



botonIgual.addEventListener("click", function(){
  calcular();
  actualizarDisplay();
});


botonBorrar.addEventListener("click", function(){
    clear();
    actualizarDisplay();
  });

 function agregarNumero(num){
     operaActual = operaActual.toString() + num.toString();
     actualizarDisplay();
 } 

function selectoperacion(op)
{
    if(operaActual === "") return;
    if(operaAnterior !== "")
    calcular()
    {
        operacion = op.toString();
        operaAnterior = operaActual;
        operaActual = "";
    }
}

   
  function calcular(){
      var calculo;
      const anterior = parseFloat(operaAnterior);
      const actual = parseFloat (operaActual);
      if(isNaN(anterior)  || isNaN(actual)) return;
      switch(operacion) {
          case "+": 
               calculo = anterior + actual;
               break;
           case "-":
                calculo = anterior - actual;
                break;
            case "x":
                calculo = anterior * actual;
                break;
            case "/":
                calculo = anterior / actual;
                break;
            default:
                return;
      }
      operaActual = calculo;
      operacion = undefined;
      operaAnterior = "";
  }


  function clear(){
      operaActual = "";
      operaAnterior ="";
      operacion = undefined;
  }

 function actualizarDisplay()
 {
     resul.value = operaActual;
 }

 clear();

// echo por Cristian Ramirez 
// holi 
