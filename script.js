const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["*", "/", "-", "=", "+"];
let output = "";
const calculate = (btnValue) => {
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace(".", ""));
  } else if (btnValue === "C") {
    output = "";
  } else if (btnValue === "<-") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChar.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
