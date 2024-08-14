import React from 'react';
import './externalstyle.css';

function Form(){
    return(
        <div class="f1">
            <h2>Login Page</h2>
        <form>
            <label class="l1">Email:<input type='email' id="email" placeholder='email' required></input></label>
            <label class="l2">Password:<input type='password'id="password" placeholder='**************' required></input></label>   
        </form>
        <div class="btn">
            <button class="btn1" type='submit'>submit</button>
        </div>
    </div>
    )
};
export default Form;