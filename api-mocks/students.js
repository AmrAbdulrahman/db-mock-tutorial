module.exports = function(app, db) {
  // show
  app.get('/students/:id', function(req, res) {
    res.send(db.student.get(req.params.id));
  });

  // list
  app.get('/students', function(req, res) {
    res.send(db.student.list());
  });

  // create
  app.post('/students', function(req, res) {
    res.send(db.student.add(req.body));
  });

  // update
  app.put('/students/:id', function(req, res) {
    res.send(db.student.update(req.body));
  });

  // delete
  app.delete('/students/:id', function(req, res) {
    res.send(db.student.delete(req.params.id));
  });

  // list students of specific course
  app.get('/courses/:courseID/students', function(req, res) {
    var courseID = _.parseInt(req.params.courseID);

    res.send(db.student.query(function(student) {
      return student.course_IDs.indexOf(courseID) !== -1;
    }));
  });
};
