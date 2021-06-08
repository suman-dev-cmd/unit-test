export function getLatterMatchCount(guessedWord,secretWord){
    const serectLatters = secretWord.split('');
    const guessedLatterSet = new Set(guessedWord);
    const array = serectLatters.filter(letter=>guessedLatterSet.has(letter)).length;
    return array
}