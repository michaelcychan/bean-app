const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinkerCounterSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    required: true
  }
});

const DrinkerCounter = mongoose.model('DrinkerCounter', drinkerCounterSchema);

const getSequenceNextValue = (seqName) => {
  return new Promise((resolve, reject) => {
    DrinkerCounter.findByIdAndUpdate(
      { "_id": seqName},
      { "$inc": {"seq": 1}},
      (error, counter) => {
        if (error) {
          reject(error);
        }
        if (counter) {
          resolve(counter.seq + 1);
        } else {
          resolve(null); 
        }
      }
    )
  })
};

const insertCounter = (seqName) => {
  const newCounter = new DrinkerCounter({ _id: seqName, seq: 1});
  return new Promise((resolve, reject) => {
    newCounter.save()
      .then(data => {
        resolve(data.seq);
      })
      .catch(error => reject(error));
  });
}

module.exports = {DrinkerCounter, getSequenceNextValue, insertCounter};