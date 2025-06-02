import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

// 4.0 my requirements is some repeatative task that we have done is converted to a common function and custom hooks using axios interceptors. So created a custom hook useAxiosSecure

// 4.1 create axiosInstance with server url which is baseURL
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  // 4.2 as we need the accessToken from the user so call the custom hook

  //   6.4 call the userSignOut from AuthProvider useAuth()
  const { user, userSignOut } = useAuth();

  //   4.3 Now we use the axios interceptor. the mechanism of interceptor is when u going to do something it will stop the process to check. So first we use interceptor for request.

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  //   6.0 my requirement is when the token is absent it give error, so we have to handle this error and sign  out the user if token is absent.
  //   6.1 apply the interceptors for response to sign out the user don't have any accessToken
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("error in interceptor ", error);
      //6.2 from this step to check this . if u comment the 4.3 Bearer u will get the error in console due to absence of accessToken. From the console AxiosError we need the status to handle it
      // 6.3 Handle the error for the status 403
      if (error.status === 403) {
        console.log("log out the user 403 for token");
        // 6.5 call the userSignOut()
        userSignOut()
          .then(() => {
            console.log("sign out successfully");
          })
          .catch((error) => {
            console.log(error);
          }); //   6.6 Now from this step  if u comment the 4.3 Bearer u will signout
        //   6.7 now Logout the for error status for 401
      } else if (error.status === 401) {
        console.log("log out the user 403 for email");
        userSignOut()
          .then(() => {
            console.log("sign out successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      }

      return Promise.reject(error);
    }
  );

  //   4.4 return the axiosInstance
  return axiosInstance;
};

export default useAxiosSecure;
