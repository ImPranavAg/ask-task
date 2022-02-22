import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import './App.css';
import Ask from "./component/Ask";
import Login from './component/auth/Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);

  return (
    <div className="App">
      {
        user ? (<Ask />) : (<Login />)
      }
    </div>
  );
}

export default App;
