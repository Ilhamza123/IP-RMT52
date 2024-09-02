'use strict';
const {hashPassword} = require('../helpers/bcrypt')
const fs = require(`fs`).promises

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = await fs.readFile('./dbUser.json', 'utf8')
    data = JSON.parse(data)
    data = data.map(e => {
      delete e.id
      e.password = hashPassword(e.password)
      e.createdAt = new Date()
      e.updatedAt = new Date()
      return e
    })

    await queryInterface.bulkInsert('Users', data, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};