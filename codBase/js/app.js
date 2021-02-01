var operandoa;
var operandob;
var operacion;

function init(){

    document.getElementById("on").addEventListener("click", resetear)
    document.getElementById("mas").addEventListener("click", suma)
    document.getElementById("menos").addEventListener("click", resta)
    document.getElementById("dividido").addEventListener("click", division)
    document.getElementById("por").addEventListener("click", multiplicacion)
    document.getElementById("sign").addEventListener("click", signo)
    document.getElementById("igual").addEventListener("click", igual)
    document.getElementById("raiz").addEventListener("click", raiz)
    var resultado = document.getElementById('display');

    function suma(){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    function igual(){
        operandob = resultado.textContent;
        resolver();
    }
    function resta(){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    function multiplicacion(){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    function division(){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    function signo(){
        operandoa = resultado.textContent;
        res = parseFloat(operandoa) * -1;
        resultado.textContent = res;
    }
    function raiz(){
        operandoa = resultado.textContent;
        res = Math.sqrt(operandoa);
        resultado.textContent = res;
    }
    function limpiar(){
        resultado.textContent = "";
    }
    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
        del();
    }
    function resolver(){
        var res = 0;
        switch(operacion){
          case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
      
          case "-":
              res = parseFloat(operandoa) - parseFloat(operandob);
              break;
      
          case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
      
          case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        }
        resetear();
        resultado.textContent = res;
    }
}

function setResult(value) {
    if(value.length == 8){
        return(alert("El limite de numeros es 8"));
    }
    document.getElementById('display').innerHTML = value;
}
function getResult() {
    return(document.getElementById('display').innerHTML);
}
function add(key){
    
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}
function del() { 
    setResult(0);
}