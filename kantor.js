{
    const formElement = document.querySelector(".article__form");
    const inputA = document.querySelector(".js-input");
    const resultElement = document.querySelector(".js-result");
    const type1 = document.querySelector(".js-selectFrom");
    const type2 = document.querySelector(".js-selectTo");

    formElement.addEventListener("input", () => {
        const A = inputA.value;
        const B = type1.value;
        const C = type2.value;
        result = (A * B) / C;
        resultElement.value = result.toFixed(2)
        if (result < 0) {
            resultElement.value = ""
        }
    });
}
