import React, { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";

const applicationsPromise = (email) => {
  return fetch(`http://localhost:3000/applications?email=${email}`, {
    credentials: "include",
  }).then((res) => res.json());
};

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <Suspense fallback={"Your Application is loading . . ."}>
      <ApplicationList
        applicationsPromise={applicationsPromise(user.email)}
      ></ApplicationList>
      ;
    </Suspense>
  );
};

export default MyApplications;
