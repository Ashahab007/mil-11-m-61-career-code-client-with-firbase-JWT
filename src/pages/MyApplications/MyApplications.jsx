import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
// 1.3 received as parameter and send the accessToken through headers. Now in browser go to home then go to My Applocation page => go to network tab in browser select in name section and select the last name then u will find Authorization => in Bearer with token
const applicationsPromise = (email, accessToken) => {
  return fetch(`http://localhost:3000/applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  }).then((res) => res.json());
};

const MyApplications = () => {
  const { user } = useAuth();

  // 1.1 during registration firebase builtin create an access token of that user
  const userToken = user.accessToken;
  console.log("token in the context", userToken);

  return (
    <Suspense fallback={"Your Application is loading . . ."}>
      <ApplicationList
        // 1.2 call the applicationsPromise(user.email, userToken) with the argument, automatically send the userToken via promise to ApplicationList component
        applicationsPromise={applicationsPromise(user.email, userToken)}
      ></ApplicationList>
      ;
    </Suspense>
  );
};

export default MyApplications;
