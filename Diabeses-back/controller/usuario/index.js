const httpStatus = require('../../commons/http_status_codes');
const errors = require('../../commons/errors');
const connectToDatabase = require('../../commons/database');

var userController = function (userSchema) {

    async function getAll(req, res) {
        try {
            await connectToDatabase();

            let users = await userSchema.find().exec();
            
            res.status(httpStatus.Ok).json(users);

        } catch (e) {
            res.status(httpStatus.InternalServerError).send('Erro:' + e);
        }
    }

    return {
        getAll: getAll,

    }

}

module.exports = userController;

