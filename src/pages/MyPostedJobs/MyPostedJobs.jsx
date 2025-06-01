import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";

// 3.2 receive accessToken as parameter and send to header to the server
const myPostedJobsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/jobs?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <Suspense fallback={"Your Application is loading . . ."}>
      {/* 3.1 send the user.accessToken as argument */}
      <MyPostedJobsList
        myPostedJobsPromise={myPostedJobsPromise(user.email, user.accessToken)}
      ></MyPostedJobsList>
    </Suspense>
  );
};

export default MyPostedJobs;
