import React, {Component} from 'react';
import '../App.css';
import Logo from './logo'
import UserInput from "./UserInput";
import {LOGIN} from '../../constants/constants'
import './Login.css'

function Login(){
        return (
            <div className="sign-in-page">
                <Logo/>
                <div><UserInput/></div>
            </div>
        );
}

export default Login;
