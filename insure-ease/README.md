# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Insure Ease

## Initializing react project using Vite
```bash
# Initiating react project using Vite build tool
$ npm create vite@latest
# Assigning "insure-ease" name to the react-frontend-project
$ Assigning name - insure-ease
# Changing the working directory to insure-ease
$ cd insure-ease
# Installing all the starting dependencies 
$ npm install 
# Starting my project using the following command in development mode
$ npm run dev
```

## Integrating Bootstrap dependency with our React project
```bash
# Installing the bootstrap depenedency
$ npm install bootstrap
```
* Adding the imports of bootstrap CDN in the main.jsx file
```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
``` 
* Deleted files
  1. index.css
  2. App.css
  3. react.svg
  4. vite.svg

## Folder Structure of InsureEase
```bash
1. insure-ease
  1. dist
    1. assets
    2. index.html
  2. node_modules
  3. public
  4. src
    1. assets <!--  Static assets (images, icons, etc.) -->
      1. images
      2. styles
        1. theme.css
    2. components <!--Reusable components -->
      1. Admin
        1. Dashboard.jsx
        2. PolicyManager.jsx
        3. ClaimsManager.jsx
      2. Client
        1. PolicyList.jsx
        2. PremiumCalculator.jsx
        3. PolicyDetails.jsx
    3. pages <!-- Page Level Components-->
      1. AdminDashboard.jsx
      2.  ClientHome.jsx
      3. Login.jsx
      4. Signup.jsx
    4. features     <!-- Redux slices and features -->     
      1. authSlice.js
      2. policySlice.js
      3. claimSlice.js

    5. services         <!-- API services --> 
      1. apiClient.js
      2. policyService.js
      3. authService.js
      4. claimService.js
    6.  hooks/                <!-- Custom hooks -->
      1. useAuth.js
      2. useAdminData.js

    7. layout               <!-- Layout components -->
      1.  AdminLayout.jsx
      2. ClientLayout.jsx

    8. utils                <!-- Utility functions -->
      1. constants.js
      2. helpers.js

    9. App.jsx               <!-- Main application component -->
    10. main.jsx             <!-- Entry point -->
    11. store.js             <!-- Redux store configuration -->
```

## Tech Stack 
* **Frontend** : React, Bootstrap for styling, Redux toolkit for state management.
* **API Handling** : Axios for HTTP requests.
* **Routing** : React Router
* **State management** : Redux Toolkit
* **Theme** : Custom CSS for consistent styling.

## Color Theme 
* **Primary**: #007bff (Bootstrap's blue).
* **Secondary**: #6c757d (Grey for subtle text).
* **Success**: #28a745 (For approvals and successful actions).
* **Warning**: #ffc107 (For alerts or warnings).
* **Danger**: #dc3545 (For errors or rejections).
* **Background**: #f8f9fa (Light grey).

## Redux Store Setup

```bash
# Installing @reduxjs/toolkit and react-redux for leveraging its functionalities
$ npm install @reduxjs/toolkit react-redux

```

```js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import policySlice from './features/policySlice';
import claimSlice from './features/claimSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    policy: policySlice,
    claim: claimSlice,
  },
});

export default store;

```