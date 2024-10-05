/* ------- USING HEXADECIMAL VALUES ------- */

let colorBox = document.getElementById("color-box");
let btnColor = document.getElementById("change-color-btn");

function getRandomColor() {
  /* this represents the hexadecimal values to combine to get the colorcodes */
  let symbols = "0123456789ABCDEF";

  /*A hashtag to be added to each generated colorcode to match a hexadecimal color value */
  let color = "#";

  for (let index = 0; index < 6; index++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }

  /* Re-assigning the background color */
  colorBox.style.backgroundColor = color;

  /* For the color of the button text */
  btnColor.style.color = color;
}

btnColor.addEventListener("click", getRandomColor);
