const first = document.getElementById("first");
const second = document.getElementById("second");
const result = document.getElementById("result");

const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("doub");
const div = document.getElementById("div");
const mod = document.getElementById("mod");
const clr = document.getElementById("clr");





add.addEventListener("click", () => {

  let firstDigit = parseInt(first.value);
  let secondDigit = parseInt(second.value);
  let addition = firstDigit + secondDigit;

    result.innerHTML = addition;
 
});

sub.addEventListener("click", () => {
    let firstDigit = parseInt(first.value);
    let secondDigit = parseInt(second.value);
    let subs = firstDigit - secondDigit;
  
    result.innerHTML = subs;
});

mul.addEventListener("click", () => {
    let firstDigit = parseInt(first.value);
    let secondDigit = parseInt(second.value);
    let multiplication = firstDigit * secondDigit;
  
    result.innerHTML = multiplication;
});

div.addEventListener("click", () => {
    let firstDigit = parseInt(first.value);
    let secondDigit = parseInt(second.value);
    let division = firstDigit / secondDigit;
  
    result.innerHTML = division;
});
mod.addEventListener("click", () => {
    let firstDigit = parseInt(first.value);
    let secondDigit = parseInt(second.value);
    let moduls = firstDigit % secondDigit;
  
    result.innerHTML = moduls;
});
clr.addEventListener("click", () => {
    result.innerHTML = 0;
    
});
