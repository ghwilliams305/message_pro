//Setting up a word bank
const verbs = ['am', 'radiate', 'choose', 'trust', 'attract', 'love'];
const adjectives = ['confident', 'worthy', 'enough', 'postive', 'successful', 'strong', 'limitless', 'resilient', 'attractive'];
const traits = ['love', 'confidence', 'positive energy', 'gratude', 'harmony', 'peace', 'greatness', 'beauty'];
const objects = ['my ability', 'my family', 'myself', 'my mind', 'my body', 'my soul'];

//Function that presents a random word from a given array
const randWord = (array) => array[Math.floor(Math.random() * array.length)];

//An object that returns a list of set sentences structures
const sentenceStructure = {
    'am' : [
        ['I', 'am', '*adjectives'],
        ['I', 'am', '*adjectives', 'in', '*objects'],
        ['I', 'am', '*adjectives', 'of', '*traits']
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
        ['I', 'attract', '*adjectives', 'people', 'in', 'my', 'life']
    ],
    'love' : [
        ['I', 'love', '*objects'],
        ['I', 'love', '*traits'],
        ['I', 'love', 'that', 'I', 'am', '*adjectives']
    ]
}

//Inserts words into sentences
const insertWords = (sentence) => sentence.map((word) => {
    if(word === "*adjectives") return randWord(adjectives);
    if(word === "*traits") return randWord(traits);
    if(word === "*objects") return randWord(objects);
    return word;
});

//Makes it a sentences
const sentConstruc = (sentence) => sentence.join(' ') + '.';

//Prints 5 affirmations
for(let x = 0; x < 5; x++) console.log(sentConstruc(insertWords(sentenceStructure[randWord(verbs)][Math.floor(Math.random() * 3)])));