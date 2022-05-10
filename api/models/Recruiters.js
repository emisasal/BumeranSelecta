const { Model, DataTypes } = require("sequelize")
const db = require("../config/db")

class Recruiters extends Model {}

Recruiters.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description_rec: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    area_rec: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active_searchs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize: db,
    modelName: "recruiters",
  }
)

module.exports = Recruiters
