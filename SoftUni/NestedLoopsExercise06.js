function movietickets(input) {

    let index = 0;

    let command = input[index];
    index++;

    let standardticketType = 0;
    let studentticketType = 0;
    let kidticketType = 0;
    let spacestaken = 0;

    while (command !== "Finish") {
        let movies = command;

        let freespaces = Number(input[index]);
        index++;

        let command1 = (input[index]);
        index++;

        let spacestaken = 0;

        while (command1 !== "End") {
            let ticketType = command1;

            if (ticketType === "standard") {
                standardticketType++;
            } else if (ticketType === "student") {
                studentticketType++;
            } else {
                kidticketType++;
            }



            spacestaken++;

            if (spacestaken === freespaces) {
                break;
            }

            command1 = input[index];
            index++;
        }

        let fullpercent = (spacestaken / freespaces) * 100;
        console.log(`${movies} - ${fullpercent.toFixed(2)}% full.`)

        command = input[index];
        index++
    }

    let totaltickets = standardticketType + studentticketType + kidticketType;
    console.log(`Total tickets: ${totaltickets}`)

    let studenticketpercent = (studentticketType / totaltickets) * 100;
    let standardicketpercent = (standardticketType / totaltickets) * 100;
    let kidticketpercent = (kidticketType / totaltickets) * 100;


    console.log(`${studenticketpercent.toFixed(2)}% student tickets.`)
    console.log(`${standardicketpercent.toFixed(2)}% standard tickets.`)
    console.log(`${kidticketpercent.toFixed(2)}% kids tickets.`)



}