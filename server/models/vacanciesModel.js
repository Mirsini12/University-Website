const mongoose = require("mongoose");

// Create vacancy Schema
const vacancySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String
        },

       
    },
    
    
    { versionKey: false }
);

// Model
const Vacancy = mongoose.model("Vacancy", vacancySchema);

module.exports = Vacancy;