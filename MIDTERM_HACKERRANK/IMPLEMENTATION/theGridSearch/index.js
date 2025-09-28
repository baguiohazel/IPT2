function gridSearch(G, P) {
    const R = G.length;
    const r = P.length;

    for (let i = 0; i <= R - r; i++) {
        const row = G[i];

        for (let j = 0; j <= row.length - P[0].length; j++) {
            let found = true;

            for (let k = 0; k < r; k++) {
                if (G[i + k].substr(j, P[k].length) !== P[k]) {
                    found = false;
                    break;
                }
            }

            if (found) return "YES";
        }
    }

    return "NO";
}