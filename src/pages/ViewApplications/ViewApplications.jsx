import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();

  const applications = useLoaderData();

  const handleStatusChange = (e, id) => {
    const status = e.target.value;
    const application_id = id;
    console.log(status, application_id);

    axios
      .patch(`http://localhost:3000/applications/${application_id}`, {
        status: status,
      })
      .then((res) => {
        console.log(res);

        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Status has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3>
        {applications.length} Application for: {job_id}
      </h3>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>

                <td>
                  <select
                    defaultValue={application.status} // that is if application contains any status then it will be set to defaultValue otherwise it will set Update Status
                    className="select"
                    onChange={(e) => handleStatusChange(e, application._id)}
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Hired</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
