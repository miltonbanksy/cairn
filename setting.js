

function generateSettingElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

const btnGenPeople = document.querySelector('#btn-generate-people');
const displayPeople = document.querySelector('#display-people');

const btnGenFaction = document.querySelector('#btn-generate-faction');
const displayFaction = document.querySelector('#display-faction');
const btnGenFactionActionOutcome = document.querySelector('#btn-generate-faction-action-outcome')
const displayFactionActionOutcome = document.querySelector('#display-faction-action-outcome');

btnGenPeople.addEventListener('click', () => {
    const cultural_characteristic = generateSettingElement(peopleCultureCharacters);
    const cultural_ambition = generateSettingElement(peopleCultureAmbitions);
    const cultural_resources_abundant = generateSettingElement(peopleResources);
    const cultural_resources_scarce = generateSettingElement(peopleResources);

    displayPeople.innerHTML = `
        Characteristic: ${cultural_characteristic}
        <br>
        Ambition: ${cultural_ambition}
        <br>
        Abundant Resource: ${cultural_resources_abundant}
        <br>
        Scarce Resource: ${cultural_resources_scarce}
    `;
});

btnGenFaction.addEventListener('click', () => {
    const faction_type = generateSettingElement(factionsTypes);
    const faction_agent = generateSettingElement(factionsAgents);
    const faction_trait1 = generateSettingElement(factionTraits1);
    const faction_trait2 = generateSettingElement(factionTraits2);
    const faction_noOfAdvantages = generateSettingElement(factionNumberOfAdvantages);

    // Change this so that there are no duplicates generated
    let advantageArray = [];
    for (x = 0; x < faction_noOfAdvantages; x++) {
        const faction_advantage = generateSettingElement(factionAdvantages);
        advantageArray.push(faction_advantage);
    }
    
    const faction_agenda = generateSettingElement(factionAgendas);
    const faction_obstacle = generateSettingElement(factionObstacles);

    displayFaction.innerHTML = `
        Type: ${faction_type}
        <br>
        Agent: ${faction_agent}
        <br>
        Traits: ${faction_trait1}, ${faction_trait2}
        <br>
        Advantages (${faction_noOfAdvantages}): ${advantageArray.join(', ')}
        <br>
        Agenda: ${faction_agenda}
        <br>
        Obstacle: ${faction_obstacle}
    `;
});

btnGenFactionActionOutcome.addEventListener('click', () => {
    const faction_action_outcome = generateSettingElement(factionActionOutcome);

    displayFactionActionOutcome.innerHTML = `
        Faction Action Outcome: ${faction_action_outcome};
    `;
});