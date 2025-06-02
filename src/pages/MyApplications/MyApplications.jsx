import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../api/useApplicationApi";
// 1.3 received as parameter and send the accessToken through headers. Now in browser go to home then go to My Applocation page => go to network tab in browser select in name section and select the last name then u will find Authorization => in Bearer with token. but Commented due to we will using custom hook to perform this operation using axios instance from 4.0

/* export const applicationsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
}; */

const MyApplications = () => {
  const { user } = useAuth();

  // 4.8 use the useApplicationApi hook to get the applicationsPromise data
  const { applicationsPromise } = useApplicationApi();

  // 1.1 during registration firebase builtin create an access token of that user
  const userToken = user.accessToken;
  console.log("token in the context", userToken);

  return (
    <Suspense fallback={"Your Application is loading . . ."}>
      <ApplicationList
        // 1.2 call the applicationsPromise(user.email, userToken) with the argument, automatically send the userToken via promise to ApplicationList component
        // 4.9 send applicationsPromise as props. but it's already sent because we have already sent in 1.2 and commented the previously send userToken because the applicationsPromise contains the userToken which is added on 4.3 axiosInstance.
        applicationsPromise={applicationsPromise(user.email /* userToken */)}
      ></ApplicationList>
      {/* 4.10 Now if u comment the 4.3 Bearer u will get the error due to absence of accessToken. This error will be handled in 6.0*/}
      ;
    </Suspense>
  );
};

export default MyApplications;
