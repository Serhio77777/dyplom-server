const config = {
    web: {
      port: process.env.PORT || 3141
    },
    sqlDB:  {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'dyplom'
    }
  }
  
  module.exports = config
  