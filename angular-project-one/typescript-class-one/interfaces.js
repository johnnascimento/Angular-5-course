// Class using the interface above:
var NewPerson = /** @class */ (function () {
    function NewPerson(name, age, id, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.dateOfBirth = dateOfBirth;
    }
    NewPerson.prototype.getFullName = function () {
        return "Name: " + this.name + "\n                Age: " + this.age + "\n                Id: " + this.id + "\n                Date of birth: " + this.dateOfBirth[0] + "/" + this.dateOfBirth[1] + "/" + this.dateOfBirth[2];
    };
    return NewPerson;
}());
var newPersonVar = new NewPerson('John Nascimento', 28, 482252215, [01, 02, 1991]);
console.log('New person\'s name: ', newPersonVar.getFullName());
function printMovieDetails(movie) {
    console.log("Movie Title: " + movie.title + " and Movie Runtime: " + movie.runtime);
}
function printMovieName(movie) {
    console.log("Movie name: " + movie.title);
}
printMovieDetails({ title: "The Godfather", runtime: 180 });
printMovieName({ title: "The Godfather", runtime: 180 });
