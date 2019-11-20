const httpStatus = require('../../commons/http_status_codes');
const connectToDatabase = require('../../commons/database');
const mongoose      = require('mongoose');

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
                {
                    Email: req.query.email,
                    Senha: req.query.senha
                }
            ).exec();

            console.log(user);
            res.status(httpStatus.Ok).json(user);

        } catch (e) {
            res.status(httpStatus.InternalServerError).send('Erro:' + e);
        }
    }

    async function cadastroUsuario(req, res) {
        try {
            await connectToDatabase();

            let newuser = new userSchema(req.body);
            newuser._id = new mongoose.Types.ObjectId();
            console.log(newuser)
            await newuser.save(function (err) {
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
        userLogin: userLogin,
        cadastroUsuario: cadastroUsuario

    }

}

module.exports = userController;

