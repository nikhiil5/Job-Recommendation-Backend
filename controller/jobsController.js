const asynchandler = require("express-async-handler");
const Jobs = require("../models/jobsModel");

const getJoblist = asynchandler (async(req,res) => {
    try{
        const jobList = await Jobs.find();
        res.status(200).json({ jobList});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Error processing request' });
    }
});

const postJob = asynchandler (async(req,res) => {
    try {
        const {job_id,job_title,company,required_skills,location,job_type,experience_level} = req.body;
        if(!job_id || !job_title || !company || !required_skills || !location || !job_type ||  !experience_level){
            res.status(400);
            throw new Error("all fields are mandatory");
        }

        // create a new job posting
        const newJob = await Jobs.create({
            job_id,
            job_title,
            company,
            required_skills,
            location,
            job_type,
            experience_level
        });

        res.status(201).json({ newJob});
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error processing request' });
    }
});

const postJobs = asynchandler (async(req,res) => {
    try {
        const joblist = req.body;
        const newJobs = await Jobs.insertMany(joblist);     // insert multiple job postings
        res.status(201).json({ newJobs});
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error processing request' });
    }
});

module.exports = {getJoblist, postJob, postJobs};