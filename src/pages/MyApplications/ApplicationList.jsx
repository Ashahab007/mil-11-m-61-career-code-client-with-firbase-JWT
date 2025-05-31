import React, { use } from "react";
import ApplicationTable from "./ApplicationTable";

const ApplicationList = ({ applicationsPromise }) => {
  const applications = use(applicationsPromise);
  console.log(applications);

  return (
    <div className="overflow-x-auto">
      <h1>Total Application Applied: {applications.length}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>#</label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <ApplicationTable
              key={application._id}
              application={application}
              index={index}
            ></ApplicationTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
