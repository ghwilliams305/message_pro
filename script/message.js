//Setting up a word bank
const verbs = ['am', 'radiate', 'choose', 'trust', 'attract', 'love'];
const abjectives = ['confident', 'worthy', 'enough', 'postive', 'successful', 'strong', 'limitless', 'resilient', 'attractive'];
const traits = ['love', 'confidence', 'positive energy', 'gratude', 'harmony', 'peace', 'greatness', 'beauty'];
const objects = ['my ability', 'my family', 'myself', 'my mind', 'my body', 'my soul'];

//Function that presents a random word from a given array
const randWord = (array) => array[Math.floor(Math.random() * array.length)];

//An object that returns a list of set sentences structures
const sentenceStructure = {
    'am' : [
        ['I', 'am', '*abjectives'],
        ['I', 'am', '*abjectives', 'in', '*objects'],
        ['I', 'am', '*abjectives', 'of', '*traits']
    ],
    'radiate' : [
        ['I', 'radiate', '*traits'],
        ['I', 'radiate', '*traits', 'in', '*objects'],
        ['I', 'am', '*adjectives', 'in', 'my', 'ability', 'to', 'radiate', '*traits']
    ],
    'choose' : [
        ['I', 'choose', 'to', 'be', '*adjectives'],
        ['I', 'choose', '*traits'],
        ['I', 'choose', '*objects']
    ],
    'trust' : [
        ['I', 'trust', '*objects'],
        ['I', 'trust', 'in', '*objects', 'to', 'provided', 'me', 'with', '*traits'],
        ['I', 'trust', 'that', 'I', 'am', '*adjectives']
    ],
    'attract' : [
        ['I', 'attract', '*traits'],
        ['I', 'attract', '*traits', 'in', '*objects'],
        ['I', 'attract', '*abjectives', 'people', 'in', 'my', 'life']
    ],
    'love' : [
        ['I', 'love', '*objects'],
        ['I', 'love', '*traits'],
        ['I', 'love', 'that', 'I', 'am', '*abjectives']
    ]
}

//testing values of word banks
console.log(`verbs = ${verbs}`);
console.log(`abjectives = ${abjectives}`);
console.log(`traits = ${traits}`);
console.log(`objects = ${objects}`);

//testing randWord Function
for(let x = 0; x < 9; x++) console.log(`randWord(verbs) => ${randWord(verbs)}`);

//testing the sentenceStructure object
for(let x = 0; x < 9; x++) {
    const theVerb = randWord(verbs);
    const sentenceNumber = Math.floor(Math.random() * 3);
    console.log(`sentenceStructure[${theVerb}][${sentenceNumber}] = ${sentenceStructure[theVerb][sentenceNumber]}`);
}