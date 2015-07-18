
var models = require ('../models/models.js');


// GET /quizes/new
exports.question = function(req, res) {
  models.Quiz.findAll().success(function(quiz) {res.render('quizes/question',{pregunta: quiz[0].pregunta})
  })
};

  exports.answer = function(req, res) {
  models.Quiz.findAll().success(function(quiz) {
if(req.query.respuesta === quiz[0].pregunta){
res.render('quizes/answer', {respuesta: 'correcto'});
}
else {
  res.render('quizes/answer', { respuesta: 'incorrecto'});
}
})
};
