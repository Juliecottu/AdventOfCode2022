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

  for(let column of forestColumns) {
    let columnCopy = column;
    console.log(column);
    // const highestValueInThatColumn = column.sort().reverse().shift();
    // console.log(highestValueInThatColumn);
  }






}

calculateFolderSize();
