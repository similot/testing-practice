import { reverseString } from "../js/reverseString";

test('turn testing into gnitset', () => {
    expect(reverseString('testing')).toBe('gnitset');
});

test('turn "Another test" into "tset rehtonA"', () => {
    expect(reverseString('Another test')).toBe('tset rehtonA');
});