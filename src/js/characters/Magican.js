import Character from '../Character';

export default class Magican extends Character {
    constructor(level, type = 'magican') {
    super(level, attack, defence, health, type);
    this.level = level;
    this.attack = 10;
    this.defence = 40;
    }
}