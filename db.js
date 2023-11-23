const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://esgidb_user:N5PPhvkrgLUsYwcUk1yuJpZFmAG4UK01@dpg-clflcquf27hc739dg550-a.frankfurt-postgres.render.com/esgidb', // TODO: database connection string

  //require('varenv').config(),
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
