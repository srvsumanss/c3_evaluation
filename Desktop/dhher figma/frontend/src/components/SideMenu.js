import React, { useState } from 'react';
import Header from './Header';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (


    <div>
            <Header/>
      <div className="text-center">
        
      </div>

      {isDrawerOpen && (
        <div className="drawer">
          <h5>Menu</h5>
          
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
