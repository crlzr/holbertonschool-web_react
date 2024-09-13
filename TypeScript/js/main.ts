import { loadPartialConfigAsync } from "@babel/core";

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 = {
    firstName: "Carole",
    lastName: "Meow",
    age: 30,
    location: "Melbourne",
};

const student2 = {
    firstName: "Koroll",
    lastName: "Miezz",
    age: 26,
    location: "Gosford",
};

let studentsList: Student[] = [student1, student2]

const table = document.createElement('table');

for (let value in studentsList) {
   document.createElement('td')
   table.append('firstname', 'location')
};
