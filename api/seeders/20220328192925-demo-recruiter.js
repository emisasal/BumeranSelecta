"use strict"
const fakeRecruiters = require("./fake-recruiters.json")
const fakeSearchs = require("./fake-searchs.json")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("recruiters", fakeRecruiters, {});
    await queryInterface.bulkInsert("searchs", fakeSearchs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("recruiters", null, {});
    await queryInterface.bulkDelete("searchs", null, {});
  },
};

// Para seedear la base de datos (desde "/api"): npm run seed
