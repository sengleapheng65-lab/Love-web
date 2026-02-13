const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const text = document.querySelector("h2");

noButton.addEventListener("mouseover", function () {
  function getRandomNumber() {
    return Math.floor(Math.random() * 301);
  }

  noButton.style.left = getRandomNumber() + "px";
  noButton.style.top = getRandomNumber() + "px";
});

yesButton.onclick = () =>
  (text.innerText = "I LOVE YOU TOO O SML HOUY HOUY !🥰😘💖");
