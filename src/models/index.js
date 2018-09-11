import Sequelize from 'sequelize';

const sequelize = new Sequelize('test', 'postgres', 'postgres', {
    dialect: 'postgres',
  });

const models = {
    Data: sequelize.import('./data'),
};

models.sequelize = sequelize;

export default models;