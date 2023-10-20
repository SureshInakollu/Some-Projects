let colorPickerContainer = document.getElementById("colorPickerContainer");
//console.log(colorPickerContainer);
let selectedColorHexCode = document.getElementById("selectedColorHexCode");
//console.log(selectedColorHexCode);
function changeBgToGreyAndUpdate() {
    selectedColorHexCode.textContent = "#e0e0e0";
    colorPickerContainer.style.backgroundColor = "#e0e0e0"
}
function changeBgToGreenAndUpdate() {
    selectedColorHexCode.textContent = "#6fcf97";
    colorPickerContainer.style.backgroundColor = "#6fcf97"
}
function changeBgToBlueAndUpdate() {
    selectedColorHexCode.textContent = "#56ccf2";
    colorPickerContainer.style.backgroundColor = "#56ccf2"
}
function changeBgToPurpleAndUpdate() {
    selectedColorHexCode.textContent = "#bb6bd9";
    colorPickerContainer.style.backgroundColor = "#bb6bd9"
}
