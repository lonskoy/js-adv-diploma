import {Character} from '../js/Character';
import {Bowman} from '../js/characters/Bowman';

test('Test create Character', () => {
    const result = new Character('Bowman', 2);

    expect(result).toBe('Ошибка! Создание персонажей делай через классы');
});

test('Test create Bowman', () => {
    const result = new Bowman(2);

    expect(result).toEqual({level: 2,
        attack: 25,
        defence: 25,
        health: 50,
        type: 'bowman'
    });
});