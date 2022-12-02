console.log("--day 2--");

let url = 'https://127.0.0.1:8000/docs/day2.txt';
let response = fetch(url);

// const values = [
//   ['A', 1],
//   ['B', 2],
//   ['C', 3],
//   ['X', 1],
//   ['Y', 2],
//   ['Z', 3],
//   ['A > Me', 0],
//   ['A = Me', 3],
//   ['A < Me', 6],

// ];

const values = {
  'Rock': 1,
  'Paper': 2,
  'Scissors': 3,
  'loses': 0,
  'draw': 3,
  'wins': 6,
}

response
  .then(data => data.text())
  .then(data => {
    // console.log(data.replace(/ /g, 'Rock'));
    let newString = data.replace(/A|X/g, 'Rock');
    newString = newString.replace(/B|Y/g, 'Paper');
    newString = newString.replace(/C|Z/g, 'Scissors');
    return newString;
  })
  .then(data => data.split('\n'))
  .then(data => {
    let scores = [],
      roundScore = 0,
      shapeScore = 0;;

    for(let line of data) {

      const shapes = line.split(' '),
            playerA = values[String(shapes[0])], 
            playerMe = values[String(shapes[1])];
      let roundResult;


      if(Math.abs(playerA - playerMe) > 1) {
        if(playerA > playerMe) {
          roundResult = values['wins'];
        } else {
          roundResult = values['loses'];
        }
      } else if(Math.abs(playerA - playerMe) === 0) {
        roundResult = values['draw'] ;
      } else if(Math.abs(playerA - playerMe) === 1) {
          if(playerA > playerMe) { 
            roundResult = values['loses'];
          } else {
            roundResult = values['wins'];
          }
      }

      scores.push([playerA, playerMe, roundResult]);
      roundScore += roundResult;
      shapeScore += playerMe;

      // console.group();
      // console.log(shapes[0], shapes[1], roundResult);
      // console.log(roundScore, shapeScore);
      // console.groupEnd();
    }

    console.log(roundScore + shapeScore);
    console.log(scores);
  })
;
