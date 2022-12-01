console.log("--day 1--");

let url = 'https://127.0.0.1:8000/docs/day1.txt';
let response = fetch(url);

response
  .then(data => data.text())
  .then(string => string.split('\n\n'))
  .then(elves => {
    console.log(elves);
    let highestAmount = 0 ;
    for(let elf of elves ) {
      const elfCalo = elf.split('\n');
      
      let caloSum = elfCalo.reduce((acc, current) => acc + Number(current), 0);

      caloSum > highestAmount ? highestAmount =  caloSum : null;
     }

     console.log(highestAmount);
  })