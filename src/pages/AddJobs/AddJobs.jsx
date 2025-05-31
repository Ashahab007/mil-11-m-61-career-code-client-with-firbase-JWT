import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJobs = () => {
 
  const { user } = useAuth();
 
  const handleAddForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

  

   
    const { min, max, currency, ...newJob } = data;

    newJob.salaryRange = {
      min,
      max,
      currency,
    };

    //process requirements
    const processRequirements = newJob.requirements.split(",");
    const requirements = processRequirements.map((req) => req.trim());

    // console.log(processRequirements, requirements);
    newJob.requirements = requirements;

    // process responsibilities
    const responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    newJob.responsibilities = responsibilities;
    console.log(newJob);

   
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        console.log(res);
      
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Job has been saved",
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
    <div className="mt-10 mb-10">
      <h3 className="text-center font-bold text-4xl">Add Your Jobs</h3>
      <form
        onSubmit={handleAddForm}
        className="flex flex-col justify-center items-center"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <label className="label">Job Title</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Job Title"
            name="title"
          />

          <label className="label">Company Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Company Name"
            name="company"
          />

          <label className="label">Location</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Location"
            name="location"
          />
          <label className="label">Company Logo</label>
          <input
            type="text"
            className="input w-full"
            placeholder="URL"
            name="company_logo"
          />
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <label className="label">Job Type</label>
          <div className="filter w-full">
            <input
              className="btn filter-reset w-full "
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              aria-label="On-Site"
              value="On-Site"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              aria-label="Remote"
              value="Remote"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
              value="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <label className="label">Job Category</label>

          <select
            defaultValue="Pick a Category"
            className="select select-ghost w-full"
            name="category"
          >
            <option disabled={true}>Pick a Category</option>
            <option>Marketing</option>
            <option>Sales</option>
            <option>Engineering</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <label className="label">Application Deadline</label>
          <input type="date" name="deadline" className="input w-full" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <label className="label">Salary Range</label>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                className="input w-full"
                name="max"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Pick a font"
                className="select select-ghost w-full"
                name="currency"
              >
                <option disabled={true}>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <label className="label">Requirements</label>
          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Requirements (separated by comma)"
          ></textarea>
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <label className="label">Responsibilities</label>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Requirements (separated by comma)"
          ></textarea>
        </fieldset>

        {/* HR Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-1/2 border p-4">
          <h3 className="text-sm font-bold">HR Related Info</h3>
          <label className="label">HR Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Name of HR"
            name="hrname"
          />

          <label className="label">HR Email</label>
          <input
            type="text"
            className="input w-full"
            placeholder="HR Email"
            name="hr_email"
           
            defaultValue={user.email}
          />
        </fieldset>
        <input
          className="btn btn-wide bg-blue-600 text-white"
          type="submit"
          value="Add Job"
        />
      </form>
    </div>
  );
};

export default AddJobs;
