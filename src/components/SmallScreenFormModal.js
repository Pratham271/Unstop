import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MdOutlineClose } from 'react-icons/md';

const SmallScreenFormModal = ({ onClose, show }) => {

  // state to keep track of whether the modal is open or not
  const [isShowing, setIsShowing] = useState(false);

  // state to keep track of the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Define the content of the skills here
  const contentArray = [
    {title: 'UI/UX and Design', width: 'w-[150px]', width2:'[170px]'},
    {title: 'Web Development', width: 'w-[160px]',  width2:'[190px]'},
    {title: 'UI/UX and Design', width: 'w-[150px]', width2:'[170px]'},
    {title: 'No of Question', width: 'w-[130px]',   width2:'[150px]'},
    {title: 'Web Development', width: 'w-[160px]',  width2:'[190px]'}

  ]

  
  useEffect(() => {
    // Update the windowWidth state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define variables based on window width
  const isLessThan400 = windowWidth < 400;

  // Update 'isShowing' state when the 'show' prop changes
  useEffect(() => {
    setIsShowing(show);
    
  }, [show]);
  
    const handleModalClose = () => {
      setIsShowing(false);
      setTimeout(() => {
        onClose(); // Call the onClose function to update the 'show' prop to false
      }, 400);
    };


  return (
    <>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col justify-end items-center z-20 "
          initial={{ translateY: '100%' }} // Start from the bottom
          animate={isShowing ? { translateY: '0%' } : { translateY: '100%' }} // Animate to the center or down
          exit={{ translateY: '100%' }} // Animate down when closing
          transition={{ duration: 0.4 }}
        >
        <div className='fixed inset-0 bg-black bg-opacity-50' onClick={handleModalClose}></div>
          <div className="bg-white w-full rounded-t-lg shadow-lg relative" >
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-semibold text-blue-900">Sub-Section Details</h2>
              <button className="text-red-500 hover:text-gray-800 bg-red-100 rounded-3xl h-10 w-10 flex items-center justify-center"  onClick={handleModalClose}>
                <FaTimes size={24} />
              </button>
            </div>
            <hr />
            <form className="p-4">
              <div className="mb-4">
                <label htmlFor="purposeoftest" className="text-blue-900 font-semibold text-base">
                  Purpose of the test is
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  className="w-full border rounded-lg py-2 px-3 text-blue-900 border-gray-300 focus:outline-none font-medium h-12 text-base mt-2"
                  disabled
                >
                  <option value="option1">Select</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="Description" className="text-blue-900 font-semibold text-base">
                  Description
                </label>
                <select
                  id="description"
                  name="description"
                  className="w-full border rounded-lg py-2 px-3 text-blue-900 border-gray-300 focus:outline-none font-medium h-12 text-base mt-2"
                  disabled
                >
                  <option value="option1">Select</option>
                  {/* Add more options here */}
                </select>
              </div>

              <div className="mb-4">
              <label htmlFor="skills" className="text-blue-900 font-semibold text-base">
                Skills
              </label>
              <div className="h-[250px] w-full border rounded-lg border-gray-200 overflow-hidden mt-2">
                <div className="h-[75%] flex flex-wrap mt-3">
                  {/* Content for the 90% partition */}
                  {contentArray.map((item,index)=> (
                    <p
                      key={index}
                      className={`bg-blue-100 h-[22px] text-blue-900 rounded-2xl ${isLessThan400 ? item.width : item.width2} items-start flex justify-between text-sm 
                      ${isLessThan400?'px-[7px]':'px-[14px]'} ${isLessThan400?'ml-2':'ml-6'}`}
                    >
                      {item.title}
                      <span className={`text-blue-900 mt-1 ${isLessThan400?'':'ml-2'}`}>
                      < MdOutlineClose size={16}/>
                      </span>
                    </p>
                    
                  ))}

                </div>
                <div className="h-[25%] bg-white border-t border-gray-200">
                  <h3 className='text-gray-400 mt-4 ml-4'>Type here</h3>
                </div>
              </div>
            </div>


              <div className="mb-4">
                <label htmlFor="assessmentName" className="text-blue-900 font-semibold text-base">
                  Duration of assessment
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  placeholder="HH:MM:SS"
                  className="w-full border rounded-lg py-2 px-3 text-gray-300 border-gray-300 focus:outline-none font-medium h-12 text-base mt-2"
                  disabled
                />
              </div>
              {/* Add more form fields here */}
              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                  disabled
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SmallScreenFormModal;
