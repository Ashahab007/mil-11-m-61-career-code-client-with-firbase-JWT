Index

1.0 My requirement is JWT using firebase-admin. first, install "npm i firebase-admin" in server.

2.0 now to verify the token for my application page so we use in try catch block from firebase doc to decode the token.

3.0 Now my requiremnt is verifyToken for the jobposted user so set the verifyToken in jobposted url.

4.0 my requirements is some repeatative task that we have done is converted to a common function and custom hooks using axios interceptors. So created a custom hook useAxiosSecure.

5.0 Now same thing is done for my posted jobs. So created a custom useJobApi.

6.0 my requirement is when the token is absent it give error, so we have to handle this error and sign out the user if token is absent.

7.0 Deployment and set firebase admin service key is in the module video 61.8 and 61.9

<!-- .env.local

VITE_apiKey=AIzaSyAsD56ZpRQ6At93k8We1KVkplOCvD1xpCI
VITE_authDomain=career-code-job-portal.firebaseapp.com
VITE_projectId=career-code-job-portal
VITE_storageBucket=career-code-job-portal.firebasestorage.app
VITE_messagingSenderId=705332996166
VITE_appId=1:705332996166:web:6d3fbc5fe1fca920210247
 -->
