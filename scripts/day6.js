console.log('--day 6-');

const url = 'https://127.0.0.1:8000/docs/day6.txt';

async function findSubroutine() {

  const response = await fetch(url),
    data = await response.text();

  const sub = checkThreePreviousChar(3);
  console.log(sub, data.indexOf(sub) + 4);

  /**
   *
   * @param i the studied character index
   * @returns {string} the subRoutine String
   */
    function checkThreePreviousChar(i) {
      for (let i = 3; i < data.length; i++) {
        const studiedChar = data.charAt(i),
          previousChars = `${data.charAt(i - 3)}${data.charAt(i - 2)}${data.charAt(i - 1)}`;

        let setPreviousChars = new Set();
        for(let j = 1; j < 4; j++) {
          setPreviousChars.add(data.charAt(i - j));
        }
        if(setPreviousChars.size == 3) {
          if(setPreviousChars.has(studiedChar)) {
            continue;
          } else {
            return previousChars + studiedChar;
          }
        }

      }
    }
}

findSubroutine();
