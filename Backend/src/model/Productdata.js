const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.uhxeb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
});

var Productdata = mongoose.model('bookdata', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Productdata;