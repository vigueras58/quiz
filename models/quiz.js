
module.exports = function(sequalize, DataTypes){
return sequalize.define('Quiz', {pregunta: DataTypes.STRING,
respuesta: DataTypes.STRING,});
}
