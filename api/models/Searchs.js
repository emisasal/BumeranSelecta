const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");


class Searchs extends Model {


}

Searchs.init(
    {
        // Model attributes are defined here
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area_search: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description_search: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vacancies: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state_search: {
            type: DataTypes.STRING,
            defaultValue: "Nueva"
        },
        lapse_search: {
            type: DataTypes.STRING
        },
        candidates: {
            type: DataTypes.INTEGER,
        },
        start_date: {
            type: DataTypes.STRING,
            defaultValue: "No definida"
        },
        end_date: {
            type: DataTypes.STRING,
            defaultValue: "No definida"
        }
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
        modelName: "searchs", // We need to choose the model name
    }
);

Searchs.addHook('beforeCreate', search => {
    search.candidates=(Math.random() * 15).toFixed(0);
});


// the defined model is the class itself
module.exports = Searchs;