import React from 'react';
import './externalstyle.css';
import logo from './logo.svg';

function Head(){
    return(
    <div class="d2">
        <div class="dd2">
            <img src={logo} class="title" width={"80px"} height={"80px"}></img>
        </div>
        <div class="dd3">
            <li class="l1"><a href="###">Home</a></li>
            <li><a href="###">Aboutus</a></li>
            <li><a href="###">Products</a></li>
            <li><a href="###">Services</a></li>
            <li><a href="###">Contactus</a></li>
        </div>
    </div>
    )
};

export default Head;