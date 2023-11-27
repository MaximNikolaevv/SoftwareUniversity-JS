function BarIncome(arr) {
    let pattern = /%(?<Name>[A-Z][a-z]+)%([^|$%.])*<(?<product>[A-Z][a-z]+)>([^|$%.])*\|(?<count>\d+)\|([^|$%.0-9])*(?<price>\d+\.?\d*)\$/g;
    let TotalIncome = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentOrder = pattern.exec(arr[i]);

        while (currentOrder != null) {
            let { Name, product, count, price } = currentOrder.groups;


            if (Name && product && count && price) {
                let fullPrice = count * price;
                TotalIncome += fullPrice;

                console.log(`${Name}: ${product} - ${fullPrice.toFixed(2)}`);
            }

            currentOrder = pattern.exec(arr[i]);
        }
    }

    console.log(`Total income: ${TotalIncome.toFixed(2)}`);
}