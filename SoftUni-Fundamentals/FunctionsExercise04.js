function OddEvenSum(Num) {

    let even = 0;
    let odd = 0;
    let NumAsStr = String(Num);

    let Evensum = IsEven(Num);
    let Oddsum = IsOdd(Num);

    console.log(`Odd sum = ${Oddsum}, Even sum = ${Evensum}`);

    function IsEven(Num) {
        for (let i = 0; i <= NumAsStr.length - 1; i++) {
            let NumAsNum = Number(NumAsStr[i]);

            if (NumAsNum % 2 == 0) {
                even = even + NumAsNum;
            }

        }

        return even;

    }

    function IsOdd(Num) {

        for (let i = 0; i <= NumAsStr.length - 1; i++) {
            let NumAsNum = Number(NumAsStr[i]);

            if (NumAsNum % 2 != 0) {
                odd = odd + NumAsNum;
            }
        }
        return odd;
    }

}