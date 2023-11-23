export default class Character {
  constructor(level, type = 'generic') {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    if(new.target) throw "Ошибка! Создание персонажей делай через классы";
    // TODO: выбросите исключение, если кто-то использует "new Character()"
  }
}
