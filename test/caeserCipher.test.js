import { caesarCipher } from "../js/caesarCipher";

describe('Normal cipher', () => {
    test('abc (3) to def', () => {
        expect(caesarCipher('abc', 3)).toBe('def');
    });
    test('test (6) to zkyz', () => {
        expect(caesarCipher('test', 6)).toBe('zkyz');
    });
});

describe('Letter case preservation', () => {
    test('"HeLLo" (3) should return "KhOOr"', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });
    test('"SiMiLo" (12) should return "EuYuXa"', () => {
        expect(caesarCipher('SiMiLo', 12)).toBe('EuYuXa');
    });
});

describe('Preserve punctuation', () => {
    test('"Hello, World!" (3) should return "Khoor, Zruog!"', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
    test('"I LOVE my girlfriend, Busi!!!" (20) should return "C FIPY aclgzlchyx, Vomc!!!"', () => {
        expect(caesarCipher('I LOVE my girlfriend, Busi!!!', 20)).toBe('C FIPY gs aclfzlcyhx, Vomc!!!');
    });
});