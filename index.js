function input(value) {
  if (document.getElementById("count").value == "0" || document.getElementById("count").value == "Syntax error") {
    document.getElementById("count").value = value;
  } else {
    document.getElementById("count").value += value;
  }
}

function clearView() {
  document.getElementById("count").value = "0";
}

function calcular() {
    try {
        let value=eval(document.getElementById("count").value)
        if (Number.isInteger(value)){
            document.getElementById("count").value=value
        } else{document.getElementById("count").value=value.toFixed(2)}
        
    } catch (error) {
        document.getElementById("count").value='Syntax error'
    }
}
