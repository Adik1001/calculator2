function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  const expression = display.value;

  try {
    const result = eval(expression);
    display.value = result;
    addToHistory(expression + " = " + result);
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li); // most recent first
}
