function input(value) {
  if (document.getElementById("display").value == "0" || document.getElementById("display").value == "Syntax error") {
    document.getElementById("display").value = value;
  } else {
    document.getElementById("display").value += value;
  }
}

function clearView() {
  document.getElementById("display").value = "0";
}

function calcular() {
    try {
        let value=eval(document.getElementById("display").value)
        if (Number.isInteger(value)){
            document.getElementById("display").value=value
        } else{document.getElementById("display").value=value.toFixed(2)}
        
    } catch (error) {
        document.getElementById("display").value='Syntax error'
    }
}
