import React , { useState } from "react";
import './App.css';

import axios from 'axios';



function App() {

  const [users, setUsers] = React.useState([]);
   const f = async () => {
     const res = await fetch("http://dummy.restapiexample.com/api/v1/employees");
     const json = await res.json();
     setUsers(json.data);
   };
   React.useEffect(() => {
     f();
   }, []);




  return (
   <>
   <div className="App">
     <h1>Employee's Details</h1>
     <div className="flex">
  {users.length &&
    users.map((user) => {
      return (
        <div  className= "Enter"  key={user.id}>
          <p>
            <strong>{user.employee_name}</strong>
          </p>
          <p> Salary: {user.employee_salary}</p>
          <p>{user.employee_age}</p>
          <img key={user.avatar} src={user.avatar} />
        </div>
      )}
    )}


     </div>
     </div>
   




     </>
  );
}

export default App
