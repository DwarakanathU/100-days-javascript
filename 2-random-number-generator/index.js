const randNumber = document.querySelector(".count");
const buttonRand = document.querySelector(".rand");

buttonRand.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  randNumber.innerHTML = randomNumber;
});
