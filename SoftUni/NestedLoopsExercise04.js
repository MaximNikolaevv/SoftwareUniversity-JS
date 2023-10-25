function trainthetrainers(input) {

    let index = 0;

    let gradecount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalsum = 0;
    let presentationcount = 0;

    while (command !== "Finish") {

        let presenatationname = command;
        let allgrades = 0;

        for (let curgrade = 1; curgrade <= gradecount; curgrade++) {

            grades = Number(input[index]);
            index++;

            allgrades = allgrades + grades;

        }


        let avgGrade = allgrades / gradecount;

        console.log(`${presenatationname} - ${avgGrade.toFixed(2)}.`)

        command = input[index];
        index++;

        totalsum = totalsum + avgGrade;
        presentationcount++;


    }

    let totalavgsum = totalsum / presentationcount;

    console.log(`Student's final assessment is ${totalavgsum.toFixed(2)}.`)


}