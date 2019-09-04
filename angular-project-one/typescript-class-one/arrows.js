console.log("Hello world");
// const printSth = (value) => {
//     console.log(`Printing sth as a test ${value}`);
// }
// printSth('My test');
// Creating an arrow function out of an object
var user = {
    firstName: 'John',
    lastName: 'Nascimento',
    getFullName: function () {
        var _this = this;
        return function () {
            console.log("The full name of this user is " + _this.firstName + " " + _this.lastName);
        };
    }
};
user.getFullName()();
// Explanation point from the code above:
// What the arrow function does over there is, basically, maintain the scope of the object,
// making sure that the 'This' key word will represent the 'firstName' and 'lastName' of its object.
// Without the arrow function over here, we would face a loss of scrope and a convertion of the 'this'
// keyword into the 'window' obejct itself and thus having no 'firs or lastname' properties attained to it.
