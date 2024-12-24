import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
// import policySlice from './features/policySlice';
// import claimSlice from './features/claimSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    // policy: policySlice,
    // claim: claimSlice,
  },
});

export default store;
