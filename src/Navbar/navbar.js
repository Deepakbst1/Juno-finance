import React from 'react';
import './navbar.css'; // Make sure to import your CSS file

const Navbar = () => {
  return (
  
  
  <> 
   <div className='ni'>
    <h1>Monitoring</h1>
 
    <nav className="container">

      <div className="flex-item">
        <a href="#">Pending</a>
        <a href="#">Completed</a>
    
      </div>

      <div className="flex-item">

      <div className="close" style={{ backgroundColor: "#f6d8d8" ,padding:"6px", borderRadius:"5px", }}>
        <a href="#">Close Account</a>
        </div>
        
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
