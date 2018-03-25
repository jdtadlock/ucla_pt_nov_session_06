var User = require('../models').user;
var multer = require('multer');
var path = require('path');
var upload = multer({ 
  dest: path.join(__dirname, '../public/images'),
  limits: {
    fileSize: 1000000
  } 
});

module.exports = function(app) {
  app.get('/', function(req, res) {
    User.findAll().then(function(users) {
      res.render('index', {users: users});
    });
  });

  app.post('/user', upload.single('image'), function(err, req, res) {
    console.log(err);
    User.create({
      name: req.body.name,
      image: `images/${req.file.filename}`
    }).then(function() {
      res.redirect('/');
    });
  });
}