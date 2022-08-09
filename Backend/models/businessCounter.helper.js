const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessCounterSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    required: true
  }
});

const BusinessCounter = mongoose.model('BusinessCounter', businessCounterSchema);

const getSequenceNextValue = (seqName) => {
  return new Promise((resolve, reject) => {
    BusinessCounter.findByIdAndUpdate(
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
  const newCounter = new BusinessCounter({ _id: seqName, seq: 1});
  return new Promise((resolve, reject) => {
    newCounter.save()
      .then(data => {
        resolve(data.seq);
      })
      .catch(error => reject(error));
  });
}

module.exports = {BusinessCounter, getSequenceNextValue, insertCounter};