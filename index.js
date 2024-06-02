let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput")
let customButtonEl = document.getElementById("customButton")


function changeButton() {
    let bgValue = bgColorInputEl.value;
    let fontColorVal = fontColorInputEl.value;
    let fontSizeVal = fontSizeInputEl.value;
    let fontWeightVal = fontWeightInputEl.value;
    let paddingVal = paddingInputEl.value;
    let borderVal = borderRadiusInput.value;

    customButtonEl.style.backgroundColor = bgValue;
    customButtonEl.style.color = fontColorVal;
    customButtonEl.style.fontSize = fontSizeVal;
    customButtonEl.style.fontWeight = fontWeightVal;
    customButtonEl.style.padding = paddingVal;
    customButtonEl.style.borderRadius = borderVal
}