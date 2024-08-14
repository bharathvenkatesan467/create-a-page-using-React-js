import React from 'react';
import ReactDOM from  'react-dom';
import './externalstyle.css';

function Table(){
    return(
    <div class="a1">
        <h2>Student Information:</h2>
        <table>
        <tr>
            <th>s.no</th>
            <th>name</th>
            <th>DeptName</th>
            <th>College Name</th>
            <th>Year of passing</th>
        </tr>
        <tr>
            <td>1</td>
            <td>bharath</td>
            <td>it</td>
            <td>Hicet</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>2</td>
            <td>riyas</td>
            <td>ece</td>
            <td>Hicet</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>3</td>
            <td>seenu</td>
            <td>it</td>
            <td>Hicet</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>4</td>
            <td>ranjith</td>
            <td>ece</td>
            <td>Hicet</td>
            <td>2025</td>
        </tr>
        <tr>
            <td>5</td>
            <td>kishore</td>
            <td>it</td>
            <td>Hicet</td>
            <td>2025</td>
        </tr>
        </table>
    </div>
    )
};
export default Table;