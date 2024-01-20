function Names(arr) {

    const SortNames = arr.sort((a, b) => a.localeCompare(b));
    let Num = 1

    for (const CurrName of SortNames) {
        console.log(`${Num}.${CurrName}`);
        Num++
    }



}