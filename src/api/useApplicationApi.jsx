import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
// 4.4 according to my application page the applicationsPromise  (commented) contains a fetch and a accessToken bearer. The accessToken bearer part is done in 4.3 using axios instance. Now we are going to create a custom hook for application api url for fetch.
const useApplicationApi = () => {
  // 4.5 call the hook useAxiosSecure()
  const axiosSecure = useAxiosSecure();

  // 4.6 copy the fetch url from 1.3 my application url here localhost:3000 is removed as we have used as baseUrl in 4.1. so we use the rest of the portion of the url

  const applicationsPromise = (email) => {
    return axiosSecure
      .get(`/applications?email=${email}`)
      .then((res) => res.data);
  };

  //   4.7 return as object because if we want to send many data if required
  return { applicationsPromise };
};

export default useApplicationApi;
