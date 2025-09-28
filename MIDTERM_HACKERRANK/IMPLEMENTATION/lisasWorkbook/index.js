function workbook(n, k, arr) {
    let page = 1;
    let specialCount = 0;

    for (let i = 0; i < n; i++) {
        let problems = arr[i];

        for (let j = 1; j <= problems; j++) {
            if (j === page) {
                specialCount++;
            }

            if (j % k === 0 || j === problems) {
                page++;
            }
        }
    }

    return specialCount;
}
