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
    const denizen_virtues = createDungeonElement(dungeon_denizens_traits_virtues);
    const denizen_vices = createDungeonElement(dungeon_denizens_traits_vices);
    const factionGoals = createDungeonElement(dungeon_factions_goals);
    const factionObstacles = createDungeonElement(dungeon_factions_obstacles);

    return {
        originalUse,
        builtBy,
        entrance,
        composition,
        ruination_condition,
        ruination_cause,
        denizen_virtues,
        denizen_vices,
        factionGoals,
        factionObstacles
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
        Condition: ${objDungeon.ruination_condition}, Cause: ${objDungeon.ruination_cause}
        <h3>Denizens</h3>
        Virtue: ${objDungeon.denizen_virtues}, Vice: ${objDungeon.denizen_vices}
        <h3>Factions</h3>
        Goal: ${objDungeon.factionGoals}, Obstacle: ${objDungeon.factionObstacles}
    `;
});

const btnCreateRoom = document.getElementById('btn-create-room');
const displayRoom = document.getElementById('display-room');

function createRoom() {
    const roll = roll1dx(6);
    const index = dungeonRooms.find(r => r.roll <= roll);
    const roomType = index.room.type;
    const title1 = index.room.title1;
    const title2 = index.room.title2;
    const detail1Index = Math.floor(Math.random() * index.room.data1.length);
    const detail1 = index.room.data1[detail1Index];
    const detail2Index = Math.floor(Math.random() * index.room.data2.length);
    const detail2 = index.room.data2[detail2Index];

    console.log(roomType, detail1)

    return {
        roomType,
        title1,
        title2,
        detail1,
        detail2
    }
}

btnCreateRoom.addEventListener('click', () => {
    const objRoom = createRoom();

    displayRoom.innerHTML = `
        <h2>Room: ${objRoom.roomType}</h2>
        <br>${objRoom.title1}: ${objRoom.detail1}
        <br><br>${objRoom.title2}: ${objRoom.detail2}
    `;
});