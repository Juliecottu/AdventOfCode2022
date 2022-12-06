console.log("--day 5-");

const url = 'https://127.0.0.1:8000/docs/day5.txt';


async function moveCrates() {

  const response = await fetch(url),
    data = await response.text();


}

moveCrates();
