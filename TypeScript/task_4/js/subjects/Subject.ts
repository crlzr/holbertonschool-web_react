/// <reference path = "./Teacher.ts" />

namespace Subjects {
    export class Subject {
      teacher: Teacher; // Attribute of type Teacher

      // Setter method to update the teacher
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }
