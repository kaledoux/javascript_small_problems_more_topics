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

const school = {
  students: [],
  addStudent(name, year) {
    if (!(['1st', '2nd', '3rd', '4th'].includes(year))) { 
      console.log('Invalid Year') 
    } else {
      let newStudent = makeStudent(name, year); 
      this.students.push(newStudent);
    }
  },
  enrollStudent(studentName, name, code) {
    let student = this.students.filter(({name}) => studentName === name)[0];
    let course = {
      name,
      code,
    };
    student.addCourse(course);
  },
  addGrade(studentName, courseCode, grade) {
    let course = this.students.filter(({name}) => name === studentName)[0]
                     .courses.filter(({code}) => code === courseCode)[0];
    course.grade = grade;
  },
  getReportCard(studentName) {
    let student = this.students.filter(({name}) => name === studentName)[0];
    console.log(student);
    student.listCourses().forEach(({name, grade}) => {
      if (grade) {
        console.log(`${name} : ${grade}`);
      } else {
        console.log(`${name} : In Progress`);
      }
    });
  },
  courseReport(courseCode) {
    this.students.forEach(student => {
      console.log(student);
      let course = student.listCourses().filter(({code}) => code === courseCode)[0];

    });

  },
  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(({name}) => name === courseName)[0];
    }

    const courseStudents = this.students.map(student => {
      const course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(({grade}) => grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`);

      const average = courseStudents.reduce((total, {name, grade}) => {
        console.log(`${name}: ${String(grade)}`);
        return total + grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
}

