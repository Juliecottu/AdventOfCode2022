console.log('--day 8--');

const url = 'https://127.0.0.1:8000/docs/fooldata.txt';

async function calculateFolderSize() {

  const response = await fetch(url),
    data = await response.text(),
    forestRows = await data.split('\n');
  console.log("forestRows", forestRows);

  let forestRowLength ;
  let forestColumns = []; // Les arbres en colonne

  for(let row of forestRows) {
    forestRowLength = row.length;
    const highestValueInThatRow = row.split('').sort().reverse().shift();
  }

  for(let i = 0; i < forestRowLength; i++) {
    let column = []
    for(let row of forestRows) {

      let tree = row.split('')[i];
      column.push(tree);
    }
    forestColumns.push(column);
  }
  console.log("forestColumns", forestColumns);
  const forestColumnClone = forestColumns.slice(0);
  console.log("forestColumnsClone", forestColumnClone);


  for(let cloneColumn of forestColumnClone) {
    cloneColumn.sort();
    const topTree = cloneColumn[0],
          bottomTree = cloneColumn[cloneColumn.length - 1];
    console.log(cloneColumn);
          // highestValueInThatColumn = [...cloneColumn].sort().reverse().shift();
    console.log(topTree, bottomTree);
  }






}

calculateFolderSize();
