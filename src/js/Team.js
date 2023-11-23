import generateTeam from '../js/generators.js';

/**
 * Класс, представляющий персонажей команды
 *
 * @todo Самостоятельно продумайте хранение персонажей в классе
 * Например
 * @example
 * ```js
 * const characters = [new Swordsman(2), new Bowman(1)]
 * const team = new Team(characters);
 *
 * team.characters // [swordsman, bowman]
 * ```
 * */

const playerType = ["Bowman", "Swordsman", "Magician"];
const aiType = ["Daemon", "Undead", "Vampire"];

export default class Team {
  constructor(allowedTypes, maxLevel, count) {
    this.allowedTypes = allowedTypes;
    this.maxLevel = maxLevel;
    this.count - count;
    const team = generateTeam(this.allowedTypes, this.maxLevel, this.count);  
}

}

