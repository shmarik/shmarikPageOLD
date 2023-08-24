const characterContainer = document.querySelector("#character-container");
const typeSelect = document.querySelector("#type-select");
const rankSelect = document.querySelector("#rank-select");
const statSelect = document.querySelector("#stat-select");
const filterButton = document.querySelector("#filter-button");


// Function to create and add character cards to the character container
const createCharacterCards = (characters) => {
    characterContainer.innerHTML = ""; // Очишаем контейнер перед началом
    characters.forEach((character) => { // В цикле проходим по каждому персонажу
      const characterCard = document.createElement("div"); // создаем элемент div
      characterCard.classList.add("character-card"); // добалвяем к нему стили
      // И вставляем внутрь этого дива HTML Код который написан ниже
      characterCard.innerHTML = ` 
          <img src="${character.img}"> 
          <div class="character-info"> 
            <h3>Имя: ${character.name}</h3> 
            <p>Тип: ${character.type}</p> 
            <p>Ранг: ${character.rank}</p> 
            <p>HP: ${character.hp}</p> 
            <p>ATK: ${character.atk}</p> 
          </div>`;

      characterContainer.appendChild(characterCard); // Вставляем наш див внутрь внешнего контнейра
  
      // Добавляем класс стилей для выполнения анимации
      characterCard.classList.add("fade-in");
    });
  };
  
  // Вызываем функцию для создания карточек персонажей
  createCharacterCards(characters);



  // Event listener for filter button
filterButton.addEventListener("click", () => {
    //filter characters based on selected type
    let filteredCharacters = characters;
  
    if (typeSelect.value != "all") {
      filteredCharacters = filteredCharacters.filter(
        (character) =>
          character.type.toLocaleLowerCase() ==
          typeSelect.value.toLocaleLowerCase()
      );
    }

    //filter characters based on selected rank
    if (rankSelect.value != "all") {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.rank == Number(rankSelect.value)
      );
    }
    //filter characters based onselected stat
    if (statSelect.value != "all") {
      filteredCharacters = filteredCharacters.filter(
        (character) => character[statSelect.value] != undefined
      );
    }
  
    if (filteredCharacters.length == 0) {
      characterContainer.innerHTML =
        "<h2>По данному запросу нет совпадений!</h2>";
    } else {
      //create and add new character cards with filtered characters
      createCharacterCards(filteredCharacters);
    }
  });
  