console.log("--day 4-");

const url = 'https://127.0.0.1:8000/docs/day4.txt';


async function clearSections() {

  const response = await fetch(url),
        data = await response.text(),
        elfPairs = await data.split('\n');

  
  let nbOfFullyContains = 0;
  let onlyFalse = [];


  // Part 1
  for(let pair of elfPairs) {

    
    let teamArray = [] // Tableau des paires d'elfes
    const teamOfTwo = pair.split(',');
    for(let member of teamOfTwo) {
      const elfSections = member.split('-');
      let serie = '';
      
      for(let i = Number(elfSections[0]); i <= Number(elfSections[1]); i++) {
        serie += "."+i+".";
      }
      teamArray.push(serie);
    }
    
    if(teamArray[0].includes(teamArray[1]) || teamArray[1].includes(teamArray[0])) {
      nbOfFullyContains++;
    } else { 
      onlyFalse.push(teamOfTwo);
    };
  }
  // console.log(nbOfFullyContains);
  



  // Part 2
  let nbOfOverlap = 0;

  for(let newTeamOfTwo of onlyFalse) {
    let sectionsPerPair = new Set();

    let sectionAmount = 0;
    for(let member of newTeamOfTwo) {
      const elfSections = member.split('-');
      let serie = '';
      
      sectionAmount += elfSections[1] - elfSections[0] + 1;

      for(let i = Number(elfSections[0]); i <= Number(elfSections[1]); i++) {
        serie = i;
        sectionsPerPair.add(serie)
      }
    }
    if(sectionsPerPair.size < sectionAmount) {
      nbOfOverlap++;
    }
  }
  console.log(nbOfOverlap + nbOfFullyContains);
}

clearSections();
