let val = document.querySelector("input");

let allClear = document.querySelector("#allClear");

allClear.addEventListener("click", () => {
  val.value = "";
});

let del = document.querySelector("#del");

del.addEventListener("click", () => {
  val.value = val.value.slice(0, -1);
});

let oddEven = document.querySelector("#oddEven");

oddEven.addEventListener("click", () => {
  if(val.value % 2 === 1) {
    val.value = "Odd";
  } else {
    val.value = "Even";
  }
});

val.addEventListener("keydown", function (e) {
  const allowedKeys = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    ".", "%", "/", "*", "-", "+",
    "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"
  ];

  if (!allowedKeys.includes(e.key)) {
    e.preventDefault(); // Block any unwanted key
  }
});

let numBtn = document.querySelectorAll(".numBtn");

numBtn.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent.trim();
    console.log("Button clicked:", value); // 🔍 Check what's actually being read
    val.value += value;
  });
});

let divide = document.querySelector("#devide");

devide.addEventListener("click", () => {
  val.value += "/";
});

let multiply = document.querySelector("#multiply");

multiply.addEventListener("click", () => {
  val.value += "*";
});

let minas = document.querySelector("#minas");

minas.addEventListener("click", () => {
  val.value += "-";
});

let plus = document.querySelector("#plus");

plus.addEventListener("click", () => {
  val.value += "+";
});

let result = document.querySelector("#result");

result.addEventListener("click", () => {
  try {
    
    val.value = eval(val.value);
    
  } catch {
    
    val.value = "Error";
    
  }

});

let percent = document.querySelector("#percent");

percent.addEventListener("click", () => {
  val.value += "/100";
});
