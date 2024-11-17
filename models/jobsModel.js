const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema({
    job_id: {
        type: Number,
        unique: true,
        required: [true, "Job ID is required"]
    },
    job_title:{
        type: String,
        required: [true,"Please add the job title"],
    },
    company: {
        type: String,
        required: [true,"Please add the company name"],
    },
    required_skills: {
        type: [String],
        required: [true,"Please add the required skills"],
    },
    location: {
        type: String,
        required: [true, "Please add the job location"],
    },
    job_type: {
        type: String,
        required: [true, "Please specify a job type"],
    },
    experience_level:{
        type: String,
        required: [true,"Please add the experience level"],
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("Jobs",jobsSchema);