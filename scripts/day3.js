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
      console.log(priority[1]);
      acc += priority[1];
    }
    // shortestList  =  itemsInFirst.size < itemsInSecond.size ? itemsInFirst : itemsInSecond;
  }
  console.log(acc);

}

getPriorities();
