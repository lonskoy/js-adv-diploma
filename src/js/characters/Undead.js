import Character from '../Character';

export default class Undead extends Character {
    constructor(level, type = 'undead') {
    super(level, attack, defence, health, type);
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    }
}