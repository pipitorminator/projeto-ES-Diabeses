const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        nome: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        email: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        senha: {type:String, required: [true, '{PATH} é um campo obrigatório']},
    }

);

userSchema.plugin(unique, { message: '{PATH} já cadastrado' });
userSchema.set('collection', 'User');

module.exports = mongoose.models.user || mongoose.model('user', userSchema);