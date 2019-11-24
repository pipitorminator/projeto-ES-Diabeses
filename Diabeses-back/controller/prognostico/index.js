const httpStatus = require('../../commons/http_status_codes');
const connectToDatabase = require('../../commons/database');
const mongoose      = require('mongoose');

var prognosticoController = function (prognosticoSchema) {

    async function getAll(req, res) {
        try {
            await connectToDatabase();

            let prognosticos = await prognosticoSchema.find().exec();

            res.status(httpStatus.Ok).json(prognosticos);

        } catch (e) {
            res.status(httpStatus.InternalServerError).send('Erro:' + e);
        }
    }

    return {
        getAll: getAll,

    }

}

module.exports = prognosticoController;

