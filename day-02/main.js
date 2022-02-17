let challenge = '30 Days of JavaScript';

/* console log the variable */
console.log(challenge);

/* console log the length */
console.log(challenge.length);

/* console log with uppercase */
console.log(challenge.toUpperCase());

/* console.log to lowercase */
console.log(challenge.toLowerCase());

/* cut the string */
console.log(challenge.substring(3,7));

/* slice out */
console.log(challenge.substr(3));

/* includes */
console.log(challenge.includes('Script'));

/* split */
console.log(challenge.split());

/* split in space */
console.log(challenge.split(' '));


let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(companies.split(","));

/* use replace */
console.log(challenge.replace("JavaScript", "Python"));

/* charat */
console.log(challenge.charAt(15));

/* charcode */
console.log(challenge.charCodeAt('J'));

/* indexof */
console.log(challenge.indexOf('a'));

/* lastindexfo */
console.log(challenge.lastIndexOf('a'));

let sampleSentence = 'You cannot end a sentence with because because because is a conjunction';

/* indexOf */
console.log(sampleSentence.indexOf('because'));

/* lastindexof */
console.log(sampleSentence.lastIndexOf('because'));

/* search */
console.log(sampleSentence.search('because'));

let newChallenge =  ' 30 Days Of JavaScript ';
/* trim */
console.log(newChallenge.trim());

/* startswith */
console.log(challenge.startsWith('30'));

/* endswith */
console.log(challenge.endsWith('Script'));

/* match */
console.log(challenge.match('a'));

let phrase1 = '30 Days of';
let phrase2 = 'Javascript';

/* concat */
console.log(phrase1.concat(" ", phrase2));

/* repeat */
console.log(challenge.repeat(2));

let sentence1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";

console.log(sentence1);

let sentence2 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`;

console.log(sentence2);

let num1 = '10';

console.log(num1 == 10);

let float1 = '9.8';

let float2 = parseFloat(float1);

console.log(Math.ceil(float2) == 10);

word1 = 'python';

word2 = 'jargon';

console.log(word1.search('on'));

console.log(word2.search('on'));

randNum = Math.random();

scopedRandNum = randNum * 101;

console.log(Math.floor(scopedRandNum));
