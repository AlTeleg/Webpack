import Character from "./domain";

export default class Game {
    start() {
      console.log('game started');
    }
}

export { GameSavingData, readGameSaving, writeGameSaving };
  
class GameSavingData {
}
  
function readGameSaving() {
}
  
function writeGameSaving() {
}