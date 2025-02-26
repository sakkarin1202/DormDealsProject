const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const PostSchema = new Schema({
    postType: {
        type: String,
        enum: ['Want To Buy', 'Want To Sell'],
        required: true,
    },
    productName: {
        type: String,
        required: true,
      },
    category: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
      },
    price: {
        type: Number,
        required: true,
      },
    description: {
        type: String,
        required: true,
      },
      condition: {
        type: String,
        enum: ['มือสองสภาพดี', 'มือสองพอใช้'],
        required: true,
      },
    
},
{
    timestamps: true,
})
const PostModel = model("Post",PostSchema);
module.exports = PostModel