const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

var MedicoClinicaSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,

    }

);

MedicoClinicaSchemaSchema.plugin(unique, { message: '{PATH} já cadastrado' });
MedicoClinicaSchema.set('collection', 'MedicoClinica');

module.exports = mongoose.models.medicoClinica || mongoose.model('medicoClinica', MedicoClinicaSchema);