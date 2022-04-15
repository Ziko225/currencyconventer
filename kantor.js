{
    const formElement = document.querySelector(".article__form");
    
    formElement.addEventListener("input", () => {
        const inputA = document.querySelector(".js-inputA");
        const resultElement = document.querySelector(".result");
        const type1 = document.querySelector(".js-type1");
        const type2 = document.querySelector(".js-type2");
        const A = inputA.value;
        const B = type1.value;
        const C = type2.value;
        result = (A * B) / C;
        resultElement.value = result.toFixed(3)
    }); 
}
