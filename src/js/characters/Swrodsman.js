import Character from '../Character';

export default class Swordsman extends Character {
    constructor(level, type = 'swordsman') {
    super(level, attack, defence, health, type);
    this.level = level;
    this.attack = 40;
    this.defence = 10;
    }
}