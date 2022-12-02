console.log("--day 2--");

let url = 'https://127.0.0.1:8001/docs/day2.txt';

async function f() {

  try {
    let response = await fetch(url);
    let data = await response.text();
    let array = data.split('\n');
    return array;
  } catch(err) {
    // attrape les erreurs à la fois dans fetch et response.json
    alert(err);
  }
}

let rawArray = f();
console.dir(rawArray);

// async function f() {
//
//   let promise = new Promise((resolve, reject) => {
//     // let response = fetch(url);
//
//     fetch(url)
//       .then(data => data.text())
//       .then(data => data.split('\n'))
//       .then(data => {
//         let scores = [];
//         for (let line of data) {
//           console.log(line[0]);
//           scores.push([line[0], line[2]]);
//         }
//       });
//   });
//
//   let result = await promise; // attendre que la promesse soit résolue (*)
//   console.log('eeee', result);
//
// }
//
// f();


// response
//   .then(data => data.text())
//   .then(data => data.split('\n'))
  // .then(data => {
  //   let playerA = [],
  //     playerMe = [];
  //   let scores = [];
  //   for(let line of data) {
  //     scores.push([line[0], line[2]]);
  //   }
  //   return scores;
  // })
// ;

// console.log(response);