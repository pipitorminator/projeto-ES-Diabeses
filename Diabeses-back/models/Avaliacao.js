const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

var AvalicaoSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,

    }

);

AvalicaoSchema.plugin(unique, { message: '{PATH} já cadastrado' });
AvalicaoSchema.set('collection', 'Avalicao');

module.exports = mongoose.models.avalicao || mongoose.model('avalicao', AvalicaoSchema);