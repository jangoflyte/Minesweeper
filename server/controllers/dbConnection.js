const knex = require('knex');

const allKnexConfig = require('../knexfile.js');

const knexConfig = allKnexConfig[process.env.NODE_ENV || 'development'];

const dbConnection = knex(knexConfig)

module.exports = dbConnection;