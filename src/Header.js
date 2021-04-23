import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout } from "./features/userSlice";

function Header()
{ 
   
    const dispatch =useDispatch();

    const logoutOfApp= ()=>{
        dispatch(logout())
        auth.signOut();

    };
    return (
        <div className='header'>
        {/* <h1 >hey this is me</h1> */}
        <div className="header_left">
        <img src="https://i.imgur.com/Vahbdkj.png?1" alt=""/>
        <div className="header_search">
        <SearchIcon />
            <input placeholder="Search" type="text"/>
        </div>

        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon}  title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon}  title="Jobs"/>
            <HeaderOption Icon={ChatIcon}  title="Message"/>
            <HeaderOption Icon={NotificationsIcon}  title="Notifications"/>
            <HeaderOption avatar={true}  title="me"
                onClick={logoutOfApp}
            />
             

        </div>
        </div>
);
}

export default Header;