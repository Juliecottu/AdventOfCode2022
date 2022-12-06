console.log('--day 6-');

const url = 'https://127.0.0.1:8000/docs/day6.txt';

async function findSubroutine() {

  const response = await fetch(url),
    data = await response.text();

  const sub = checkThreePreviousChar(13);
  console.log(sub, data.indexOf(sub) + 14);

  /**
   *
   * @param i the studied character index
   * @returns {string} the subRoutine String
   */
    function checkThreePreviousChar(i) {
      for (let i = 13; i < data.length; i++) {
        const studiedChar = data.charAt(i),
          previousChars = `${data.charAt(i - 3)}${data.charAt(i - 2)}${data.charAt(i - 1)}`;

        let largePreviousChar = '';
        for (let k = 13; k >= 1; k--) {
          largePreviousChar += data.charAt(i - k);
        }

        let setPreviousChars = new Set();
        for(let j = 1; j < 14; j++) {
          setPreviousChars.add(data.charAt(i - j));
        }
        if(setPreviousChars.size == 13) {
          if(setPreviousChars.has(studiedChar)) {
            continue;
          } else {
            // return previousChars + studiedChar;
            return largePreviousChar + studiedChar;
          }
        }

      }
    }
}

findSubroutine();
