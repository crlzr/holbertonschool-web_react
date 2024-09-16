interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Work from home'
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks'
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home'
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work'
    }

}

// Function to create instances of Director or Teacher based on salary
const createEmployee = (salary: number | string): Director | Teacher => {
    let numericSalary: number;

    if (typeof salary === 'string') {
        numericSalary = parseFloat(salary.replace('$', ''));
    } else if (typeof salary === 'number') {
        numericSalary = salary;
    } else {
        throw new Error('Invalid salary type');
    }

    if (numericSalary >= 500) {
        return new Director();
    } else {
        return new Teacher();
    }
};

// Function specific to employees
function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function
function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Create instances
const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);

// Example usages
console.log(executeWork(employee1));
console.log(executeWork(employee2));

// Define the union type for Subjects
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Unknown subject'; 
  }
}

// Example usages
console.log(teachClass('Math'));
console.log(teachClass('History'));
