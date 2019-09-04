console.log('********************************************');
console.log('******** Types\'s working sound! ***********');
console.log('********************************************');

function clHelper(TextToConsole, data, fontSize, fontWeight, elColor) {
    return console.log('%c' + TextToConsole + ': ' , 'font-size:' + fontSize + '; font-weight: ' + fontWeight + '; color: ' + elColor + ';', data);
}

clHelper('First typeScript script', undefined, '20px', 'bold', 'darkred');

// BOOLEAN
// ---------------------
let myBoolean: boolean;  // To defined the type of the variable we must use varName + colon + type;. f.ex: let sth: boolean; 
myBoolean = true;
myBoolean = false;
myBoolean = null;
myBoolean = undefined;
// Those values textabove are the ones permitted to be passed along to myBoolean variable. 
// Hence, we cannot pass along any number, string or any other value but those above.
// ---------------------


// NUMBER
// ---------------------
let myNumber: number;
myNumber = 12345;
myNumber = -12345;
myNumber = 12345.122;
myNumber = -12345.122;
myNumber = 0x32323212;
myNumber = 0o32323212;
myNumber = 0b1010010;
myNumber = null;
myNumber = undefined;
// This above cannot have another value a part from those described here
// ---------------------


// STRING
// ---------------------
let myString: string;
myString = 'something';
myString = "something"
myString = function (){ return 'something';}();
myString = 'Something'.slice(0,4);
myString = null;
myString = undefined;


// VOID
// ---------------------
function logToConsole(): void {
    clHelper('logToConsole', undefined, '16px', 'normal', 'coral');
}
// TypeScript by default specify the functions and other types, here shown, as void even without when is not set
// ---------------------


// ARRAY: types
// ---------------------
let myArray: string[]; // This could be of any type
let myArrayTwo: number[]; // This could be of any type
myArray = ['Sth', "Sth", "sth".slice(0,2), null, undefined];
clHelper('My array', myArray, '16px', 'normal', 'coral');
myArrayTwo = [123456, 123+456, 123.123, 0x202, 0b01011001, 0x0005525, 0o0552110 ];
clHelper('my array two', myArrayTwo, '16px', 'normal', 'coral');
// myArray = [true, 3235]; -> Could not have boolean or number value, in this case

// Other ways to declare arrays:
let myGenericArrayOne: [string, number] = ["sth", 1234];
clHelper('My generic array one', myGenericArrayOne, '16px', 'normal', 'coral');
let myGenericArrayTwo: string | number[] = [2312312];  
let myGenericArrayFour:  Array<string | number> = ['something', 12345];
clHelper('My generic array four', myGenericArrayFour, '16px', 'normal', 'coral');

let myGenericArrayThree: [string | number] = [newFunction('string', null)];
function newFunction(n,t): string | number {
    if(n == undefined || n === undefined) {
        return 53; // Could also be a string returned like so: "sth";
    } else {
        return 'String';
    }
}
let myGenericArrayFive: string | number | boolean = true; // Interesting approach
clHelper('Generic array Five', myGenericArrayFive, '16px', 'normal', '#007828');

clHelper('My generic array three', myGenericArrayThree, '16px', 'normal', 'coral');


// Type of ANY can be anything it pleases you
let myAny: any;
myAny = 321321321;
myAny = '321321';
myAny = ['321321', 301321321, true];
myAny = null;
myAny = undefined;


// Type of Enum is some sort of assignable object that can be used as a typer like tboolean, string, so on so forth.
// This is also a zero-based element
// For instance: First approach - assigning values to the object at the moment of the declaration
enum Days {
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    IDK = 'I don\'t know'
}

let todayIs: Days;
clHelper('Today is', todayIs, '16px', 'normal', 'coral'); // Cannot return any value yet

todayIs = Days.MONDAY;
clHelper('Today is', todayIs, '16px', 'normal', 'coral'); // After assignment it returns monday
todayIs = Days.TUESDAY;
clHelper('Today is', todayIs, '16px', 'normal', 'coral');

// Null type can have value of null and undefined
let myNull: null;
myNull = null;
clHelper('My null', myNull, '16px', 'normal', 'coral');
myNull = undefined;
clHelper('My null', myNull, '16px', 'normal', 'coral');

// Null type can have value of null and undefined
let myUndefined: undefined;
myUndefined = undefined;
clHelper('My undefined', myUndefined, '16px', 'normal', 'coral');
myUndefined = null;
clHelper('My undefined', myUndefined, '16px', 'normal', 'coral');

// TUPLE type
// It works based on the foundation defined for the variable in question.
// For instance, if we have the following variable
// let myTuple: [string, number, boolean];

// I could also declare the whole thing the following way:
let myTuple: [string, number, boolean] = ['string', 123456, false];
clHelper('My tuple', myTuple, '16px', 'normal', 'coral');

// I must assign values to the variable inheriting this structure accordingly.
// For instance:
myTuple = ['sth', 321321, false];
clHelper('My tuple', myTuple, '16px', 'normal', 'coral');
myTuple = ['sth', 321321, null];
clHelper('My tuple', myTuple, '25px', 'bold', 'lightcoral');
// I could not intertwine the values at will. I must follow the base of the type specificed previously above
// That said, this, therefore, would be incorrect.
// myTuple = [321654', true, 'string'];