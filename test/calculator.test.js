import { calculator } from "../js/calculator";

describe('Addition calculations', () => {
    test('add 1 and 1 to equal 2', () => {
        expect(calculator.add(1, 1)).toBe(2);
    });
    test('add 5 and 37 to equal 42', () => {
        expect(calculator.add(5, 37)).toBe(42);
    })
});

describe('Subtraction calculations', () => {
    test('subtract 4 from 5 to equal 1', () => {
        expect(calculator.subtract(5, 4)).toBe(1);
    });
    test('subtract 45 from 87 to equal 42', () => {
        expect(calculator.subtract(87, 45)).toBe(42);
    })
});

describe('Division calculations', () => {
    test('divide 12 by 2 to equal 6', () => {
        expect(calculator.divide(12, 2)).toBe(6);
    });
    test('add 5 and 37 to equal 42', () => {
        expect(calculator.divide(64, 8)).toBe(8);
    })
});

describe('Multiplication calculations', () => {
    test('multiply 12 and 6 to equal 72', () => {
        expect(calculator.multiply(12, 6)).toBe(72);
    });
    test('multiply 7 and 6 to equal 42', () => {
        expect(calculator.multiply(7, 6)).toBe(42);
    })
});