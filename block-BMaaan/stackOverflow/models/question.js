var mongoose = require('mongoose');
var User = require('./user');
var Comment = require('./comment');

var Schema = mongoose.Schema

var answerSchema = new Schema({
    question:{type:String,required:true},
    commentId: [{type:Schema.Types.ObjectId,ref:'Comment'}],
    upvotes:{type:Number,default:0},
    answerId:{type:Schema.Types.ObjectId,ref:'Answer'},
    owner:{type:Schema.Types.ObjectId,ref:'User'},
    views:{type:String,default:0},
    tags:[String]
},{timestamps:true})

var Question = mongoose.model('Question',questionSchema);
module.exports = Question;