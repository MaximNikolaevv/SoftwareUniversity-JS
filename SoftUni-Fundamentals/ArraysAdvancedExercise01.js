function Train(arr) {

    let WagonsWithPassengers = arr[0].split(" ").map(Number);
    let MaximumCapacity = Number(arr[1]);
    let peopleOnWagon = 0;

    for (let i = 2; i <= arr.length - 1; i++) {
        let AddOrNoPassengers = arr[i];
        AddOrNoPassengers = AddOrNoPassengers.split(" ");

        if (AddOrNoPassengers.length == 2) {
            WagonsWithPassengers.push(Number(AddOrNoPassengers[1]));

        } else if (AddOrNoPassengers.length == 1) {
            AddOrNoPassengers = Number(AddOrNoPassengers);
            for (let i = 0; i <= WagonsWithPassengers.length - 1; i++) {

                if (AddOrNoPassengers + WagonsWithPassengers[i] <= MaximumCapacity) {
                    WagonsWithPassengers[i] = WagonsWithPassengers[i] + AddOrNoPassengers;
                    break;
                }

            }

        }
    }

    console.log(WagonsWithPassengers.join(" "));

}