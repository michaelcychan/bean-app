const mongoose = require('mongoose');
const businessCounter = require('./businessCounter.helper');

const Schema = mongoose.Schema;

const baristaSchema = new Schema({
  shopId: {
    type: Number,
    unique: true
  },
  shop_name: {
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
  shopLogo: {
    type: String,
  }
});

baristaSchema.pre('save', function (done){
  let doc = this;
  businessCounter.getSequenceNextValue("drinker_id")
    .then(counter => {
      console.log("counter number:", counter);
      if(!counter) {
        businessCounter.insertCounter("drinker_id")
          .then(counter => {
            doc.shopId = counter;
            console.log(doc);
            done(); 
          })
          .catch(error => done(error))
      } else {
        doc.shopId = counter;
        console.log(`doc: ${doc}`)
        done();
      }
    })
    .catch(error => done(error))
});

const Barista = mongoose.model('Barista', baristaSchema);
module.exports = Barista;