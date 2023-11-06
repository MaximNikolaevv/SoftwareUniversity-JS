function TreasureHunt(ThingsInChest) {

    let loot = ThingsInChest[0].split("|");
    let leftItems = [];
    let ItemsLeft = [];
    let AllLoot = 0;
    let AllLength = 0;

    for (let i = 1; i <= ThingsInChest.length - 1; i++) {
        let IncomingThings = ThingsInChest[i].split(" ");

        if (IncomingThings == "Yohoho!") {
            continue;
        }

        if (IncomingThings[0] == "Loot") {
            for (let i = 1; i <= IncomingThings.length - 1; i++) {
                if (loot.includes(IncomingThings[i])) {
                    continue;
                } else {
                    loot.unshift(IncomingThings[i]);
                }
            }
        }


        if (IncomingThings[0] == "Drop") {
            let Num = Number(IncomingThings[1]);
            loot.push(loot[Num]);
            loot.splice(Num, 1);

        }


        if (IncomingThings[0] == "Steal") {
            let Num = Number(IncomingThings[1]);

            while (loot.length !== Num) {


                leftItems = loot.shift(loot[i]);

                ItemsLeft.push(leftItems);
            }

        }

    }

    console.log(loot.join(`, `));

    for (let things of ItemsLeft) {
        AllLength = AllLength + things.length;
        AllLoot++
    }

    let AverageTreasureGain = AllLength / AllLoot;

    if (AverageTreasureGain > 0) {
        console.log(`Average treasure gain: ${AverageTreasureGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.")
    }

}


//  Not fully right!