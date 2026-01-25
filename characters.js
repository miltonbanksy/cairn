const standard_gear = ["Rations (3 uses)", "Torch (3 uses)"];

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
    const gold = `${roll_xdx(3, 6)} Gold Pieces`;
    const gear = [gold, ...standard_gear, ...background.gear];
    const promptTitle1 = background.promptTitle1;
    const promptAnswers1 = generateCharacterAspect(background.promptAnswers1);
    const promptTitle2 = background.promptTitle2;
    const promptAnswers2 = generateCharacterAspect(background.promptAnswers2);
    
    return {
        background,
        name,
        gear,
        promptTitle1,
        promptAnswers1,
        promptTitle2,
        promptAnswers2
    }
}

btnCreateCharacter.addEventListener('click', () => {
    const character = generateCharacter();

    displayCharacter.innerHTML = `
        <h2>${character.name} the ${character.background.title}</h2>
        ${character.background.description}
        <h3>Gear</h3>
        ${character.gear.join(", ")}
        <br><br>${character.promptTitle1}
        <br>${character.promptAnswers1}
        <br><br>${character.promptTitle2}
        <br>${character.promptAnswers2}
    `;
});
