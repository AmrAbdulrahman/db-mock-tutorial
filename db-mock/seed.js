var _ = require('lodash');

module.exports = function(db) {
  var studentsCount = 50,
      coursesCount = 10,
      studentCoursesCount = 5,
      courseStudentsCount = 20,
      students = [],
      courses = [];

  // create some courses
  _.times(coursesCount, function(courseNumber) {
    var course = db.course.add({
      name: 'course ' + courseNumber,
      description: 'course description ' + courseNumber,
    });

    courses.push(course);
  });

  // create some students
  _.times(studentsCount, function(studentNumber) {
    // create stuent profile
    var studentProfile = db.profile.add({
      phone: '012221343443',
      address: 'address of student ' + studentNumber
    });

    var studentCoursesIDs = [];
    _.times(studentCoursesCount, function() {
      studentCoursesIDs.push(_.random(0, courses.length - 1));
    });

    var student = db.student.add({
      name: 'student name ' + studentNumber,
      dateOfBirth: new Date(),
      profile_ID: studentProfile.ID,
      course_IDs: studentCoursesIDs
    });

    students.push(student);
  });

  // assign students to courses
  _.each(courses, function(course) {
    var courseStudentsIDs = [];
    _.each(courseStudentsCount, function() {
      courseStudentsIDs.push(_.random(0, students.length - 1));
    });

    course.student_IDs = courseStudentsIDs;
    db.course.update(course);
  });
};
