// interface Teacher {
//     readonly firstName: string;
//     readonly lastName: string;
//     fullTimeEmployee: boolean;
//     yearsOfExperience?: number;
//     location: string;
//     [key: string]: any;
// }

// interface Directors extends Teacher {
//     numberOfReports: number;
// }

// const teacher3: Teacher = {
//     firstName: 'John',
//     fullTimeEmployee: false,
//     lastName: 'Doe',
//     location: 'London',
//     contract: false,
//   };

//   const director1: Directors = {
//     firstName: 'John',
//     lastName: 'Doe',
//     location: 'London',
//     fullTimeEmployee: true,
//     numberOfReports: 17,
//   };
//   console.log(director1);

// interface printTeacherFunction {
//     firstName: string;
//     lastName: string;
// }

//   function printTeacher(firstName: string, lastName: string) {
//     return firstName[0] + '. ' + lastName
//   }
//   console.log(printTeacher('John', 'Doe'));

class StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');

console.log(student.workOnHomework()); // Output: "Currently working"
console.log(student.displayName());    // Output: "John"