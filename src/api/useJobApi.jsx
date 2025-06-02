import axios from "axios";
import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

// 5.0 Now same thing is done for my posted jobs. So created a custom useJobApi
const useJobApi = () => {
  // 5.1 import useAxiosSecure
  const axiosSecure = useAxiosSecure();

  //   5.2 same name myPostedJobsPromise is used from 3.2
  const myPostedJobsPromise = (email) => {
    return axiosSecure
      .get(`/jobs/applications?email=${email}`)
      .then((res) => res.data);
  };

  //   5.3 return as object because if we want to send many data if required
  return { myPostedJobsPromise };
};

export default useJobApi;
