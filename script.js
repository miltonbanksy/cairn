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