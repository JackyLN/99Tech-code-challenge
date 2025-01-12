'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Guests',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          arriveDate: '2024-01-01',
          departDate: '2024-01-10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          arriveDate: '2024-02-01',
          departDate: '2024-02-10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Alice',
          lastName: 'Johnson',
          email: 'alice.johnson@example.com',
          arriveDate: '2024-03-01',
          departDate: '2024-03-10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Guests', null, {});
  },
};
