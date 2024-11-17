# Job Recommendation Backend Service

## Prerequisites

Make sure you have the following installed:

- dotenv
- express
- express-aysnc-handler
- mongoose

MongoDB Setup
- Create a new project and build a free cluster
- Browse collections and create a collection (eg. "users")
- Copy the connection string from Connect > Drivers

## Installation

1. Clone the repository
2. Install dependecies:
    npm install
3. Set up .env file
    PORT = 5000
    CONNECTION_STRING = <your MongoDB connection string>
4. Run the application:
    npm run start

## API Endpoints

- User Profile
    GET /api/user-profile
    POST /api/user-profile
- Jobs
    GET /api/getJoblist
    POST /api/postJob
    POST /api/postJobs

## Example

- User Profile Data (JSON)
{
  "name": "Jane Doe",
  "skills": ["Python", "Django", "REST APIs"],
  "experience_level": "Intermediate",
  "preferences": {
    "desired_roles": ["Backend Developer", "Software Engineer"],
    "locations": ["Remote", "New York"],
    "job_type": "Full-Time"
  }
}

- Job Postings (JSON)
[
  {
    "job_id": 1,
    "job_title": "Software Engineer",
    "company": "Tech Solutions Inc.",
    "required_skills": ["JavaScript", "React", "Node.js"],
    "location": "San Francisco",
    "job_type": "Full-Time",
    "experience_level": "Intermediate"
  },
  {
    "job_id": 2,
    "job_title": "Data Scientist",
    "company": "Data Analytics Corp.",
    "required_skills": ["Python", "Data Analysis", "Machine Learning"],
    "location": "Remote",
    "job_type": "Full-Time",
    "experience_level": "Intermediate"
  }
]
