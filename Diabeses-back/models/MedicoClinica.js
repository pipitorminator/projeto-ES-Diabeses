const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

var MedicoClinicaSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        NomeClinicaMedico: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Estado: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Cidade: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Bairro: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Rua: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Numero: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Descricao: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Tipo: {type:String, required: [true, '{PATH} é um campo obrigatório']},
        Avaliacao: {type:Number, required: [true, '{PATH} é um campo obrigatório']},
    }

);

MedicoClinicaSchema.plugin(unique, { message: '{PATH} já cadastrado' });
MedicoClinicaSchema.set('collection', 'MedicoClinica');

module.exports = mongoose.models.medicoClinica || mongoose.model('medicoClinica', MedicoClinicaSchema);