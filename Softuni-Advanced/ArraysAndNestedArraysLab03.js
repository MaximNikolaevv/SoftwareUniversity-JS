function SumForLastAndFirstDigit(arr) {

    let Sum = 0;

    SummIt(arr)

    function SummIt(arr) {

        Sum = Number(arr.shift()) + Number(arr.pop());

        console.log(Sum);
    }
}