const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

var DicasSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,

    }

);

DicasSchema.plugin(unique, { message: '{PATH} já cadastrado' });
DicasSchema.set('collection', 'Dicas');

module.exports = mongoose.models.dicas || mongoose.model('dicas', DicasSchema);