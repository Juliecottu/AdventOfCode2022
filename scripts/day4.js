console.log("--day 4-");

const url = 'https://127.0.0.1:8000/docs/day4.txt';


async function clearSections() {

  const response = await fetch(url),
        data = await response.text(),
        elfPairs = await data.split('\n');

  // Part 1
  let nbOfFullyContains = 0;

  for(let pair of elfPairs) {

    let teamArray = [] // Tableau des paires d'elfes
    const teamOfTwo = pair.split(',');
    for(let member of teamOfTwo) {
      const elfSections = member.split('-');
      let serie = '';
      
      for(let i = Number(elfSections[0]); i <= Number(elfSections[1]); i++) {
        serie += i+".";
      }
      teamArray.push(serie);

    }
    
    if(teamArray[0].includes(teamArray[1]) || teamArray[1].includes(teamArray[0])) {
      nbOfFullyContains++;
    } ;

    console.group();
    console.log(teamOfTwo);
    // console.log(teamArray);
    // console.log(nbOfFullyContains);
    console.log(teamArray[0].includes(teamArray[1]) || teamArray[1].includes(teamArray[0]));
    console.groupEnd();
  }
  console.log(nbOfFullyContains);
 

}

clearSections();
