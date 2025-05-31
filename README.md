Index

1.0 We are applying JWT (jsonwebtoken) in careercode project that's why to clearly understand the jwt we have delete the all comment to understand how to apply jwt.

2.0 How jwt works?
when client is call any api the server sent a token (AccessToken) and in client side the token is saved using HTTPOnlyCookies (Best method) or localStorage (not a best method). When user want to get the user's data like jobsApply etc every time cookies is sent to server. then server decide if the user is authentic it will send the data. sometimes another token is also sent which is called refresh token. This refresh token works by renew the access token.

3.0 How to install?
// go to jwt website => Libraries => filter to node.js. Now copy the npm install jsonwebtoken or u can go to the view repo for setup documentation and run in server side. also install cookie-parser by npm i cookie-parser and import it in 3.1.

4.0 My requirement is after install jsonwebtoken import jwt from repo documentation

5.0 Now our requirement is to verify the token. That's why created a custom middleware which takes 3 parameter req, res, next. এখানে logger দিয়ে check করা হচ্ছে যে api টা logger টাকে hit করে কিনা।

6.0 finally we are going to verify the token

7.0 before this token verification we have to verify that the token is exist or not

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- .env.local

VITE_apiKey=AIzaSyAsD56ZpRQ6At93k8We1KVkplOCvD1xpCI
VITE_authDomain=career-code-job-portal.firebaseapp.com
VITE_projectId=career-code-job-portal
VITE_storageBucket=career-code-job-portal.firebasestorage.app
VITE_messagingSenderId=705332996166
VITE_appId=1:705332996166:web:6d3fbc5fe1fca920210247
 -->
