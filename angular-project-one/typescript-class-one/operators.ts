console.log('************************************');
console.log('***** Operators working sound! *****');
console.log('************************************');

// Working with ...spread
// -------------------------------------------------------------------------------------------------------
let myOddNumbersArray: number[] = [1, 3, 5];
let myEvenNumbersArray: Array<number> = [6, 2, 4];
let myNumbersArray: Array<number> = [...myOddNumbersArray, ...myEvenNumbersArray];

console.log(myNumbersArray);

let userName: any = { fName: 'John', lName: 'Nascimento'};
let userDetails: any = { address: '123 whatever street', mobile: '987654321', email: 'johnnascimento@example.com', ...userName };

console.log('userDetails + userName', ...userDetails);


// Another way of passing spread opertators along is as follows:
const sum = (a?, b?, c?):number => {
    return a + b + c;
};

console.log('calling sum function out ', sum(...myOddNumbersArray));
console.log('sorting test ', myEvenNumbersArray.sort((a, b) => { return a - b;}));

// Using back ticks to have a multi-line string and also call out variables/properties along the way, using $ sign
console.log(`
    user name: ${userName.fName} ${userName.lName},
    user address: ${userDetails.address},
    user mobile: ${userDetails.mobile},
    user email: ${userDetails.email}`
); 
// Everything applied within the back ticks are going to be considered by the console



// Working with De-structuring
// -------------------------------------------------------------------------------------------------------
let { fName } = userName;
console.log(`fName value is: ${fName}`);

let { lName } = userName;
console.log(`lName value is: ${lName}`);

let [ a ] = myOddNumbersArray;
console.log(`A as 1: ${a}`);

let [ , b ] = myOddNumbersArray;
console.log(`B as 3, usind , B: ${b}`);

let [ , , c ] = myOddNumbersArray;
console.log(`C as 5, usind , , C: ${c}`);

let [ x, y, ...z ] = myNumbersArray;
console.log(`Got x as: ${x}, y as: ${y} and Z as: ${z}` );
console.log(typeof z);
