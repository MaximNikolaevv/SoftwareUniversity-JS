function TennisRanklist(input) {

    let TournamentsIN = Number(input[0]);
    let Points = Number(input[1]);
    let Allpointsgettin = 0;
    let pointsgettin = 0;
    let winner = 0;


    for (let i = 2; i <= input.length; i++) {
        let TypeInTheTournament = (input[i]);

        if (TypeInTheTournament == "W") {
            pointsgettin = pointsgettin + 2000;
            Allpointsgettin = pointsgettin + Points;
            winner++

        } else if (TypeInTheTournament == "F") {
            pointsgettin = pointsgettin + 1200;
            Allpointsgettin = pointsgettin + Points;

        } else if (TypeInTheTournament == "SF") {
            pointsgettin = pointsgettin + 720;
            Allpointsgettin = pointsgettin + Points;
        }

    }

    let AverageWinTournaments = (pointsgettin / TournamentsIN);

    WinningPerpercent = (winner / TournamentsIN) * 100;

    console.log(`Final points: ${Allpointsgettin}`);
    console.log(`Average points: ${Math.floor(AverageWinTournaments)}`)
    console.log(`${WinningPerpercent.toFixed(2)}%`)
}