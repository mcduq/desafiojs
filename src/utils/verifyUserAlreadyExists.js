const { UserController } = require('../controllers/UserController');

async function verifyUserAlreadyExists(email) {
    try {
        console.log("entrou no verifyuseralreadyexist");
        const user = await UserController.findByEmail(email);
        
        console.log(user);
        console.log("user no verify");
        if (!user) {
            console.log("user false");
            throw new Error()
        }

        return {
            result: true,
            user
        }
    } catch (error) {
        console.log("user catch");
        console.log(error);

        return {
            result: false,
            user: null
        }
    }
};

module.exports = { verifyUserAlreadyExists };
