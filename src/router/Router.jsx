import React from "react";

import { createBrowserRouter } from "react-router";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../pages/routes/PrivateRoutes";
import JobsApply from "../pages/JobsApply/JobsApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
   
        path: "/jobs/:id",
        Component: JobDetails,
     
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
     
      {
        path: "/jobsapply/:id",
        element: (
          <PrivateRoutes>
            <JobsApply></JobsApply>
          </PrivateRoutes>
        ),
      },
      {
       
        path: "/myApplications",
        element: (
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
        ),
      },

      
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoutes>
            <ViewApplications></ViewApplications>
          </PrivateRoutes>
        ),
       
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.job_id}`),
      },
    
      {
        path: "/addjobs",
        element: (
          <PrivateRoutes>
            <AddJobs></AddJobs>
          </PrivateRoutes>
        ),
      },
     
      {
        path: "/mypostedjobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },

      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
]);
