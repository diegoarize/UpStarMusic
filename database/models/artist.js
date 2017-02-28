const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = require('./album');

mongoose.Promise = global.Promise;

const ArtistSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters'
    },
    required: [true, 'Name is required.']
  },
  age: Number,
  yearsActive: Number,
  image: {
    type: String,
    validate: {
      validator: (image) => isUrlValid(image) ,
      message: 'image url must be valid.'
    }
  },
  genre: String,
  website: {
    type: String,
    validate: {
      validator: (website) => isUrlValid(website) ,
      message: 'website url must be valid.'
    }
  },
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
