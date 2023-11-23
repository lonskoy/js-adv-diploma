import Character from '../Character';

export default class Daemon extends Character {
    constructor(level, type = 'daemon') {
    super(level, attack, defence, health, type);
    this.level = level;
    this.attack = 10;
    this.defence = 10;
    }
}