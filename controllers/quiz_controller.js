
var models = require('../models/models.js');


//Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
 	models.Quiz.find(quizId).then(
         function(quiz) {
			if (quiz) {
				req.quiz = quiz;
				next();
 			} else{ next(new Error('No existe quizId= ' + quizId));}
 		}
	).catch(function(error) { next(error)});
 }


 // GET /quizes
 exports.index = function(req, res) {

 //var search = '%'+req.query.search +'%';
       	  models.Quiz.findAll().then(
 		//models.Quiz.findAll({where: ["pregunta like ?", search], order: "pregunta ASC"}).then(
 		function (quizes) {
 		res.render('quizes/index.ejs', {quizes: quizes, errors: []});
 	}
 	).catch(function (error) {next(error)});
   };




 // GET /quizes/:id
 exports.show = function(req, res) {
 	models.Quiz.find(req.params.quizId).then(function(quiz) {
  	res.render('quizes/show', { quiz: req.quiz, errors: []});
})
     };





 //GET /quizes/:id/answer
 exports.answer = function(req, res) {
      	models.Quiz.find(req.params.quizId).then(function(quiz) {
 	if (req.query.respuesta === quiz.respuesta)  {
 	 	    res.render(
 	    	'quizes/answer',
 	    	{ quiz: req.quiz,
	    	  respuesta: 'correcto'});
	   	} else {  res.render(
 	    	'quizes/answer',
 	    	{ quiz: req.quiz,
	    	  respuesta: 'Incorrecto'});
        }
 	    })
 	};
