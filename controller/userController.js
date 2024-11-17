const asynchandler = require("express-async-handler");
const Users = require("../models/userModel");
const Jobs = require("../models/jobsModel");

const getUsers = asynchandler(async(req,res) => {
    try{
        const userList = await Users.find();
        res.status(200).json({ userList});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Error processing request' });
    }
});

const getrecommendations = asynchandler(async(req,res) => {
    try {
        const {name,skills,experience_level,preferences} = req.body;
        if(!name || !skills || !experience_level || !preferences){
            res.status(400);
            throw new Error("all fields are mandatory");
        }

        // creates a new user
        const newUser = await Users.create({
            name,
            skills,
            experience_level,
            preferences
        });

        // query to recommend jobs based on the user profile
        const query = {
            job_type: preferences.job_type,
            experience_level: experience_level,
            location: { $in: preferences.locations },
            job_title: { $in: preferences.desired_roles },
            required_skills: { $in: skills }
        };

        // filter out the required attributes
        const result = await Jobs.find(query, {
            job_title: 1,
            company: 1,
            location: 1,
            job_type: 1,
            required_skills: 1,
            experience_level: 1,
            _id: 0
        }).sort({createdAt: -1});   // sort by latest jobs

        const recommendation = result.map(job =>({
            job_title: job.job_title,
            company: job.company,
            location: job.location,
            job_type: job.job_type,
            required_skills: job.required_skills,
            experience_level: job.experience_level
        }));

        if(recommendation.length==0){
            return res.status(200).json({
                user: newUser,
                message: "No recommendation found",
                recommendations: []
            });
        }
        
        res.json({ user: newUser, recommendation });
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error processing request' });
    }
});

module.exports = {getUsers, getrecommendations};