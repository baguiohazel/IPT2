function icecreamParlor(m, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) { // start from i+1
            if (arr[i] + arr[j] === m) {
                return [i + 1, j + 1]; // return valid pair
            }
        }
    }
    return []; // safety return if nothing found
}
