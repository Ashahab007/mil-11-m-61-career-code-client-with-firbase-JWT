import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    currency,
    company,
    location,
    requirements,
    salaryRange,
    _id,
    company_logo,
    title,
    description,
  } = job;
  return (
    <div className="card bg-base-100 gap-4 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img className="object-cover" src={company_logo} alt="Shoes" />
        </figure>
        <div className="flex flex-col gap-2">
          <h2 className="card-title">{title}</h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              <p>{location}</p>
            </div>
            <div>
              <p>
                Salary: {salaryRange.min} - {salaryRange.max}
                <span className="pl-2">{salaryRange.currency}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((requirement, index) => (
            <div key={index} className="badge badge-outline">
              {requirement}
            </div>
          ))}
        </div>
      </div>
  
      <Link to={`/jobs/${_id}`} className="flex justify-end">
        <button className="btn btn-primary flex justify-end">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default JobsCard;
