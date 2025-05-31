import React, { use } from "react";
import MyPostedJobsTable from "./MyPostedJobsTable";

const MyPostedJobsList = ({ myPostedJobsPromise }) => {
  const jobs = use(myPostedJobsPromise);
  console.log(jobs);

  return (
    <div>
      <h1>Total Job Posted:{jobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
       
            {jobs.map((job, index) => (
              <MyPostedJobsTable
                key={job._id}
                job={job}
                index={index}
              ></MyPostedJobsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobsList;
