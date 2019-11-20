const httpStatus = require('../../commons/http_status_codes');
const connectToDatabase = require('../../commons/database');
const mongoose      = require('mongoose');

var avaliacaoController = function (avaliacaoSchema) {

    async function getAll(req, res) {
        try {
            await connectToDatabase();

            let avaliacoes = await avaliacaoSchema.find().exec();

            res.status(httpStatus.Ok).json(avaliacoes);

        } catch (e) {
            res.status(httpStatus.InternalServerError).send('Erro:' + e);
        }
    }

    return {
        getAll: getAll,

    }

}

module.exports = avaliacaoController;

