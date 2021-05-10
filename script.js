/* A message generator program that delivers random messages based on their star sign category. 
Returns the fortune output and the relevant advice.*/

function randomNumber(number) {
    // gets a number between 0 and 1
    return Math.floor(Math.random() * number);
};

/* create an object with 3 different arrays:
1) the star sign 
2) the fortune
3) the advice */
const collectiveWisdom = {
    sign: ['water', 'earth', 'fire', 'air'],
    fortune: ['horrible luck', 'bad luck', 'indifferent luck', 'good luck', 'excellent luck'],
    advice: ['have a good meal', 'better days are yet to come', 'have more fun', 'smile more', 'friends are essential', 'trust nobody']
};

// store the wisdom in an array
let personalWisdom = [];

// Iterate over the object
for (let prop in collectiveWisdom) {
    let i = randomNumber(collectiveWisdom[prop].length)

    // use the object's properties to customize the message being added to personalWisdom
    switch(prop) {
        case 'sign':
            personalWisdom.push(`If your sign is: ${collectiveWisdom[prop][i]},`);
            break;
        case 'fortune':
            personalWisdom.push(`you will have ${collectiveWisdom[prop][i]}.`);
            break;
        case 'advice':
            personalWisdom.push(`Advice for you: ${collectiveWisdom[prop][i]}.`);
            break;
        default:
            personalWisdom.push('There is insufficient information to predict your fortune.')
    }
};

// display the combined results - the sign, fortune, and advice
function formatWisdom(wisdom) {
   const formatted = personalWisdom.join('\n');
   console.log(formatted)
};

// call the function with the generated values
formatWisdom(personalWisdom);