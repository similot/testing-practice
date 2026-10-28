import { analyseArray } from "../js/analyseArray";

describe('Testing individual values', () => {
    const result = analyseArray([1,8,3,4,2,6]);
    test('average to be 4', () => {
        expect(result.average).toBe(4);
    });
    test('min to be 1', () => {
        expect(result.min).toBe(1);
    });
    test('max to be 8', () => {
        expect(result.max).toBe(8);
    });
    test('length to be 6', () => {
        expect(result.length).toBe(6);
    });
})

test('works with a single element', () => {
    expect(analyseArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1,
    });
});

test('works with negative numbers', () => {
    expect(analyseArray([-4, -2, -6])).toEqual({
        average: -4,
        min: -6,
        max: -2,
        length: 3,
    });
});

test('works with a mix of negative, zero and positive numbers', () => {
    expect(analyseArray([-10, 0, 10])).toEqual({
        average: 0,
        min: -10,
        max: 10,
        length: 3,
    });
});

test('works when all numbers are the same', () => {
    expect(analyseArray([3, 3, 3, 3])).toEqual({
        average: 3,
        min: 3,
        max: 3,
        length: 4,
    });
});