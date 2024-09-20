import { suma, multiplicar, divide } from "./main";
import { describe, it, test, expect } from "vitest";

describe('Estamos probanaod la calculadora de main.ts', () => {
    it('Probando la funcion suma', () => {
        expect(suma(5, 3)).toBe(8);
    });

    it('Probando la funcion multiplicar', () => {
        expect(multiplicar(5, 3)).toBe(15);
    });

    test('Probando la funcion divide', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('Probando la funcion divide con divicion entre 0', () => {
        expect(divide(10, 0)).toBe(Infinity);
    });
});