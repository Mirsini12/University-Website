const mongoose = require("mongoose");

// Create journal Schema
const journalSchema = mongoose.Schema(
    {
        journalUrl: {
            type: String,
            required: true
          },

        title:{
            type:String,
            required:true},

        description:{
            type: String
        },

        image:{
            type: String
        }
    },
      {versionKey:false}
);

// Model
const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;