'use strict'

const winston = require('winston')

module.exports = {

  trailpack: {
    disabled: [
      'repl'
    ]
  },

  database:{
    stores: {
      prod: {
        adapter: require('sails-mongo'),
        migrate: 'safe',
        host: '192.168.99.1'
      }

    },
    models: {
      defaultStore: 'prod',
      migrate: 'safe'
    }
  },

  // gulp : {
  //   defaultTaskName : 'default'
  // },

  log: {
    logger: new winston.Logger({
      level: 'info',
      exitOnError: false,
      transports: [
        new winston.transports.Console({
          timestamp: true
        }),
        new winston.transports.File({
          name: 'info-file',
          level: 'info',
          filename: 'trails-info.log',
          timestamp: true
        }),
        new winston.transports.File({
          name: 'error-file',
          level: 'error',
          filename: 'trails-error.log',
          timestamp: true
        })
      ]
    })
  }

}
