const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

const bcrypt = require("bcrypt")

class Users extends Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt)
      }
}
//agregar los campos , tipo de dato fecha 
Users.init(
    {
        //Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {

                min: 8
            },
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        salt: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
        },
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
        modelName: "users", // We need to choose the model name
    }
);

Users.beforeCreate(user => {
    return bcrypt
      .genSalt(16)
      .then(salt => {
        user.salt = salt
        return user.hash(user.password, salt)
      })
      .then(hash => {
        user.password = hash
      })
  })


// the defined model is the class itself
module.exports = Users;