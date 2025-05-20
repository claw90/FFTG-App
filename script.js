// script.js

// Tonya Mode (Easter egg trigger)
function activateTonyaMode() {
  alert("Tonya has entered the chat 💅");
  document.body.style.background = "#000";
  document.body.style.color = "#ff69b4";
  document.querySelector('.logo').innerText = "✨ TONYA MODE ✨";
}

// Add event listener if button exists
document.addEventListener("DOMContentLoaded", function () {
  const tonyaButton = document.getElementById("tonya-btn");
  if (tonyaButton) {
    tonyaButton.addEventListener("click", activateTonyaMode);
  }
});
