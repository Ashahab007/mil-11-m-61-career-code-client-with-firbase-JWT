import React, { Suspense, useState } from "react";
import Banner from "./Banner/Banner";
import HotJobs from "./HotJobs";
import { h3 } from "motion/react-client";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);
const Home = () => {
  console.log(jobsPromise);

  

  // console.log(jobsPromise);

  return (
    <div>
      <Banner></Banner>
      
      <Suspense fallback={<h3>Hot Job is Loading . . .</h3>}>
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
