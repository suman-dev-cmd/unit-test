import {getLatterMatchCount} from './';
describe('getLatterMatchCount',()=>{
    const serectWord = 'party';
    test('returns correct count when there are no matching latters',()=>{
        const letterMatchCount = getLatterMatchCount('bones',serectWord);
        expect(letterMatchCount).toBe(0);
    });
    test('returns the correct count when there are three matching latters',()=>{
        const letterMatchCount = getLatterMatchCount('train',serectWord);
        expect(letterMatchCount).toBe(3);
    });
    test('returns the correct count when there are duplicate  latters in the guess',()=>{
        const letterMatchCount = getLatterMatchCount('parka',serectWord);
        expect(letterMatchCount).toBe(3);
    });
})