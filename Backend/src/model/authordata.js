const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.uhxeb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewauthorSchema = new Schema({
    title : String,
    year : String,
    genre : String,
    image : String
});

var Authordata = mongoose.model('authordata', NewauthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;