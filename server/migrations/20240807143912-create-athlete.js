'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Athletes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      athlete_Rank: {
        type: Sequelize.INTEGER
      },
      athlete_name: {
        type: Sequelize.STRING
      },
      athlete_GAL: {
        type: Sequelize.STRING
      },
      athlete_Country: {
        type: Sequelize.STRING
      },
      athlete_Points: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Athletes');
  }
};