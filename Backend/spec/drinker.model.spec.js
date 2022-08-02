const mongoose = require('mongoose');
require('./mongodb_helper');
const Drinker = require('../models/drinker.model');

describe('Drinker', () => {
  beforeEach((done) => {
    mongoose.connection.collection('drinkers').deleteMany({}, () => {
      done();
    });
  });

  it('adds a drinker', (done) => {
    const req = {
      body: {
        firstname: 'First',
        lastname: 'Last',
        email: 'brewer@coffee.net',
        password: 'inputPassword',
      }
    }
    hashedPassword = 'SupposedlyHashed'
    const newDrinker = new Drinker({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      bean_count: 0
    });
    newDrinker.save((error, result) => {
      expect(error).toBeNull();

      Drinker.find((error, drinkers) => {
        expect(error).toBeNull();
        expect(drinkers[0]).toMatchObject({
          firstname: 'First',
          lastname: 'Last',
          email: 'brewer@coffee.net',
          password: 'SupposedlyHashed',
          bean_count: 0
        });
        done();
      })
    })
  })
})