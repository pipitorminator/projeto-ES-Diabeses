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

    async function userLogin(req, res) {
        try {
            await connectToDatabase();
            let user = await userSchema.find(
                {email: req.query.email,
                senha: req.query.senha}
            ).exec();
            
            console.log(user);
            res.status(httpStatus.Ok).json(user);

        } catch (e) {
            res.status(httpStatus.InternalServerError).send('Erro:' + e);
        }
    }

    return {
        getAll: getAll,
        userLogin: userLogin

    }

}

module.exports = userController;

