{
    let formElement = document.querySelector(".article__form");
    
    formElement.addEventListener("input", () => {
        let inputA = document.querySelector(".js-inputA");
        let resultElement = document.querySelector(".result");
        let type1 = document.querySelector(".js-type1");
        let type2 = document.querySelector(".js-type2");
        let A = inputA.value;
        let B = type1.value;
        let C = type2.value;
        result = (A * B) / C;
        resultElement.value = result.toFixed(3)
    }); 
}
