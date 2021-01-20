// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
          database: 'dogparkobjection',
          user:     'postgres',
          password: 'postgres_password'
        },
  },

  // development: {
  //   client: 'pg',
  //   connection: 'postgresql:///dogparkobjection',
  //   password: 'postgres_password'
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
