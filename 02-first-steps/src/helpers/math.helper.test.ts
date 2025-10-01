import { describe, expect, test } from 'vitest';
import { add, substract, multiply } from './math.helper';

describe('add', () => {
        test('shold add two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(3);
    })

})

describe('subsctract', () => { 
    test('should be -1', () =>{
        const a = 1;
        const b = 2;

        const result = substract(a, b);
        expect(result).toBe(-1);
    })

    test('should substract two numbers', () => {
        const a = 10;
        const b = 9;

        const result = substract(a, b);
        expect(result).toBe(a - b);
    })
})


describe('multiply', () => { 
    test('should multiply two numbers', () => {
        const a = 5;
        const b = 5;
        const result = multiply(a, b);
        expect(result).toBe(a * b);
    })

    test('should return the same number', () => {
        const a = 20;
        const b = 1;
        const result = multiply(a, b);
        expect(result).toBe(a);
    })
})


