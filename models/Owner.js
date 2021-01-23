const { Model } = require('objection')
const database = require('./database-connection')
Model.knex(database)

const Dog = require('./Dog')

module.exports = class Owner extends Model {
  static get tableName() {
    return 'owner';
  }

  static relationMappings = {
    dogs: {
      modelClass: Dog,
      relation: Model.ManyToManyRelation,
      join: {
        from: 'owner.id',
        through: {
          from: 'dog_owner.owner_id',
          to: 'dog_owner.dog_id'
        },
        to: 'dog.id'
      }
    }
  }
}
