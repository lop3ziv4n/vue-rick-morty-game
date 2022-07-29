const URL = "https://rickandmortyapi.com/api/character";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function fetchCharacter(url) {
    return await fetch(url)
        .then(response => response.json())
        .then(data => data);
}

async function getCharacters() {
    return [
        await fetchCharacter(`${URL}/${randomNumber(1, 669)}`),
        await fetchCharacter(`${URL}/${randomNumber(1, 669)}`),
        await fetchCharacter(`${URL}/${randomNumber(1, 669)}`),
    ];
}

export {getCharacters, randomNumber};
