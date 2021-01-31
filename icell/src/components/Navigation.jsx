import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Blogadd">Blogadd</NavLink>
          <NavLink to="/Dashboard">Dashboard</NavLink>
          <NavLink to="/Eventadd">Eventadd</NavLink>
          <NavLink to="/Loginpage">Loginpage</NavLink>
       </div>
    );
}
 
export default Navigation;