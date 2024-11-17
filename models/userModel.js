const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please add the user name"],
    },
    skills: {
        type: [String],
        required: [true,"Please add the skills"],
    },
    experience_level:{
        type: String,
        required: [true,"Please add the experience level"],
    },
    preferences: {
        desired_roles: {
            type: [String],
            required: [true, "Please add at least one desired role"],
        },
        locations: {
            type: [String],
            required: [true, "Please add at least one preferred location"],
        },
        job_type: {
            type: String,
            required: [true, "Please specify a job type"],
        }
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("User",userSchema);