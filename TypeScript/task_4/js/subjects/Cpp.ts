/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    // Extend the existing Teacher interface to include the optional experienceTeachingC attribute
    export interface Teacher {
      experienceTeachingC?: number;
    }

    export class Cpp extends Subject {

    getRequirements(): string {
        return 'Here is the list of requirements for Cpp'
    }

    getAvailableTeacher(): string {
        const teacher = this.teacher; // Access the teacher object
        if (teacher.experienceTeachingC <= 0) {
          return 'No available Teacher';
        } else {
          return `Available Teacher: ${teacher.firstName}`;
        }
    }
  }

}