

// INTERFACES
// Obs: By convention is recommended to using the first character of an interface name as capital one, so as follows:
interface IPerson {
    getFullName(): any;
}

// Class using the interface above:

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



// Creating an usable interface to minimize your work
// This is the old way of doing this. Much noisier syntax
/*function printMovieDetails(movie: { title: string, runtime: number }) {
    console.log(`Movie Title: ${movie.title} and Movie Runtime: ${movie.runtime}`);
}

function printMovieName(movie: { title: string, runtime: number}) {
    console.log(`Movie name: ${movie.title}`);
}

printMovieDetails({ title: `The Godfather`, runtime: 180 });
printMovieName({ title: `The Godfather`, runtime: 180 });
*/

// The cutting edge way of doing it.
// Cleaner syntax.
interface IMovie {
    title: string;
    runtime: number;
}

function printMovieDetails(movie: IMovie) {
    console.log(`Movie Title: ${movie.title} and Movie Runtime: ${movie.runtime}`);
}

function printMovieName(movie: IMovie) {
    console.log(`Movie name: ${movie.title}`);
}

printMovieDetails({ title: `The Godfather`, runtime: 180 });
printMovieName({ title: `The Godfather`, runtime: 180 });