const express = require("express");
const connectdb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectdb();
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/user-profile", require("./routes/userRoutes"));   // user routes to post user profile and recommend jobs
app.use("/api", require("./routes/jobsRoutes"));                // jobs routes to post jobs


app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})