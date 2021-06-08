import moxios, { requests } from 'moxios';
import {getSecretWord,correctGuess,actionTypes} from './'
describe('getSecretWord',()=>{
    beforeEach(()=>{
        moxios.install();
    });
    afterEach(()=>{
        moxios.uninstall();
    });
    test('secretWord is required', () => {
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:'party'
            });
        });
        return getSecretWord()
            .then((secretWord)=>{
                expect(secretWord).toBe('party');
            })
    });
    
});
describe('currentGuess',()=>{
    test('returns an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess();
        expect(action).toStrictEqual({type:actionTypes.CORRECT_GUESS});     
    });
    
});