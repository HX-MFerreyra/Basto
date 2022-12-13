'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const Mixed = mongoose.Schema.Types.Mixed;

const AnimalSchema = new Schema({
    typeOfAnimal: {
        type: String,
        enum: ['novillo', 'toro','vaquillona', 'ternero'],
        required: true
    },
    weight: Number,
    nameOfPotrero: {
        type: String,
        required:true
    },
    deviceType: {
        type: String,
        enum: ['collar', 'caravana'],
        required: true
    },
    deviceNumber: {
        type: Mixed,
        required: true
    }
},  {versionKey: false}
)

module.exports = mongoose.model('Animals', AnimalSchema);
