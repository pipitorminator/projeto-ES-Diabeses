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

    async function cadastroMedicoClinica(req, res) {
        try {
            await connectToDatabase();

            let medicoClinica = new medicoClinicaSchema(req.body);
            medicoClinica._id = new mongoose.Types.ObjectId();
            medicoClinica.Avaliacao = 0;
            console.log(medicoClinica);

            await medicoClinica.save(function (err) {
                if (err) {
                  res.status(httpStatus.InternalServerError).send('Erro:' + err);
                }
                else {
                  res.status(httpStatus.Created).end();
                }
              });

        } catch (e) {
            res.status(httpStatus.InternalServerError).send('Erro:' + e);
        }
    }

    return {
        getAll: getAll,
        cadastroMedicoClinica: cadastroMedicoClinica,

    }

}

module.exports = medicoClinicaController;

