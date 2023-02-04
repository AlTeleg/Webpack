import Game, {GameSavingData, readGameSaving as loadGame , writeGameSaving as savegame} from "./game"

console.log('app worked');

const game = new Game();
game.start();