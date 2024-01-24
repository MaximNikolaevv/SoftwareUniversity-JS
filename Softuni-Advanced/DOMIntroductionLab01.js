function calc() {

    const Num1 = document.getElementById("num1").value;

    const Num2 = document.getElementById("num2").value;

    const Sum = Number(Num1) + Number(Num2);

    document.getElementById("sum").value = Sum;

}