const standard_gear = [
    "Rations (3 uses)",
    "Torch (3 uses)"
]

const btnCreateCharacter = document.getElementById('btn-create-character');
const displayCharacter = document.getElementById('display-character');

let backgroundsData = [];

fetch('backgrounds.json').then(res => res.json()).then(data => backgroundsData = data);

function roll_xdx(number_of_dice, size_of_dice) {
    let dicePool = [];
    for (let d = 0; d < number_of_dice; d++) {
        const dice = Math.floor(Math.random() * size_of_dice) + 1;
        dicePool.push(dice);
    }
    return dicePool.reduce((a, b) => a + b, 0);
}

function generateCharacterAspect(data) {
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}

function generateCharacter() {
    const background = generateCharacterAspect(backgroundsData);
    const name = generateCharacterAspect(background.names);
    const gear = [...standard_gear, ...background.gear];
    const gold = `${roll_xdx(3, 6)} Gold Pieces`;

    gear.unshift(gold);

    return {
        background,
        name,
        gear,
        gold
    }
}

btnCreateCharacter.addEventListener('click', () => {
    const character = generateCharacter();

    displayCharacter.innerHTML = `
        ${character.name} the ${character.background.title}
        <br><br>${character.background.description}
        <br><br>Gear
        <br>${character.gear.join(", ")}
    `;
});
