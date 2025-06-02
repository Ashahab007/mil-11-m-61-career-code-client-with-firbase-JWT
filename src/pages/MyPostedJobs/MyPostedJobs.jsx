import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyPostedJobsList from "./MyPostedJobsList";
import useJobApi from "../../api/useJobApi";

// 3.2 receive accessToken as parameter and send to header to the server. but Commented due to we will using custom hook to perform this operation using axios instance from 5.0

// 5.4 commented the previously created myPostedJobsPromise
/* const myPostedJobsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/jobs/applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
}; */

const MyPostedJobs = () => {
  const { user } = useAuth();
  // 5.5 call the useJobApi hook
  const { myPostedJobsPromise } = useJobApi();
  return (
    <Suspense fallback={"Your Application is loading . . ."}>
      {/* 3.1 send the user.accessToken as argument because we know firebase by default give accessToken with the register user*/}

      {/* 5.6 send myPostedJobsPromise as props. but it's already sent because we have already sent in 3.1 and commented the previously send user.accessToken because the applicationsPromise contains the userToken which is added on 4.3 axiosInstance. */}
      <MyPostedJobsList
        myPostedJobsPromise={myPostedJobsPromise(
          user.email /* user.accessToken */
        )}
      ></MyPostedJobsList>
    </Suspense>
  );
};

export default MyPostedJobs;
