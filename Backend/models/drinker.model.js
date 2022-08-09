const mongoose = require('mongoose');
const drinkercounter = require('./drinkercounter.helper');

const Schema = mongoose.Schema;

const drinkerSchema = new Schema({
  drinker_id: {
    type: Number,
    unique: true
  },
  firstname: {
    type: String,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  bean_counts: {
    type: Array,
  }
});

drinkerSchema.pre('save', function (done){
  let doc = this;
  drinkercounter.getSequenceNextValue("drinker_id")
    .then(counter => {
      console.log("counter number:", counter);
      if(!counter) {
        drinkercounter.insertCounter("drinker_id")
          .then(counter => {
            doc.drinker_id = counter;
            console.log(doc);
            done(); 
          })
          .catch(error => done(error))
      } else {
        doc.drinker_id = counter;
        console.log(`doc: ${doc}`)
        done();
      }
    })
    .catch(error => done(error))
});

const Drinker = mongoose.model('Drinker', drinkerSchema);
module.exports = Drinker;