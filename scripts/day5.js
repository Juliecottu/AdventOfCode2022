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

  let initCrates = [
    ['V', 'J', 'B', 'D'],
    ['F', 'D', 'R', 'W', 'B', 'V', 'P'],
    ['Q', 'W', 'C', 'D', 'L', 'F', 'G', 'R'],
    ['B', 'D', 'N', 'L', 'M', 'P', 'J', 'W'],
    ['Q', 'S', 'C', 'P', 'B', 'N', 'H'],
    ['G', 'N', 'S', 'B', 'D', 'R'],
    ['H', 'S', 'F', 'Q', 'M', 'P', 'B', 'Z'],
    ['F', 'L', 'W'],
    ['R', 'M', 'F', 'V', 'S'],
  ];

  // let initCrates = [
  //   ['N', 'Z'],
  //   ['D', 'C', 'M'],
  //   ['P']
  // ]

  for(let move of moves) {
    const moveArray = move.split(' ');
    doMove(Number(moveArray[1]), Number(moveArray[3]), Number(moveArray[5]));
  }

  let topCrates = '';
  for(let crateRow of initCrates) {
    topCrates += crateRow.shift();
  }
  console.log(topCrates);

  function doMove(crates, startArray, finalArray) {
    // const chunk = initCrates[startArray - 1].splice(0, crates).reverse(); // Part 1
    const chunk = initCrates[startArray - 1].splice(0, crates); // Part 2

    initCrates[finalArray - 1] = chunk.concat(initCrates[finalArray - 1]);
  }

}

moveCrates();
