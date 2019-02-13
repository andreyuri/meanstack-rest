const mongoose = require('mongoose');

module.exports = 
    // MongoDB connection
    mongoose.connect(
        `mongodb://meanstack:meanstack123@ds133865.mlab.com:33865/mean-stack`,
        { useNewUrlParser: true }
    );

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."