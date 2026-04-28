import { merge } from "../src/merge";

describe('testing merge function', () => {
    test('all empty collections returns empty array', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([]);
    });

    test('merges three sorted collections', () => {
        const collection_1: number[] = [1, 2, 3, 4];
        const collection_2: number[] = [2, 3, 4, 4];
        const collection_3: number[] = [9, 6, 4, 3];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6, 9]);
    });

    test('merges three sorted collections', () => {
        const collection_1: number[] = [1, 2, 10, 100];
        const collection_2: number[] = [3, 5, 9, 89];
        const collection_3: number[] = [5, 4, 3, 2, 1, 0];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 9, 10, 89, 100]);
    });

    test('collection_1 and collection_2 empty', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [5, 3, 1];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 3, 5]);
    });

    test('collection_3 empty', () => {
        const collection_1: number[] = [1, 3];
        const collection_2: number[] = [2, 4];
        const collection_3: number[] = [];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([1, 2, 3, 4]);
    });

    test('all negative values', () => {
        const collection_1: number[] = [-5, -3, -1];
        const collection_2: number[] = [-4, -2, 0];
        const collection_3: number[] = [-1, -3, -5];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([-5, -5, -4, -3, -3, -2, -1, -1, 0]);
    });

    test('mix of negative and positive values', () => {
        const collection_1: number[] = [-3, -1, 2];
        const collection_2: number[] = [-2, 0, 3];
        const collection_3: number[] = [1, -1, -4];
        expect(merge(collection_1, collection_2, collection_3)).toEqual([-4, -3, -2, -1, -1, 0, 1, 2, 3]);
    });
});
