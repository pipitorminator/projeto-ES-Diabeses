const httpStatus = require('../../commons/http_status_codes');
const connectToDatabase = require('../../commons/database');
const mongoose      = require('mongoose');

var medicoClinicaController = function (medicoClinicaSchema) {

    async function getAll(req, res) {
        try {
            await connectToDatabase();

            let medicosClinicas = await medicoClinicaSchema.find().exec();

            res.status(httpStatus.Ok).json(medicosClinicas);

        } catch (e) {
            res.status(httpStatus.InternalServerError).send('Erro:' + e);
        }
    }

    return {
        getAll: getAll,

    }

}

module.exports = medicoClinicaController;

