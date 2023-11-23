import Character from '../Character';

export default class Bowman extends Character {
    constructor(level, type = 'bowman') {
    super(level, attack, defence, health, type);
    this.level = level;
    this.attack = 25;
    this.defence = 25;
    }
}