const characterContainer = document.querySelector("#character-container");
const typeSelect = document.querySelector("#type-select");
const rankSelect = document.querySelector("#rank-select");
const statSelect = document.querySelector("#stat-select");
const filterButton = document.querySelector("#filter-button");
const createCharactersCards = (characters) => {
    characterContainer.innerHTML = ""
    characters.forEach((character) => {
        const characterCard = document.createElement("div")
        characterCard.classList.add("character-card")
        characterCard.innerHTML = `
        <img src="${character.img}">
        <div class="character-info">
        <h3>Имя: ${character.name}</h3>
        <p>Тип: ${character.type}</p>
        <p>Ранг: ${character.rank}</p>
        <p>HP: ${character.hp}</p>
        <p>ATK: ${character.atk}</p>
        </div>`

        characterContainer.appendChild(characterCard)

        characterCard.classList.add("fade-in")
    })
}
createCharactersCards(characters)
filterButton.addEventListener("click", ( =>{
    let filtredCharacters = characters

    if(typeSelect.value)
})
)