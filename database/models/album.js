const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.']
  },
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: {
    type: String,
    validate: {
      validator: (image) => isUrlValid(image) ,
      message: 'image url must be valid.'
    }
  },
  revenue: Number
});

export var isUrlValid = (url) => {
  var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(res == null)
      return false;
  else
      return true;
}

module.exports = AlbumSchema;
