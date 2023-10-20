function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent =
      "Favor de llenar correctamente las casillas de número.";
  } else {
    if (operation === "add") {
      document.getElementById("result").textContent = `Resultado: ${
        num1 + num2
      }`;
    } else if (operation === "subtract") {
      document.getElementById("result").textContent = `Resultado: ${
        num1 - num2
      }`;
    } else if (operation === "multiply") {
      document.getElementById("result").textContent = `Resultado: ${
        num1 * num2
      }`;
    } else if (operation === "divide") {
      if (num2 === 0) {
        document.getElementById("result").textContent =
          "Resultado: No se puede dividir por 0";
      } else {
        document.getElementById("result").textContent = `Resultado: ${
          num1 / num2
        }`;
      }
    }
  }
}
