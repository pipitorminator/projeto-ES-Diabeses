const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

var PrognosticoSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,

    }

);

PrognosticoSchema.plugin(unique, { message: '{PATH} já cadastrado' });
PrognosticoSchema.set('collection', 'Prognostico');

module.exports = mongoose.models.prognostico || mongoose.model('prognostico', PrognosticoSchema);