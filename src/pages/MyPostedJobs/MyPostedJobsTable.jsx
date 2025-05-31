import React from "react";
import { Link } from "react-router";

const MyPostedJobsTable = ({ job, index }) => {
  console.log(job);
  // const { _id, title, deadline } = job;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{job.title}</td>
      <td>{job.deadline}</td>
      
      <td>
        <Link to={`/applications/${job._id}`}>View Application</Link>{" "}
      </td>
    </tr>
  );
};

export default MyPostedJobsTable;
