const mongoose = require("mongoose");

// Create admin Schema
const adminSchema = mongoose.Schema(
    {
       

        username: {
            type: String,
            required: true
          },

        password:{
            type:String,
            minlength: 6,
            required:true
        },

        status:{
            type: String
        },

        type:{
            type: String,
            enum:["Admin","User"]
            
        },

        date:{
            type:String
        }
    },
      {versionKey:false}
);

// Model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

// Admin.create({
//     type:"Admin",
//     username:"admin-def",
//     password:"123456",
//     status:"Active",
//     date: new Date()
// })