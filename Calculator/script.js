// 1. Select the calculator screen from HTML
const displayInput = document.getElementById("display");

// 2.  clicked number or operator to the screen
function displaynumber(val) {
  displayInput.value += val;
}

// 3. Clear the whole screen (AC)
function clearDisplay() {
  displayInput.value = "";
}

// 4. Delete the last character (DEL)
function del() {
  displayInput.value = displayInput.value.slice(0, -1);
}

// 5. Calculate the result (=)
function calculate() {
  try {
    displayInput.value = eval(displayInput.value);
  } catch (error) {
    displayInput.value = "Error";
  }
}