console.log("--day 1--");

let url = 'https://127.0.0.1:8000/docs/day1.txt';
let response = fetch(url);

response
  .then(data => data.text())
  .then(function(string) {
    let array = string.split('\n\n');
    console.log(array.length);
    // for(let elf )

  } );