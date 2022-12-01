console.log("--day 1--");

let url = 'https://127.0.0.1:8000/docs/day1.txt';
let response = fetch(url);

response
  .then(data => data.text())
  .then(string => string.split('\n\n'))
  .then(elves => {
    let highestAmount = 0,
        caloArray = [] ;
    
    for(let elf of elves ) {
      const elfCalo = elf.split('\n');
      let caloSum = elfCalo.reduce((acc, current) => acc + Number(current), 0);
      caloArray.push(caloSum);
      caloSum > highestAmount ? highestAmount =  caloSum : null;
     }

     caloArray.sort(function(a, b) { return a - b });
     const topThree = caloArray.reverse().slice(0, 3),
     topThreeSum = topThree.reduce((acc, current) => acc + Number(current), 0) ;

     console.log(highestAmount, topThreeSum);
  });