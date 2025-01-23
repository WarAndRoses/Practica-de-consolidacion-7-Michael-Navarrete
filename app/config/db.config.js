//db.config.js
module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 'admin',
  DB: 'db_bootcamp',
  dialect: 'postgres',
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}