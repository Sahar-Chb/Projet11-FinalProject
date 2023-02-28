const mongoose = require('mongoose');

const Client = mongoose.model('Client', {
  
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true,
  },

  entreprise: {
    type: String,
    required: true
  },

  titreprojet: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

})

module.exports = Client;