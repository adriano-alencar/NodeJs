'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATEONLY
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      /*associado a cliente*/
      ClienteId : {
        allowNull : false,
        type : Sequelize.INTEGER,
        references: {
          model:'clientes',
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      /*--------------------*/
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  }
};