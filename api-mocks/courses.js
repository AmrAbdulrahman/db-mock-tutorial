module.exports = function(app, db) {
  // show
  app.get('/courses/:id', function(req, res) {
    res.send(db.course.get(req.params.id));
  });

  // list
  app.get('/courses', function(req, res) {
    res.send(db.course.list());
  });

  // create
  app.post('/courses', function(req, res) {
    res.send(db.course.add(req.body));
  });

  // update
  app.put('/courses/:id', function(req, res) {
    res.send(db.course.update(req.body));
  });

  // delete
  app.delete('/courses/:id', function(req, res) {
    res.send(db.course.delete(req.params.id));
  });

  app.get('/students/:studentID/courses', function(req, res) {
    var studentID = _.parseInt(req.params.studentID);

    res.send(db.course.query(function(course) {
      return student.student_IDs.indexOf(studentID) !== -1;
    }));
  });
};
