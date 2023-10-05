function godzilla(input) {

    let budgetforfilm = Number(input[0])
    let numofstatist = Number(input[1])
    let priceforclothesforstatist = Number(input[2])

    let sumfordecor = budgetforfilm * 0.10
    let sumforclothes = numofstatist * priceforclothesforstatist

    if (numofstatist >= 150) {
        sumforclothes * 0.10;

        discount = sumforclothes * 0.10;
        sumforclothes = sumforclothes - discount
    }

    let sumforfilm = sumfordecor + sumforclothes
    let moneyneeded = sumforfilm - budgetforfilm
    let moneyleft = budgetforfilm - sumforfilm

    if (sumforfilm > budgetforfilm) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${moneyneeded.toFixed(2)} leva more.`)

    } else if (sumforfilm <= budgetforfilm) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyleft.toFixed(2)} leva left.`)
    }
}