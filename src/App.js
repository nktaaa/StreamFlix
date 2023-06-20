import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { Routes } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import {login, logout,selectUser} from "./features/userSlice";
import ProfileScreen from './screens/ProfileScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{

      const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
        if(userAuth){
          //logged in
          // console.log(userAuth);
          dispatch(
            login({
              uid:userAuth.uid,
              email:userAuth.email,
            })
            );
        }else{
          //logged out
          dispatch(logout());
        }
      });

      //cleanup function

      return unsubscribe;

  },[dispatch]);

  return (
    <div className="App">
      <Router>
        {!user?(
          <LoginScreen/>
        ):(
          <Routes>
            <Route path="/profile" element={<ProfileScreen/>}/>
            <Route exact path="/" element={<HomeScreen/>}/>
        </Routes>

        )}
      </Router>

    </div>
  );
}

export default App;
