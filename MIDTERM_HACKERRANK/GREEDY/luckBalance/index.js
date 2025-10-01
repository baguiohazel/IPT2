function luckBalance(k, contests) {
    let luck = 0;
    let important = [];

    for (let [l, t] of contests) {
        if (t === 0) {
            luck += l; // Always lose unimportant
        } else {
            important.push(l); // Store important contest luck
        }
    }

    // Sort important contests by luck descending
    important.sort((a, b) => b - a);

    // Lose top k important contests
    for (let i = 0; i < important.length; i++) {
        if (i < k) {
            luck += important[i];
        } else {
            luck -= important[i];
        }
    }

    return luck;
}
