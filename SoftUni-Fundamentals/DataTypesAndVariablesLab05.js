function AmazingNum(Num) {

    let NumAsString = Num.toString()
    let sum = 0;

    for (let i = 0; i < NumAsString.length; i++) {
        sum = sum + Number(NumAsString[i]);
    }

    let SumAsString = sum.toString();

    SumAsString.includes("9") ? console.log(`${Num} Amazing? True`) : console.log(`${Num} Amazing? False`)


}