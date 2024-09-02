'use strict';
const fs = require(`fs`).promises

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = await fs.readFile('./dbBasic.json', 'utf8')
    data = JSON.parse(data)
    data = data.map(e => {
      e.createdAt = new Date()
      e.updatedAt = new Date()
      return e
    })

    await queryInterface.bulkInsert('Basics', data, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Basics', null, {})
  }
};
