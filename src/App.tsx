import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/Signup/SignUp';
// import Home from './Pages/Home/Home'
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
     {/* <Home/> */}
     {/* <SignUp/> */}
     <React.Suspense fallback={false}>
      
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </React.Suspense>
    </>
  );
}

export default App;
