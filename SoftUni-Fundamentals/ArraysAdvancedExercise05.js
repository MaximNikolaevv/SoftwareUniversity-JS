function SortArray(arr) {

    arr = arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    arr = arr.sort((a, b) => a.length - b.length);

    console.log(arr.join("\n"));

}