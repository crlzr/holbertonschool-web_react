/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    // Extend the existing Teacher interface to include the optional experienceTeachingC attribute
    export interface Teacher {
      experienceTeachingReact?: number;
    }

    export class React extends Subject {

    getRequirements(): string {
        return 'Here is the list of requirements for React'
    }

    getAvailableTeacher(): string {
        const teacher = this.teacher; // Access the teacher object
        if (teacher.experienceTeachingReact <= 0) {
          return 'No available Teacher';
        } else {
          return `Available Teacher: ${teacher.firstName}`;
        }
    }
  }
}