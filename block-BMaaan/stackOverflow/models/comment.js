var mongoose = require('mongoose');
var User = require('./user');
var Answer = require('./answer');
var question = require('./question');

var Schema = mongoose.Schema

var commentSchema = new Schema({
    content:{type:String,required:true},
    likes:{type:Number,default:0},
    owner:{type:Schema.Types.ObjectId,ref:'User'},
    questionId:{type:Schema.Types.ObjectId,ref:'Question'}
},{timestamps:true})

var Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;