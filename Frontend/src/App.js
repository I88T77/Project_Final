// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Layout }  from "../src/layout/layout.js"
import "./layout/layout.css"
import store from "./store/store"
import { Provider } from "react-redux"
// import {Login} from './layout/login'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
        <Layout />
        {/* <Login /> */}
     </Provider>
     
    </div>
  );
}

export default App;
