var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    username:String,
    email:String,
    address:{
        city:String,
        state:String,
        country:String,
        pin:Number
    }
})

userSchema.index({username:1,unique:true});
userSchema.index({email:1,unique:true});
userSchema.index({country:1,state:1,unique:true});

var User = mongoose.model('User',userSchema)
module.exports = User;





// name
// username
// email
// address {
// city
// state
// country
// pin }