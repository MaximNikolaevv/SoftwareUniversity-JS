function exam(input) {

    let index = 0;

    let fullbadgrades = Number(input[index]);
    index++

    let nameofexercise = input[index];
    index++

    let grade = Number(input[index]);
    index++

    let badgrade = 0;

    let allgrades = 0;
    let allplusgrades = 0;

    let lastproblem = ""

    while (nameofexercise !== "Enough") {
        lastproblem = nameofexercise
        if (grade <= 4) {
            badgrade++;

        } if (badgrade === fullbadgrades) {
            console.log(`You need a break, ${badgrade} poor grades.`)
            break;
        }

        nameofexercise = input[index];
        index++

        allgrades++

        allplusgrades = allplusgrades + grade

        grade = Number(input[index])
        index++



    }

    if (fullbadgrades > badgrade) {

        let percentgrade = allplusgrades / allgrades;

        console.log(`Average score: ${percentgrade.toFixed(2)}`)
        console.log(`Number of problems: ${allgrades}`)
        console.log(`Last problem: ${lastproblem}`)

    }



}