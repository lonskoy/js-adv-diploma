import Character from '../Character';

export default class Vampire extends Character {
    constructor(level, type = 'vampire') {
    super(level, attack, defence, health, type);
    this.level = level;
    this.attack = 25;
    this.defence = 25;
    }
}