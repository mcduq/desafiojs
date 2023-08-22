const UserModel = require('../models/user');

class UserController {

  static async createUser(createUser) {
    try {
      return await UserModel.create(createUser);
    } catch (error) {
      throw error;
    }
  }

  static async findByEmail(email) {
    try {      
      console.log("entrou no findByEmail o user é ");
      let user = await UserModel.findOne({
        where: { email: email }
      });
      console.log(user);
      if(user===null||user===undefined){
        user='';
        console.log(user);
        console.log("asdadads");
      }
      return user;
    } catch (error) {
     // return user='';
      throw error;
    }
  }

  static async findById(id) {
    try {
      const user = await UserModel.findOne({
        where: { id }
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUserInfo(id, updatedUser) {
    const { firstName, lastName, password } = updatedUser;

    const updatedAt = new Date().toUTCString();

    try {
      await UserModel.update(
        {
          firstName,
          lastName,
          password,
          updatedAt
        },
        { where: { id } }
      )
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(id) {
    try {
      const result = await UserModel.destroy({
        where: { id }
      })

      if (result === 0) throw new Error()

    } catch (error) {

      throw error;
    }
  }
}

module.exports = { UserController }
