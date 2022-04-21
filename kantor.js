{  // _________________________________Calculator_________________________________

    const onFormSumbit = () => {
        const input = document.querySelector(".js-input");
        const selectFrom = document.querySelector(".js-selectFrom");
        const selectTo = document.querySelector(".js-selectTo");
        CalcResult(input, selectFrom, selectTo)
    };

    const CalcResult = (input, selectFrom, selectTo, result,) => {
        const resultElement = document.querySelector(".js-result");

        const A = input.value;
        const B = selectFrom.value;
        const C = selectTo.value;
        result = (A * B) / C;
        resultElement.value = result.toFixed(2)

        if (result < 0) {
            resultElement.value = ""
        }
    };

    const init = () => {
        formElement = document.querySelector(".article__form");
        formElement.addEventListener("input", onFormSumbit);
    };
    
    init()
} // _________________________________Calculator_________________________________
