let currentNumber = "";
let previousNumber = null;
let operator = null;
function getNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
  updateLabel();
}

function getOperator(op) {
  if (currentNumber !== "") {
    previousNumber = parseFloat(currentNumber);
    currentNumber = "";
    operator = op;
    updateLabel();
  }
}

function updateLabel() {
  let a = previousNumber ? previousNumber : ' ';
  let b = operator ? operator : ' ';
  let c = parseFloat(currentNumber) ? parseFloat(currentNumber) : ' ';
  document.getElementById("expression").innerText = a + " " + b + " " +  c;
}

function calculate() {
  if (previousNumber !== null && currentNumber !== "" && operator !== null) {
    let result = 0;
    switch (operator) {
      case "+":
        result = previousNumber + parseFloat(currentNumber);
        break;
      case "-":
        result = previousNumber - parseFloat(currentNumber);
        break;
      case "*":
        result = previousNumber * parseFloat(currentNumber);
        break;
      case "/":
        if (parseFloat(currentNumber) !== 0) {
          result = previousNumber / parseFloat(currentNumber);
        } else {
          result = "Division by zero";
        }
        break;
    }
    previousNumber = null;
    operator = null;
    currentNumber = result.toString();
    document.getElementById("result").value = currentNumber;
  }
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = null;
  operator = null;
  document.getElementById("result").value = "";
  document.getElementById("expression").innerText = " ";
}

function backSpace() {
  value = document.getElementById("result").value;
  value = document.getElementById("result").value = value.slice(0, -1);
  value = Number(value);
  currentNumber = "";
  document.getElementById("expression").innerText = " ";
  getNumber(value);
}


document.addEventListener("keydown", function (event) {

  const keyCode = event.keyCode;

  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 || keyCode <= 105) || (keyCode == 110) || (keyCode == 190)) {
    getNumber(event.key);
    event.preventDefault();
  } else {
    window.alert("Only Numbers are Allowed!");
    event.preventDefault();
  }
});