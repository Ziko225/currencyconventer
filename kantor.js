let inputA = document.querySelector(".js-inputA");
let resultElement = document.querySelector(".result");
let formElement = document.querySelector(".article__form");
let type1 = document.querySelector(".js-type1");
let type2 = document.querySelector(".js-type2");

formElement.addEventListener("input", () => {
    let A = inputA.value;
    let B = type1.value;
    let C = type2.value;
    result = (A * B) / C;
    resultElement.value = result.toFixed(3)
}); 