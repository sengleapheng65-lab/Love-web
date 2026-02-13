const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const text = document.querySelector("h2");

document.addEventListener("pointermove", (e) => {
  const rect = noButton.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const distance = Math.hypot(
    e.clientX - buttonX,
    e.clientY - buttonY
  );

  const triggerDistance = 120; // how close before it runs

  if (distance < triggerDistance) {
    moveButton();
  }
});

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
