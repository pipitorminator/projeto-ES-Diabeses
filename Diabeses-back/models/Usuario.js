const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        NomeUsuario: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Email: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Senha: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Telefone: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        cpf: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Sexo: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Estado: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Cidade: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Bairro: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Rua: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Numero: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Complemento: {type:String, required: [true, '{PATH} é um campo obrigatório']},
    }

);

userSchema.plugin(unique, { message: '{PATH} já cadastrado' });
userSchema.set('collection', 'User');

module.exports = mongoose.models.user || mongoose.model('user', userSchema);