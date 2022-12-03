console.log("--day 3--");

const url = 'https://127.0.0.1:8000/docs/day3.txt';


async function getPriorities() {

  const response = await fetch(url),
        data = await response.text(),
        rucksacks = await data.split('\n');

  // Priorities
  let itemPriorities = [];
  let i, j = 1;
  for (i = 97; i <= 122; i++) {
    itemPriorities.push([String.fromCharCode(i), j])
    j++;
  }
  for (i = 65; i <= 90; i++) {
    itemPriorities.push([String.fromCharCode(i), j])
    j++
  }
 
  // Part 1
  let acc = 0 ;
  for (let rucksack of rucksacks) {
    const compartment1 = rucksack.slice('0',rucksack.length/2),
          compartment2 = rucksack.slice(rucksack.length/2) ;

    let itemsInFirst  = new Set([...compartment1]),
        itemsInSecond  = new Set([...compartment2]);

    const sharedItem = new Set(
      [...itemsInFirst].filter(item => itemsInSecond.has(item))
    )
    for (let item of sharedItem) {
      const priority = itemPriorities.find(element => element[0] == item);
      acc += priority[1];
    }
  }
  // console.log(acc);

  // Part 2
  const numberOfElfTeam = rucksacks.length / 3;
  let k = 0;
  let decreasingRucksackArray = rucksacks,
      teams = [];

  while (k < numberOfElfTeam) {
    let arrayOfThree = [];
    for(let i = 0; i < 3; i++) {
      arrayOfThree.push(decreasingRucksackArray[0]);
      decreasingRucksackArray.shift();
    }
    teams.push(arrayOfThree);
    k++;
  }

  let acc2 = 0;
  for(let team of teams) {
    let firstElf  = new Set([...team[0]]),
        secondtElf = new Set([...team[1]]), 
        thirdElf = new Set([...team[2]]);

    const sharedItemsBetweenTwoFirsts = new Set(
            [...firstElf].filter(item => secondtElf.has(item))
          ),
          uniqueSharedItem = new Set(
            [...sharedItemsBetweenTwoFirsts].filter(item => thirdElf.has(item))
          );
    for (let item of uniqueSharedItem) {
      const priority = itemPriorities.find(element => element[0] == item);
      acc2 += priority[1];
    }
  }
  console.log(acc2);



  


}

getPriorities();
