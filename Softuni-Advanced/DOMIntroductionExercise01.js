function subtract() {

    const Num1 = document.getElementById("firstNumber").value;

    const Num2 = document.getElementById("secondNumber").value;

    const result = document.getElementById("result")


    result.textContent = Number(Num1) - Number(Num2)

}