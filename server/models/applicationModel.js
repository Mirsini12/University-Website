const mongoose = require("mongoose");
const validator=require("validator")
// Create application Schema
const applicationSchema = mongoose.Schema(
    {
        vacancyId: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            validate:{
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email',
                 isAsync: false
            }
        },
        cv: {
            type: String,
            
        },

        statement: {
            type: String,
            required:true
        }
    },
    { versionKey: false }
);

// Model
const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;