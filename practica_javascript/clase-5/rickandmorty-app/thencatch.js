//fetch => realizar una peticion al servidor para traer los datos
function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        const characters = data.results;
        const charactersContainer = document.getElementById('app');

        characters.map(character => {
            const characterElement = document.createElement('div');
            characterElement.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
            `;

            charactersContainer.appendChild(characterElement);
        });
    })
    .catch(error => {
        console.log(error);
        const charactersContainer = document.getElementById('app');
        charactersContainer.innerHTML = `
            <h2>Error al obtener los datos</h2>
        `;
    })
}

getCharacters();