const colors=["green","red","rgba(133,122,200)",
"#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// get random num btween 0 ~ colors.length-1
function randomInt(min, max){
    let randomNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randomNum;
}
function generateRandomColor() {
    const randomNumber = randomInt(0, colors.length - 1);
    return colors[randomNumber]
}
btn.addEventListener('click', () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
})