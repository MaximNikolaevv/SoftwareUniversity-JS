function Vacation(input) {
    let goal = Number(input[0]);
    let currenMoney = Number(input[1]);

    let days = 0;
    let i = 1;
    let spendDays = 0;
    while (currenMoney > 0 || currenMoney < goal) {
        i++;
        let spendOrSave = String(input[i]);
        i++;
        let money = Number(input[i]);
        days++;
        if (spendOrSave === "spend") {
            currenMoney -= money;
            spendDays++;
            if (spendDays == 5) break;
        }
        else { currenMoney += money; spendDays = 0; }
    }
    if (currenMoney < goal) console.log(`You can't save the money.\n${days}`)
    else console.log(`You saved the money for ${days - 1} days.`)
}
