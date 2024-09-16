interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Carole",
    lastName: "Meow",
    age: 30,
    location: "Melbourne",
};

const student2: Student = {
    firstName: "Koroll",
    lastName: "Miezz",
    age: 26,
    location: "Gosford",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const headerRow = table.insertRow(); // Create header row
const headerCell1 = headerRow.insertCell();
const headerCell2 = headerRow.insertCell();

headerCell1.textContent = "First Name";
headerCell2.textContent = "Location";

studentsList.forEach(student => {
    const tr = document.createElement('tr');

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.textContent = student.firstName;
    td2.textContent = student.location;

    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr); // Append the row to the table
});

document.body.appendChild(table); // Append the table to the document body
