const standard_gear = ["Rations (3 uses)", "Torch (3 uses)"];
const attributes = ["STR", "DEX", "WIL"];

const btnCreateCharacter = document.getElementById('btn-create-character');
const displayCharacter = document.getElementById('display-character');

let backgroundsData = [];
let traitsData = [];
let bondsData = [];

fetch('backgrounds.json').then(res => res.json()).then(data => backgroundsData = data);
fetch('traits.json').then(res => res.json()).then(data => traitsData = data);
fetch('bonds.json').then(res => res.json()).then(data => bondsData = data);

function roll1dx(size_of_dice) {
    return Math.floor(Math.random() * size_of_dice) + 1;
}

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

function generateAttributes() {
    const stats = {};
    let attributePool = [];
    
    attributes.forEach(statName => {
        const oneAttribute = roll_xdx(3, 6);
        attributePool.push(oneAttribute);
        
        stats[statName] = {
            value: oneAttribute
        }
    });
    return stats;
}

function generateTraits() {
    const result = {};
    for (const key in traitsData) {
        if (Object.hasOwnProperty.call(traitsData, key)) {
            const currentArray = traitsData[key];

            if (Array.isArray(currentArray) && currentArray.length > 0) {
                const randomIndex = Math.floor(Math.random() * currentArray.length);
                result[key] = currentArray[randomIndex];
            } else {
                result[key] = undefined;
            }
        }
    }
    return result;
}

function generateBond() {
    const index = Math.floor(Math.random() * bondsData.length);
    return bondsData[index];
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
    const attributes = generateAttributes();
    const hitProtection = roll1dx(6);
    const traits = generateTraits();
    const traitPrint = Object.entries(traits)
        .map(([key, value]) => `<div>${key}: ${value}</div>`)
        .join('');
    const bond = generateBond();
        

    return {
        background,
        name,
        gear,
        promptTitle1,
        promptAnswers1,
        promptTitle2,
        promptAnswers2,
        attributes,
        hitProtection,
        traitPrint,
        bond
    }
}

btnCreateCharacter.addEventListener('click', () => {
    const character = generateCharacter();

    displayCharacter.innerHTML = `
        <h2>${character.name} the ${character.background.title}</h2>
        <h3>HP ${character.hitProtection},
        STR ${character.attributes.STR.value},
        DEX ${character.attributes.DEX.value},
        WIL ${character.attributes.WIL.value}</h3>
        ${character.background.description}
        <h3>Traits</h3>
        ${character.traitPrint}
        <h3>Gear</h3>
        ${character.gear.join(", ")}
        <h3>Bond</h3>
        ${character.bond}
        <br><br><i>${character.promptTitle1}</i>
        <br>${character.promptAnswers1}
        <br><br><i>${character.promptTitle2}</i>
        <br>${character.promptAnswers2}
    `;
});
