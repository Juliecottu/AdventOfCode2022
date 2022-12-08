console.log('--day 7-');

const url = 'https://127.0.0.1:8000/docs/day7.txt';

async function calculateFolderSize() {

  const response = await fetch(url),
    data = await response.text(),
    commandList = await data.split('\n');

    const container = document.getElementById("container");

let filesystemContent = document.createElement('div');
let content = '';

for(let command of commandList) {
  if(command.startsWith('$ cd ..')) {
    content += '</div>'
  } else if (command.startsWith('$ cd /')) {
    content += `<div data-maindir-id='filesystem' data-dir-id='filesystem' style='color:green; margin-left: 30px; border: 1px solid green;'>${command}`;
  } else if (command.startsWith('$ ls')) {
  } else if (command.startsWith('$ cd ')) {
    content += `<div data-dir-id='dir-${command.slice('5')}' style='color:red; margin-left:30px;'>${command}`;
  } else if (command.startsWith('dir')) {
  } else {
    content += `<div data-file-size='${command.split(' ')[0]}' style='color:black; margin-left:40px;'>${command}</div>`;
  }
}

filesystemContent.innerHTML = content;
container.append(filesystemContent);

let arrayOfAtMostTenThousand = [], 
    arrayOfAllDirectorySizes = [],
    arrayOfAtLeastThirtyThousand = [];

let directories = container.querySelectorAll('[data-dir-id]') ;
for(let directory of directories) {
  // Identification des sous-dossiers et ajout des parents
  if(directory.dataset.dirId != 'filesystem') {
    const parent = directory.parentNode;
    if(parent) {
      directory.dataset.dirId = `${parent.dataset.dirId}_${directory.dataset.dirId}`;
    }
  }

  const files = directory.querySelectorAll('[data-file-size]');
  let totalFileSizes = [];
  // Calcul des tailles des directories
  for (let file of files) {
    totalFileSizes.push(parseInt(file.dataset.fileSize));
  }
  let directorySize = totalFileSizes.reduce((accumulator, currentValue) => accumulator + currentValue);
  arrayOfAllDirectorySizes.push([directory.dataset.dirId, directorySize]);
  if(directorySize < 100000) {
    arrayOfAtMostTenThousand.push([directory.dataset.dirId, directorySize]);
  }
  if(directorySize > 30000000) {
    arrayOfAtLeastThirtyThousand.push([directory.dataset.dirId, directorySize]);
  }
}
// let sum = 0 ;
// for(let row of arrayOfAtMostTenThousand) {
//   sum += row[1];
// }
// console.log('sum', sum);

let sumForAll = 0 ;
for(let row of arrayOfAllDirectorySizes) {
  sumForAll += row[1];
}
const missingSpace = 30000000 - (70000000 - arrayOfAllDirectorySizes[0][1]);
let arrayOfEligibleFolders = [];
for(let directorySize of arrayOfAllDirectorySizes) {
  if(directorySize[1] >= missingSpace) {
    arrayOfEligibleFolders.push(directorySize[1]);
  }
}
console.log(arrayOfEligibleFolders.sort(function(a, b){return a-b}));

}

calculateFolderSize();
