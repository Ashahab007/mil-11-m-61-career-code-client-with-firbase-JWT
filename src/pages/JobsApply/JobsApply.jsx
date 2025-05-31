import React from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobsApply = () => {
  
  const { id } = useParams();
  console.log(id); // get the job id

 
  const { user } = useAuth();
  console.log(user);

  
  const handleApplyJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedin, github, resume);

    
    const applications = {
      applicant: user.email,
      jobId: id, //এখানে jobId তে specific job এর id টা পাঠানো হইসে।
      linkedin,
      github,
      resume,
    };

    console.log(applications);

    
    axios
      .post("http://localhost:3000/applications", applications)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your application has been submitted.",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mb-10">
     
      <h3>Apply For Jobs</h3>
      <form onSubmit={handleApplyJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">URL</label>
          <input
            type="url"
            name="linkedin"
            className="input"
            placeholder="Linkedin"
          />

          <label className="label">URL</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="github"
          />

          <label className="label">URL</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="resume"
          />
        </fieldset>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobsApply;
