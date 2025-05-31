import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";


const myPostedJobsPromise = (email) => {
  return fetch(`http://localhost:3000/jobs?email=${email}`).then((res) =>
    res.json()
  );
};

const MyPostedJobs = () => {
  
  const { user } = useAuth();
  return (
    <Suspense fallback={"Your Application is loading . . ."}>
     
      <MyPostedJobsList
        myPostedJobsPromise={myPostedJobsPromise(user.email)}
      ></MyPostedJobsList>
    </Suspense>
  );
};

export default MyPostedJobs;
