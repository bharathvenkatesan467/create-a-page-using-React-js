import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './externalstyle.css';
import './App.js';
import Head from './header.js';
import Foot from './footer.js';
import Table from './table.js';
import Form from './form.js';

function Ind(){
  return(
    <div>
      <Head/>
      <Table/>
      <Form/>
      <Foot/>
    </div>
  )
} 

ReactDOM.render(<Ind/>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
