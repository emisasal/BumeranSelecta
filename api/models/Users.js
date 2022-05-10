const { Model, DataTypes } = require("sequelize")
const db = require("../config/db")

const bcrypt = require("bcrypt")

class Users extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt)
  }
}

Users.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    sequelize: db,
    modelName: "users",
  }
)

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

module.exports = Users
