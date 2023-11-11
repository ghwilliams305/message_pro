//Setting up a word bank
const verbs = ['am', 'radiate', 'choose', 'trust', 'attract', 'love'];
const abjectives = ['confident', 'worthy', 'enough', 'postive', 'successful', 'strong', 'limitless', 'resilient', 'attractive'];
const traits = ['love', 'confidence', 'positive energy', 'gratude', 'harmony', 'peace', 'greatness', 'beauty'];
const objects = ['my ability', 'my family', 'myself', 'my mind', 'my body', 'my soul'];

//Function that presents a random word from a given array
const randWord = (array) => array[Math.floor(Math.random() * array.length)];

//testing values of word banks
console.log(`verbs = ${verbs}`);
console.log(`abjectives = ${abjectives}`);
console.log(`traits = ${traits}`);
console.log(`objects = ${objects}`);

//testing randWord Function
for(let x = 0; x < 9; x++) console.log(`randWord(verbs) => ${randWord(verbs)}`);