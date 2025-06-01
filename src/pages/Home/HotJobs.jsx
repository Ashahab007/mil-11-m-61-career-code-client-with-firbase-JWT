import React, { use, useEffect, useState } from "react";
import JobsCard from "../shared/JobsCard";

const HotJobs = ({ jobsPromise }) => {
  /* const [jobs, setJobs] = useState([]);
  useEffect(() => setJobs(jobsPromise), []);*/
  const jobs = use(jobsPromise);
  console.log(jobs);

  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center mb-10">
        Hot Jobs of the Day
      </h1>

      <p className="text-center mb-8">Total Jobs:{jobs.length}</p>
      <div className="min-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs?.map((job) => (
          <JobsCard key={job._id} job={job}></JobsCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
