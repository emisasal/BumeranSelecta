const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");


class Recruiters extends Model {

}
//tipos de datos text y array
Recruiters.init(
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
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
            defaultValue: 0

        },

    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
        modelName: "recruiters", // We need to choose the model name
    }
);


// the defined model is the class itself
module.exports = Recruiters;