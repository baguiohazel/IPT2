function hackerrankInString(s) {
    const target = "hackerrank";
    let q = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === target[q]) {
            q++;
        }
        if (q === target.length) {
            return "YES";
        }
    }
    return "NO";
}