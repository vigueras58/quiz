// GET /quizes/new
exports.question = function(req, res) {
  res.render('quizes/question', {pregunta: 'capital de Italia'});
};

  exports.answer = function(req, res) {
if(req.query.respuesta==='Roma'){
res.render('quizes/answer', {respuesta: 'correcto'});
}
else {
  res.render('quizes/answer', { respuesta: 'incorrecto'});
}
};
