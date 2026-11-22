
function calculate(operator) {
  const a = Number(document.getElementById("num1").value);
  const b = Number(document.getElementById("num2").value);

  if (
    document.getElementById("num1").value === "" ||
    document.getElementById("num2").value === ""
  ) {
    document.getElementById("result").textContent =
      "Please enter both numbers";
    return;
  }

  let answer;

  if (operator === "+") answer = a + b;
  if (operator === "-") answer = a - b;
  if (operator === "*") answer = a * b;

  if (operator === "/") {
    if (b === 0) {
      document.getElementById("result").textContent =
        "Cannot divide by zero";
      return;
    }
    answer = a / b;
  }

  document.getElementById("result").textContent =
    "Result: " + answer;
}
