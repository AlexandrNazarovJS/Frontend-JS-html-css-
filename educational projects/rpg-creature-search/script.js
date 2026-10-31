const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

const creatureName = document.querySelector("#creature-name");
const creatureId = document.querySelector("#creature-id");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const types = document.querySelector("#types");

const hp = document.querySelector("#hp");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const specialAttack = document.querySelector("#special-attack");
const specialDefense = document.querySelector("#special-defense");
const speed = document.querySelector("#speed");

searchButton.addEventListener("click", async () => {
  const searchValue = searchInput.value.trim();

  try {
    const response = await fetch(
      `https://rpg-creature-api.freecodecamp.rocks/api/creature/${searchValue}`
    );

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    types.innerHTML = "";

    data.types.forEach(type => {
      const typeElement = document.createElement("span");
      typeElement.textContent = type.name.toUpperCase();
      types.appendChild(typeElement);
    });

    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

  } catch (error) {
    alert("Creature not found");
  }
});