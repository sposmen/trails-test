'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description Users Model
 */
module.exports = class User extends Model {

  static config () {
  }

  static schema () {
    return {
      username: 'string'
    }
  }
}
