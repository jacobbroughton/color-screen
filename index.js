const colorWindow = document.querySelector(".color-window");

const colorInput1 = document.getElementById("color-input-1");
const colorInput2 = document.getElementById("color-input-2");
const colorInput3 = document.getElementById("color-input-3");
const colorInput4 = document.getElementById("color-input-4");
const colorInput5 = document.getElementById("color-input-5");

const colorInputButton1 = document.getElementById("input-button-1");
const colorInputButton2 = document.getElementById("input-button-2");
const colorInputButton3 = document.getElementById("input-button-3");
const colorInputButton4 = document.getElementById("input-button-4");
const colorInputButton5 = document.getElementById("input-button-5");

let color = "#00ff00";
colorInput1.value = color;
colorInput2.value = color;
colorInput3.value = color;
colorInput4.value = color;
colorInput5.value = color;

refreshButtonColors(color)

colorInput1.addEventListener("change", (e) => handleColorChange(e));
colorInput2.addEventListener("change", (e) => handleColorChange(e));
colorInput3.addEventListener("change", (e) => handleColorChange(e));
colorInput4.addEventListener("change", (e) => handleColorChange(e));
colorInput5.addEventListener("change", (e) => handleColorChange(e));

colorInputButton1.addEventListener("click", () => handleColorButtonClick(1));
colorInputButton2.addEventListener("click", () => handleColorButtonClick(2));
colorInputButton3.addEventListener("click", () => handleColorButtonClick(3));
colorInputButton4.addEventListener("click", () => handleColorButtonClick(4));
colorInputButton5.addEventListener("click", () => handleColorButtonClick(5));

function handleColorChange(e) {
  color = e.target.value;
  colorWindow.style.backgroundColor = color;

  refreshButtonColors(color);
}

function handleColorButtonClick(buttonNum) {
  switch (buttonNum) {
    case 1: {
      console.log("wassup");
      colorInput1.click();
      break;
    }
    case 2: {
      colorInput2.click();
      break;
    }
    case 3: {
      colorInput3.click();
      break;
    }
    case 4: {
      colorInput4.click();
      break;
    }
    case 5: {
      colorInput5.click();
      break;
    }
  }
}

function refreshButtonColors(newColor) {
  colorInputButton1.style.backgroundColor = newColor;
  colorInputButton2.style.backgroundColor = newColor;
  colorInputButton3.style.backgroundColor = newColor;
  colorInputButton4.style.backgroundColor = newColor;
  colorInputButton5.style.backgroundColor = newColor;
}
