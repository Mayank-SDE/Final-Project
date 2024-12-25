# Learn Redux Toolkit in One Video By Love Babbar
- It is used for state management.
- To avoid prop drilling.
- Rather than sending data via prop drilling mechanism.
- We will be creating a centralized store.
- Store is a place where state is managed completely.
- Store is a centralized entity.
- If any component wants data then it can directly ask from the store.
## Terms
1. Action
2. Reducer
3. Slice
4. Store
5. State
## Scenario 1
  * Lets suppose there is a button click me. Now we have a event handler to handle when the button is clicked.
  * react-redux is outdated and no days we use redux-toolkit.
  * Now the handler function will say that you must dispatch a action i.e **Action Dispatch** when the user clicks.
  * **Action Dispatch** goes to the store.
  * store will re-direct to the **reducer function** corresponding to the **Action Disptach**.
  * **Reducer Function** will execute the logic which results in updation of the state.
  * Now, if the state changes then the UI also get updated.

## Action
* Action is nothing other than event. When you encounter any event you wrap it with some additional information inside some block and that block is called as **Action**. So, Action is nothing but a collection of Event and additional information. Where additional info can be some kind of payload or data or information.
* Action is an plain object in which event with some information i.e payload is stored.

## Slice
* There can be multiple features like login and logout functionality or counting which includes increment , decrement or reset.
* Logic of maintaining  every feature state logic is stored inside the slice.
* Slice includes all the intital state , reducers functions and it itself a feature.
* All the functions like addItem, removeItem , login function , logout function , increment function , decrement function , reset function all will come under slice and this is why we called it as feature.
* If you want to enable any kind of feature in your react application then to maintain the state of that feature you will use the slice.
* If you want to support authentication then you will create the slice of it ex - authSlice.
* Similarly, cartSlice, counterSlice.
* All the features which requires state management, for that particular feature you must create a slice in your application.
* Slice tracks the intial state , current state and all the reducer functions which are involved in changing the state.
## Reducer
* It includes entire logic using which whole state gets updated or maintained.
* Reducers are just functions using which you can change the data or state as per your logic.

## Store 
* Stores are the single source of truth inside which whole state or data is placed.
* Inside the store the state is stored.

## State
* It is another name of the data used in react.

## Scenario 2
* There is a count data and a increment button and on clicking the increment button the count data gets updated basically gets incremented by 1.
* So there is count displayed on the screen and there is a button increment. Now on clicking the increment button the control goes to the incrementHandler function inside which you are dispatching the action named as increment.
* The action dispatched will go to the store and and inside store the state of count is already stored which initial state is count=0. Store does not know about the increment function and but it have so many reducer functions. Now reducer function will execute the increment reducer function.
* Increment reducer function will increment the count by 1 and updates the UI.
* [!Reducer-Workflow-1](/Redux/Fig1.png "Reducer-WorkfLow-1") 
* [!Reducer-Workflow-2](/Redux/Fig2.png "Reducer-WorkfLow-2") 
* [!Reducer-Workflow-3](/Redux/Fig3.png "Reducer-WorkfLow-3") 

```bash
# Redux Demo Project 
$ npm create vite@latest

# Choosing React, JavaScript and naming the project as redux-demo
# Changing the working directory
$ cd redux-demo

# Installing all the dependencies
$ npm install

# Now installing the @reduxjs/toolkit
$ npm install @reduxjs/toolkit

# Now installing react-redux
$ npm install react-redux

# To run the React application, run the following command
$ npm run dev

```

## Setting up the Redux Store
1. Create a separate folder named as redux.
2. Create a store.js file inside it.
  1. Inside the store.js you will be importing all the reducer functions.
  2. You will be importing the {configureStore} from '@reduxj/toolkit'.
  3. configureStore takes an object as an argument inside reducer object is there which is assigned another object. Where all the reducer functions are mentioned.
  ```js
  // File name - store.js
  import {configureStore} from '@reduxjs/toolkit';

  export const store = configureStore({
    reducer:{

    }
  });
  ```
  4. Remember to export the store. So that you can set the store as a value to the store named attribute of the Provider component in the main.jsx.
  5. Wrap the App component with the Provider component which is again imported from 'react-redux';

  ```jsx
  //File name - main.jsx

  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import { store } from './redux/store.js';
  import { Provider } from 'react-redux';
  import App from './App.jsx';

  createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
    </StrictMode>
  );
  ```
  6. Now, the App component and all the children components can access the state stored inside the store. Basically, you are making the store accebile in the App and all of its chil component.
  7. Now, you are creating the slice. Basically, which is a fetaure.
  8. Create a folder named as features.
    1. Inside it create a folder named as counter.
      1. Inside it create a counterSlice.jsx.
        1. You must import { createSlice } from '@reduxjs/toolkit'; using which you will be creating the slice.
        2. createSlice() function takes an object as an argument, where there are three properties defined : 
          1. name : It is the name you use to assign or refer inside the store as the property inside the configureStore.
          2. initialState : You can define the intital state you want to have.
          3. reducers : This is object of several reducers functions where each reducer function will take the old state and modify it and return the new state.
          ```js
            import {createSlice} from 'react-redux';

            const counterSlice=createSlice({
              name:"counter",
              initialState:{
                value:0
              },
              reducers:{
                // When the increment action will come this will get triggered

                increment: (state)=>{
                  state.value+=1
                  },
                  // When the decrement action will come this will get triggered
                decrement:(state)=>{
                  state.value-1
                  },
                  //  When the incrementByAmount action will come this will get triggered
                incrementByAmount:(state,action)=>{
                  state.value = action.payload + state.value
                }
              }
            });
            // counterSlice.actions contains all the reducers functions
            // action creators are generated for each case reducer function
            export const {increment, decrement, incrementByAmount } = counterSlice.actions;
            export default counterSlice.reducer;
          ```
        3. Whenever you create a slice, you must register it in the store.
* Now, after registering the counter reducer in the store. Now the store encounters the actions where increment is required then it will call the increment reducer function.

## Summary 
1. Create the store using configureStore imported from @reduxjs/toolkit
2. Wrap the App component using the Provider component imported from 'react-redux'. That Provider compoenent is having the store attribute where it takes the store as value imported from wherever you have created the store.
3. Create the reducers as per feature using the createSlice which takes argument of object having three properties name, intitalState and reducers. Where reducers is also the object which contains several reducer function which are function having old state as an argument and returns new state.


## useSelector and useDispatch
* useSelector is a Hook used for accessing the state values from the store.
  ```jsx
    const count = useSelector((state)=>state.counter.value);
    // Now to dispatch the action so that corresponding reducer function update the state
    const dispatch = useDispatch();
    
  ```
* useDispatch is a hook used for dispatching the action so that the corresponding reducer function gets executed. If there is any kind of payload attach it while dispatching the actions i.e pass it as a argument in the exported countSlice.actions destructured functions.
