'use strict';
var mongoose = require('mongoose');
// schema
var UserSchema = require('./schema/User');
var CommentSchema = require('./schema/Comment');
var ThreadSchema = require('./schema/Thread');
var ThreadRangeSchema = require('./schema/ThreadRange');
var MessageSchema = require('./schema/Message');
var QuestionSchema = require('./schema/Question');
// model
var userModel = mongoose.model('User', UserSchema);
var commentModel = mongoose.model('Comment', CommentSchema);
var threadRangeModel = mongoose.model('ThreadRange', ThreadRangeSchema);
var threadModel = mongoose.model('Thread', ThreadSchema);
var messageModel = mongoose.model('Message', MessageSchema);
var questionModel = mongoose.model('Question', QuestionSchema);
    
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/tesladb', function(err){
    if(err){
        throw err;
    }
});

module.exports = {
    user: userModel,
    comment: commentModel,
    threadRange: threadRangeModel,
    thread: threadModel,
    message: messageModel,
    questions: questionModel
};
