var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('************************************');
console.log("***** Working! Classes ts *****");
console.log('************************************');
/*
class Person {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}
*/
//let myPerson: Person = new Person("John Lenon", "Nascimento da Silva", 28);
// console.log(myPerson.firstName);
// console.log(myPerson.lastName);
// console.log(myPerson.age);
// The console above won't work anymore due to data's nature. Now they're all private data and can't be accessed
// as public properties. Only the class's methods can have access to those values in there
//console.log(myPerson.getFullName()); // This works for being a public method with access to its parent's
// private properties
// Another way of creating a class is as follows:
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function (gender) {
        if (gender == 'female') {
            return this.firstName + " " + this.lastName + " and she " + this.age + " years";
        }
        if (gender == 'male') {
            return this.firstName + " " + this.lastName + " and he " + this.age + " years";
        }
        if (gender === undefined || gender === null) {
            return this.firstName + " " + this.lastName + " and it " + this.age + " years";
        }
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var myPerson = new Person('John', 'Nascimento', 28);
console.log('%c this is my class: ', 'font-size: 14px; color: purple;', myPerson.getFullName('male'));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        return _this;
    }
    Employee.prototype.getAge = function () {
        return _super.prototype.getAge.call(this); // Even though we're calling the getAge() using the super keyword, I won't have
        // Access to it due to the fact the inherited method is protected into the extended class, as above.
    };
    // Overriding a method defined within the extended class
    Employee.prototype.getFullName = function () {
        var theOnesAge = this.getAge();
        return "My manager's name is " + _super.prototype.getFullName.call(this, null) + "\n                She has " + this.getAge() + " years // This is one way of using protected method inherited from parent classes\n                Her id is " + this.id;
    };
    return Employee;
}(Person));
var manager = new Employee(1, 'Jane', 'Doe', 30);
console.log('%c My manager\'s name is: ', 'font-size: 14px; color: purple;', manager.getFullName(null)); // This will also be overridden
console.log('**************', manager.getFullName(null));
// manager.getAge(); // it won't work
// INTERFACES
// Obs: By convention is recommended to using the first character of an interface name as capital one, so as follows:
/*
interface IPerson {
    getFullName(): any;
}
*/
// Class using the interface above:
/*
class NewPerson implements IPerson {
    constructor(private name: string, private age: number, private id: number, private dateOfBirth: number[]) {
    }

    getFullName(): any {
        return `Name: ${this.name}
                Age: ${this.age}
                Id: ${this.id}
                Date of birth: ${this.dateOfBirth[0]}/${this.dateOfBirth[1]}/${this.dateOfBirth[2]}`;
    }
}

let newPersonVar: any = new NewPerson('John Nascimento', 28, 482252215, [01,02,1991]);
console.log('New person\'s name: ', newPersonVar.getFullName());
*/ 
