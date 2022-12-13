let task = document.querySelector(".task");

let num1 = Math.round(Math.random() * (20 - 5) + 5);
let num2 = Math.round(Math.random() * (20 - 5) + 5);

task.textContent = num1 + '+' + num2;
function isEqual(ans) {
  if (num1 + num2 == ans) {
    return true;
  }
  return false;
}
