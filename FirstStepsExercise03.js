function calculator(input) {

    depositsum = Number(input[0]);
    timefordeposit = Number(input[1]);
    yearlypercent = Number(input[2]) / 100;

    natrupanalihva = depositsum * yearlypercent;
    lihvaforonemonth = natrupanalihva / 12;
    fulsum = depositsum + (timefordeposit * lihvaforonemonth)

    console.log(fulsum)

}