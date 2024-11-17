const express= require("express");
const {getJoblist, postJob, postJobs} = require("../controller/jobsController");
const router = express.Router();

router.route("/getJoblist").get(getJoblist);    // list all jobs
router.route("/postJob").post(postJob);         // post a job
router.route("/postJobs").post(postJobs);       // post multiple jobs

module.exports = router;