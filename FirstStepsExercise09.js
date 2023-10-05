function swimmingpool(input) {

    let longsantimetres = Number(input[0]);
    let bigsantimetres = Number(input[1]);
    let highsantimetres = Number(input[2]);
    let percent = Number(input[3]);

    let bigaquarium = longsantimetres * bigsantimetres * highsantimetres;
    let biginlitres = bigaquarium / 1000;
    let neededlitres = (biginlitres * (1 - 0.17))

    console.log(neededlitres)
}