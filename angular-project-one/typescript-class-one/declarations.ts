console.log('************************************');
console.log("***** Working! Declarations ts *****");
console.log('************************************');

// LET
// -------------------------------------------------------------------
let myLetVar: number;

myLetVar = 123456;
myLetVar = 456789;
myLetVar = 7891011;

const logMyLetVar = () => {
    let myLetVar: number;
    myLetVar = 147;
    console.log("My let var inside the function", myLetVar);
}

console.log("My let var Ouside the function", myLetVar);

logMyLetVar();


// CONST
// -------------------------------------------------------------------

const myConstVar: boolean = true; // Must assign value at the same time as this one is defined
// myConstVar = false; // Would throw an error

const myMalleableConst: any = { foo: 'bar', baz: 'boo'};
console.log('my malleable constant when initialized', myMalleableConst);
myMalleableConst.foo = 'navbar'; // An internal value of a const, like in this case, can be modified.
console.log('my malleable constant after assignment', myMalleableConst);

const myMalleableConstT: any = ['bar', 'boo'];
console.log('my malleable constant when initialized', myMalleableConstT);
myMalleableConstT[0] = 'navbar'; // An internal value of a const, like in this case, can be modified.
console.log('my malleable constant after assignment', myMalleableConstT);

