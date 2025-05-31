import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {

  const job = useLoaderData();
  console.log(job?.title);


  return (
    <div className="mb-8">
      <h1 className="text-2xl">{job.title}</h1>
      <p>{job.company}</p>
      
      <Link to={`/jobsapply/${job._id}`}>
        <button className="btn btn-primary">Apply Jobs</button>
      </Link>
    </div>
  );
};

export default JobDetails;
