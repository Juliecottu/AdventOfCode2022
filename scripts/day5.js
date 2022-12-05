console.log("--day 5-");

const url = 'https://127.0.0.1:8000/docs/day5.txt';


async function moveCrates() {

  const response = await fetch(url),
    data = await response.text(),
    moves = await data.split('\n');

  /*
        [Q] [B]         [H]
    [F] [W] [D] [Q]     [S]
    [D] [C] [N] [S] [G] [F]
    [R] [D] [L] [C] [N] [Q]     [R]
[V] [W] [L] [M] [P] [S] [M]     [M]
[J] [B] [F] [P] [B] [B] [P] [F] [F]
[B] [V] [G] [J] [N] [D] [B] [L] [V]
[D] [P] [R] [W] [H] [R] [Z] [W] [S]
 1   2   3   4   5   6   7   8   9
  */

  const initCrates = {
    1: ['V', 'J', 'B', 'D'],
    2: ['F', 'D', 'R', 'W', 'B', 'V', 'P'],
    3: ['Q', 'W', 'C', 'D', 'L', 'F', 'G', 'R'],
    4: ['B', 'D', 'N', 'L', 'M', 'P', 'J', 'W'],
    5: ['Q', 'S', 'C', 'P', 'B', 'N', 'H'],
    6: ['G', 'N', 'S', 'B', 'D', 'R'],
    7: ['H', 'S', 'F', 'Q', 'M', 'P', 'B', 'Z'],
    8: ['F', 'L', 'W'],
    9: ['R', 'M', 'F', 'V', 'S'],
  };

  for(let move of moves) {
    const moveArray = move.split(' ');
    console.log(moveArray[1], moveArray[4], moveArray[6])
    doMove(moveArray[1], moveArray[4], moveArray[6]);
  }

  function* doMove(crates, startArray, finalArray) {
    const chunk = startArray.slice(crates);
    let newInitialArray = startArray.splice(0, crates);
    const newPile = chunk.concat(finalArray);

  }

}

moveCrates();
