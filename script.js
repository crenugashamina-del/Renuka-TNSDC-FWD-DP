// Typing Effect
const texts = ["BCA Student", "Web Developer", "Tech Enthusiast", "Essay Writer"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  const currentText = texts[textIndex];
  if (charIndex < currentText.length) {
    document.getElementById("typing").innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  const currentText = texts[textIndex];
  if (charIndex > 0) {
    document.getElementById("typing").innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Profile Photo Upload Preview
function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function() {
    const output = document.getElementById('profile-preview');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
