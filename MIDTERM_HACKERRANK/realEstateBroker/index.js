function realEstateBroker(clients, houses) {
        houses.sort((a, b) => a[0] - b[0]);
        clients.sort((a, b) => a[1] - b[1]);
        let count = 0;

  for (let ci = 0; ci < clients.length && houses.length; ci++) {
    const [area, price] = clients[ci];
    let l = 0;
    let r = houses.length;
    while (l < r) {
      const m = l + ((r - l) >>> 1);
      const houseArea = houses[m][0];
      // console.log({text: 'bef', area, price, l, r, m, houseArea})
      if (houseArea <= area) {
        l = m + 1;
      } else {
        r = m;
      }
      
    }
   
    for (let i = l; i < houses.length; i++) {
      const housePrice = houses[i][1];
      if (housePrice <= price) {
        count++;
        houses.splice(i, 1);
        break;
      }
    }
  }
  return count;
}

let num= []; 