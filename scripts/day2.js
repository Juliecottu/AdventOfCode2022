console.log("--day 2--");

let url = 'https://127.0.0.1:8000/docs/day2.txt';
let response = fetch(url);

const values = {
  'Rock': 1,
  'Paper': 2,
  'Scissors': 3,
  'loses': 0,
  'draw': 3,
  'wins': 6,
  'X':'loses',
  'Y':'draw',
  'Z':'wins',
}

response
  .then(data => data.text())
  .then(data => {
    // console.log(data.replace(/ /g, 'Rock'));
    let newString = data.replace(/A|X/g, 'Rock');
    newString = newString.replace(/B|Y/g, 'Paper');
    newString = newString.replace(/C|Z/g, 'Scissors');
    let partTwoString = data.replace(/A/g, 'Rock');
    partTwoString = partTwoString.replace(/B/g, 'Paper');
    partTwoString = partTwoString.replace(/C/g, 'Scissors');
    // return newString;
    return partTwoString;
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
      let expectedScore = values[String(shapes[1])];
      let roundResult;


      // Part 1
/*       if(Math.abs(playerA - playerMe) > 1) {
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
      } */

      // scores.push([playerA, playerMe, roundResult]);
      // roundScore += roundResult;
      //shapeScore += playerMe;


      // Part 2
      roundScore += values[expectedScore];
      let playerMePartTwo;
      if(expectedScore === 'loses') {
        playerMePartTwo = playerA - 1;
        playerMePartTwo <= 0 ? playerMePartTwo = 3 : null;
      } else if (expectedScore === 'draw') {
        playerMePartTwo = playerA ;
      } else if(expectedScore === 'wins') {
        playerMePartTwo = playerA + 1;
        playerMePartTwo > 3 ? playerMePartTwo = 1 : null;
      }

      shapeScore += playerMePartTwo;


    }

    console.log(roundScore + shapeScore);
  })
;
