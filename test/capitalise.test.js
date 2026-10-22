import { capitalise } from "../js/capitalise";

test('Turns "milo" into "Milo"', () => {
    expect(capitalise('milo')).toBe('Milo');
});

test('Turns "langa" into "Langa"', () => {
    expect(capitalise('langa')).toBe('Langa');
})