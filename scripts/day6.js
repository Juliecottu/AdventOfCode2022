console.log('--day 6-');

const url = 'https://127.0.0.1:8000/docs/fooldata.txt';

async function findSubroutine() {

  const response = await fetch(url),
    data = await response.text();

  const sub1 = checkPreviousChar(4);
  console.log(sub1, data.indexOf(sub1) + 4); // Part 1

  const sub2 = checkPreviousChar(14);
  console.log(sub2, data.indexOf(sub2) + 14); // Part 2 la substring, l'index de son premier caractère + la longueur attendue pour trouver l'index du dernier



  /**
   * Analyse la chaîne de N caractères précédant le caractère étudié
   * 
   * @param nbPreviousChar {number} the N previous characters (length)
   * @returns {string} the subRoutine String
   */
    function checkPreviousChar(nbPreviousChar) {
      for (let i = nbPreviousChar - 1; i < data.length; i++) {
        const studiedChar = data.charAt(i);

        // Construction string des nbPreviousChar caractères précédents
        let stringPreviousChar = '';
        for (let k = nbPreviousChar - 1; k >= 1; k--) {
          stringPreviousChar += data.charAt(i - k);
        }

        // Set de toutes les lettres de la string de nbPreviousChar caractères précédents
        let setPreviousChars = new Set();
        for(let j = 1; j < nbPreviousChar; j++) {
          setPreviousChars.add(data.charAt(i - j));
        }

        // Si setPreviousChars comporte bien nbPreviousChar caractères...
        if(setPreviousChars.size == nbPreviousChar - 1) {
          // Mais si elle comporte le caractère initial étudié, on continue
          if(setPreviousChars.has(studiedChar)) {
            continue;
          } else { // Sinon on renvoie l'ensemble de la string de nbPreviousChar + le caractère analysé
            return stringPreviousChar + studiedChar;
          }
        }

      }
    }
}

findSubroutine();
