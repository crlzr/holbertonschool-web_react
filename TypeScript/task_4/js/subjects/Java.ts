/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    // Extend the existing Teacher interface to include the optional experienceTeachingC attribute
    export interface Teacher {
      experienceTeachingJava?: number;
    }

  export class Java extends Subject {

    getRequirements(): string {
        return 'Here is the list of requirements for Java'
    }

    getAvailableTeacher(): string {
        const teacher = this.teacher; // Access the teacher object
        if (teacher.experienceTeachingJava <= 0) {
          return 'No available Teacher';
        } else {
          return `Available Teacher: ${teacher.firstName}`;
        }
    }
  }
}