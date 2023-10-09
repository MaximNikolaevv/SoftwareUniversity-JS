function trekingmania(input) {

    let numofgrouptreking = Number(input[0]);
    let totalpepoleingroup = 0;

    let musala = 0;
    let Monblan = 0;
    let Kilimandzharo = 0;
    let K2 = 0;
    let Everest = 0;

    for (let i = 1; i < input.length; i++) {
        let peopleingroup = Number(input[i]);


        if (peopleingroup <= 5) {
            musala = musala + peopleingroup;

        } else if (peopleingroup >= 6 && peopleingroup <= 12) {
            Monblan = Monblan + peopleingroup;

        } else if (peopleingroup >= 12 && peopleingroup <= 25) {
            Kilimandzharo = Kilimandzharo + peopleingroup;

        } else if (peopleingroup >= 26 && peopleingroup <= 40) {
            K2 = K2 + peopleingroup;

        } else {
            Everest = Everest + peopleingroup;
        }
    }


    totalpepoleingroup = musala + Monblan + Kilimandzharo + K2 + Everest;

    let climbingmusala = (musala / totalpepoleingroup) * 100;
    let climbingmonblan = (Monblan / totalpepoleingroup) * 100;
    let climbingkilimandzharo = (Kilimandzharo / totalpepoleingroup) * 100;
    let climbingk2 = (K2 / totalpepoleingroup) * 100;
    let climbingeverest = (Everest / totalpepoleingroup) * 100;


    console.log(`${climbingmusala.toFixed(2)}%`)
    console.log(`${climbingmonblan.toFixed(2)}%`)
    console.log(`${climbingkilimandzharo.toFixed(2)}%`)
    console.log(`${climbingk2.toFixed(2)}%`)
    console.log(`${climbingeverest.toFixed(2)}%`)

}