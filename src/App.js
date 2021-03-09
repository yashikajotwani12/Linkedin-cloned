import React, { useEffect } from 'react';
import Header from "./Header";
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import  {useDispatch, useSelector} from 'react-redux';
import  {login,logout, selectUser}  from './features/userSlice';
import Login from './Login'
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
   auth.onAuthStateChanged(userAuth=>{
     if(userAuth)
     {
      dispatch(login({
        email:userAuth.email,
        uid: userAuth.uid,
        displayName:userAuth.displayName,
        photoUrl:userAuth.photoURL,
      }));

     }else{
      dispatch(logout());


     }
   })
  },[])
  return (
    <div className="app">
    {/* <h1>Lets build a LinkedIn clone</h1> */}

    {/* Header */}
    <Header/>

    {!user ? (

    <Login/>
    ):(
      <div className="app_body">
     <Sidebar/>
     <Feed/>
    </div>
    )}
    
    
   
      </div>
  );
}

export default App;
