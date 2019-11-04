import React, {Component} from 'react';
import '../App.css';
import Logo from './logo'
import UserInput from "./UserInput";
import {LOGIN} from '../../constants/constants'

function Login(){
        return (
            <div className="login">
                <Logo/>
                <div><UserInput/></div>
            </div>
        );
}

export default Login;