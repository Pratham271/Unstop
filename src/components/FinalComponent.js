import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Frontpage from './Frontpage';
import ResponsivePage from './ResponsivePage';

const FinalComponent = () => {

  // Define state to keep track of the screen size 
  const [isScreenSizeLessThan500, setIsScreenSizeLessThan500] = useState(
    window.innerWidth <= 500
  );

  // Define a function to update the state when the screen size changes
  useEffect(() => {
    // Function to update the state when the screen size changes
    const handleResize = () => {
      setIsScreenSizeLessThan500(window.innerWidth <= 500);
    };

    // Initial call to set the initial state
      handleResize();
    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  return (
    <div className={`App ${isScreenSizeLessThan500 ? 'bg-white' : 'bg-gray-100'}`}>
      {isScreenSizeLessThan500 ? (
        // For small screens (screen size less than or equal to 500)
        <div className="" >
          <Sidebar />
          <ResponsivePage className="" />
        </div>
      ) : (
        // For larger screens (screen size greater than 500)
        <div className="grid grid-cols-10">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-9">
            <Frontpage />
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalComponent;
