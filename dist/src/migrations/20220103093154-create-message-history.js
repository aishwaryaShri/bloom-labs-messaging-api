'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('MessageHistories', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			message_uuid: {
				type: Sequelize.UUID,
				allowNull: false,
				defaultValue: Sequelize.UUIDV4
			},
			member_token: {
				allowNull: true,
				type: Sequelize.STRING
			},
			phone_number: {
				allowNull: true,
				type: Sequelize.STRING
			},
			country_code: {
				allowNull: true,
				type: Sequelize.STRING
			},
			email: {
				allowNull: true,
				type: Sequelize.STRING
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			description: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			type: {
				allowNull: false,
				type: Sequelize.STRING
			},
			message_purpose: {
				allowNull: true,
				type: Sequelize.STRING
			},
			email_content: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			created_by: {
				allowNull: true,
				type: Sequelize.STRING
			},
			status: {
				allowNull: true,
				type: Sequelize.STRING
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
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('MessageHistories');
	}
};