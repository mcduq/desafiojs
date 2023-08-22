const { hashPassword } = require("../services/encryptPassword");

function validarUser(user){
    console.log("validando ");
    return Object.values(user).every(values=> value !== null && value !== '' && value !== undefined)
}

async function userCreationAdapter(req, res, next) {
    const { user } = req.body;
    console.log("no creations dois ");
    debugger;
    console.log(user);
    validarUser(user)
   
    debugger;
     console.log(Object.values(user));
    if(!user){
        return res.status(400).end();
    }

    const encryptedUser = null;

    req.encryptedUser = encryptedUser;

    next();
}

module.exports = { userCreationAdapter }
