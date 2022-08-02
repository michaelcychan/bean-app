const mongoose = require('mongoose');
require('./mongodb_helper');
const Drinker = require('../models/drinker.model');
const bcrypt = require('bcrypt');

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
      });
    });
  });

  it('creates a user, mocks bcrypt', (done) => {
    jest.spyOn(bcrypt, 'hash').mockImplementation((password, saltRounds, cb) => cb(null, 'mockHashedPassword'));
    const req = {
      body: {
        firstname: 'First',
        lastname: 'Last',
        email: 'brewer@coffee.net',
        password: 'inputPassword',
      }
    }
    bcrypt.hash(req.body.password, 5, function(err, hashedPassword) {
      const newDrinker = new Drinker({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
        bean_count: 0
      });

      newDrinker.save((error) => {
        expect(error).toBeNull();

        Drinker.find((error, drinkers) => {
          expect(error).toBeNull();
          expect(drinkers[0]).toMatchObject({
            firstname:  'First',
            lastname: 'Last',
            email: 'brewer@coffee.net',
            password: 'mockHashedPassword',
            bean_count: 0
          });
          done();
        });
      });
    });
  });
  it('adds a loyalty bean to a drinker', (done) => {
    
    // creating a new drinker for testing
    const req = {
      body: {
        firstname: 'First',
        lastname: 'Last',
        email: 'drinker@coffee.net',
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
    newDrinker.save((err) => {
      expect(err).toBeNull();


      // Barista Controller path - adding 1 to bean_count using email
      Drinker.findOneAndUpdate(
        {email: 'drinker@coffee.net'},
        {$inc: {bean_count: 1}},
        (error) => {
          expect(error).toBeNull();

          // confirm the bean_count has increased by 1
          Drinker.find({email: 'drinker@coffee.net'}, (error, drinkers) => {
            expect(error).toBeNull();
            expect(drinkers[0].email).toEqual('drinker@coffee.net');
            expect(drinkers[0].bean_count).toEqual(1);
            
          });
          done();
        }
      )
    })
  }),
  it('uses beans to redeem a drink', (done) => {
    
    // creating a new drinker with 10 beans for testing
    const req = {
      body: {
        firstname: 'Ten',
        lastname: 'Beans',
        email: 'ten@beans.net',
        password: 'inputPassword',
      }
    }
    hashedPassword = 'SupposedlyHashed'
    const newDrinker = new Drinker({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      bean_count: 10
    });
    newDrinker.save((err) => {
      expect(err).toBeNull();


      // Barista Controller path - deducting 10 beans for a free drink
      Drinker.findOneAndUpdate(
        {email: 'ten@beans.net'},
        {$inc: {bean_count: -10}},
        (error) => {
          expect(error).toBeNull();

          // confirm the bean_count has decreased from 10 to 0
          Drinker.find({email: 'ten@beans.net'}, (error, drinkers) => {
            expect(error).toBeNull();
            expect(drinkers[0].email).toEqual('ten@beans.net');
            expect(drinkers[0].bean_count).toEqual(0);
            
          });
          done();
        }
      )
    })
  })
})