const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const text = document.querySelector("h2");

noButton.addEventListener("pointerenter", moveButton);

function moveButton() {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}

yesButton.onclick = () =>
  (text.innerText = "I LOVE YOU TOO O SML HOUY HOUY !🥰😘💖");
