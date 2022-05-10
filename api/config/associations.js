const { Recruiters, Users, Searchs } = require('../models')

//Relations
Recruiters.hasMany(Searchs);
Searchs.belongsTo(Recruiters);

module.exports = {
    Users,
    Recruiters,
    Searchs
};