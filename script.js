const textarea = document.querySelector("textarea");
const totalCounter = document.getElementById("totalCounter");
const remainingCounter = document.getElementById("remainingCounter");

textarea.addEventListener("input", updateCounter); // 'keyup' yerine 'input' kullanımı

function updateCounter() {
  totalCounter.textContent = textarea.value.length;
  remainingCounter.textContent =
    textarea.getAttribute("maxlength") - textarea.value.length;
}

updateCounter();
