const btnCreateDungeon = document.getElementById('btn-create-dungeon');
const displayDungeon = document.getElementById('display-dungeon');

function createDungeonElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

function createDungeon() {
    const originalUse = createDungeonElement(dungeon_history_purpose_original_use);
    const builtBy = createDungeonElement(dungeon_history_purpose_built_by);
    const entrance = createDungeonElement(dungeon_history_construction_entrance);
    const composition = createDungeonElement(dungeon_history_construction_composition);
    const ruination_condition = createDungeonElement(dungeon_history_ruination_condition);
    const ruination_cause = createDungeonElement(dungeon_history_ruination_cause);

    return {
        originalUse,
        builtBy,
        entrance,
        composition,
        ruination_condition,
        ruination_cause
    }
}

btnCreateDungeon.addEventListener('click', () => {
    const objDungeon = createDungeon();

    displayDungeon.innerHTML = `
        <h2>Dungeon History</h2>
        <h3>Purpose</h3>
        Original Use: ${objDungeon.originalUse}
        <br>Built By: ${objDungeon.builtBy}
        <h3>Construction</h3>
        Entrance: ${objDungeon.entrance}
        <br>Composition: ${objDungeon.composition}
        <h3>Ruination</h3>
        Condition: ${objDungeon.ruination_condition}
        <br>Cause: ${objDungeon.ruination_cause}
    `;
});