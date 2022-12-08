console.log('--day 7-');

const url = 'https://127.0.0.1:8000/docs/fooldata.txt';

async function calculateFolderSize() {

  const response = await fetch(url),
    data = await response.text(),
    commandList = await data.split('\n');

  console.log(commandList);
  let allCommands = [],
    allSizes = [];

  for(let command of commandList) {
    const commandChunked = command.split(' ');
    allCommands.push(commandChunked);
  }
  // console.log(allCommands);

  let dirIndexes = [];
  for (let [index, value] of commandList.entries()) {
    console.log(index, value);
    if(value === '$ ls') {
      dirIndexes.push(index - 1);
    }
  }
  console.log(dirIndexes);

  // Get all folders
  let startDirectory = dirIndexes[0];
  for(let i = 0; i <= dirIndexes.length; i++) {
    console.log(commandList[dirIndexes[i]]);
    startDirectory.push([i, commandList[dirIndexes[i]]);
    console.log(startDirectory[0][0]);
  }
  commandList.slice()


  // Récupère les sizes
  // for(let command of allCommands) {
  //   // console.log(command);
  //   const size = command[0];
  //   // console.log(Number(size));
  //   if(command[0] === '' ||  !isNaN(Number(size))) {
  //     allSizes.push(Number(size));
  //   }
  // }

}

calculateFolderSize();
