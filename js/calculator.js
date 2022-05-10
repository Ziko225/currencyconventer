{  // _________________________________Calculator_________________________________

    const onFormSumbit = () => {
        const input = document.querySelector(".js-input");
        const selectFrom = document.querySelector(".js-selectFrom");
        const selectTo = document.querySelector(".js-selectTo");
        calcResult(input, selectFrom, selectTo);
    };

    const calcResult = (input, selectFrom, selectTo) => {
        const ammount = input.value;
        const currencyFrom = selectFrom.value;
        const currencyTo = selectTo.value;

        let result = (ammount * currencyFrom) / currencyTo;

        corrector(result, currencyFrom, currencyTo);
    };

    const corrector = (result, currencyFrom, currencyTo) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.value = result.toFixed(2);
        
        result < 0 ? resultElement.value = "N/A" : resultElement.value;
        currencyFrom === currencyTo ? resultElement.value = "same currency detected" : resultElement.value;
    }

    const init = () => {
        formElement = document.querySelector(".article__form");
        formElement.addEventListener("input", onFormSumbit);
    };

    init()
} // _________________________________Calculator_________________________________
