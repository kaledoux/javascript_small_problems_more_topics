// Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:
// 
//     info: Logs the name and year of the student.
//     addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
//     listCourses: Returns a list of the courses student has enrolled in.
//     addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
//     updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
//     viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

const makeStudent = function(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(this.name + ' is a ' + this.year + ' student');
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      return this.courses;
    },
    addNote(courseCode,note) {
      const course = this.courses.filter(({code}) => courseCode === code)[0];

      if (course) {
        if (course.note) {
          course.note += '; ' + note;
        } else {
          course.note = note;
        }
      }
    },
    viewNotes() {
      this.courses.filter(course => course.note !== undefined).forEach(course => {
        console.log(course.name + ": " + course.note);
      });
    },
    updateNote(courseCode, newNote) {
      const course = this.courses.filter(({code}) => courseCode === code)[0];
      course.note = newNote;
    },
    
  };
}

foo = makeStudent('Foo', '1st');
// foo.info();
// console.log(foo.listCourses());
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
// console.log(foo.listCourses());
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
console.log(foo.listCourses());
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();
