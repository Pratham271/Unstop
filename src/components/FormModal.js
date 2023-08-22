import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the cross icon from react-icons
import { motion  } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";

const FormModal = ({ onClose, show  }) => {
  // state to keep track of whether the modal is open or not
  const [isShowing, setIsShowing] = useState(false);

  // Define the content of the skills here
  const contentArray = [
    { title: 'UI/UX and Design', width: 'w-[170px]' },
    { title: 'No of Question', width: 'w-[150px]' },
    { title: 'Web Development', width: 'w-[180px]' },
    { title: 'UI/UX and Design', width: 'w-[170px]' },
    { title: 'Web Development', width: 'w-[180px]' },
  ];

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
     className="fixed inset-0 flex justify-center items-center z-20"
     initial={{ translateY: '100%' }} // Start from the bottom
     animate={isShowing ? { translateY: '0%' } : { translateY: '100%' }} // Animate to the center or down
     exit={{ translateY: '100%' }} // Animate down when closing
     transition={{ duration: 0.4 }}
   >
      <div className="fixed inset-0 bg-black opacity-50 " onClick={handleModalClose}></div>
      <div   className="bg-white w-2/5  rounded-lg shadow-lg relative">
        <div className="flex items-center justify-between mb-4 p-6">
          <h2 className="lg:text-2xl sm:text-xl font-semibold text-blue-900">Create new assessment</h2>
          <button
            className="text-gray-600 hover:text-gray-800  "
            onClick={handleModalClose}
          >
            <FaTimes size={24} /> {/* Use the cross icon here */}
          </button>
        </div>
        <hr />
        <form >
          <div className="mb-4 mx-4">
            <label
              htmlFor="assessmentName"
              className="text-blue-900 font-semibold mb-2 flex items-start px-1 mt-3 text-lg"
              
            >
              Name of assessment
            </label>
            <input
              type="text"
              id="assessmentName"
              name="assessmentName"
              value={"Type Here"}
              className="w-full border rounded-lg py-2 px-3 text-blue-900 border-gray-300 focus:outline-none font-medium h-12 text-lg"
              disabled
              // Add any other input properties or state handling as needed
            />
          </div>
          <div className="mb-4 mx-4">
            <label
              htmlFor="purpose"
              className="text-blue-900 font-semibold mb-2 flex items-start px-1 mt-3 text-lg"
              
            >
              Purpose of the test is
            </label>
            <select
              id="purpose"
              name="purpose"
              className="w-full border rounded-lg py-2 px-3 text-blue-900 border-gray-300 focus:outline-none font-medium h-12 text-lg"
              disabled
            >
              <option value="option1" >
                Select
              </option>
              
              {/* Add more options here */}
            </select>
          </div>
          <div className="mb-4 mx-4">
            <label
              htmlFor="description"
              className="text-blue-900 font-semibold mb-2 flex items-start px-1 mt-3 text-lg"
              
            >
              Description
            </label>
            <select
              id="purpose"
              name="purpose"
              className="w-full border rounded-lg py-2 px-3 text-blue-900 border-gray-300 focus:outline-none font-medium h-12 text-lg"
              disabled
            >
              <option value="option1" >
                Select
              </option>
              
              {/* Add more options here */}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="assessmentName"
              className="text-blue-900 font-semibold mb-2 flex items-start px-6 mt-3 text-lg"
              
            >
              Skills
            </label>
            <div className="flex flex-col lg:h-[180px] h-[150px] w-11/12 border rounded-lg border-gray-300 ml-6">
              <div className="lg:h-[130px] h-[100px] border-b border-gray-300 flex px-3 mt-2 flex-wrap">
              {contentArray.slice(0, 3).map((item, index) => (
                <p 
                  key={index}
                  className={`bg-blue-100 h-[30px] text-blue-900 rounded-2xl ${item.width} items-start pt-[1.5px] flex justify-between px-2 ml-2`}
                >
                  {item.title}
                  <span className="text-blue-900 mt-1">
                    <MdOutlineClose size={20}/>
                  </span>
                </p>
                ))}

              {contentArray.slice(3).map((item, index) => (
                      <p
                        key={index}
                        className={`bg-blue-100 h-[30px] text-blue-900 rounded-2xl ${item.width} items-start pt-[1.5px] flex justify-between px-2 ml-2`}
                      >
                        {item.title}
                        <span className="text-blue-900 mt-1">
                          <MdOutlineClose size={20} />
                        </span>
                      </p>
                    ))}
              </div>
              <div className="h-[50px] flex items-center justify-start px-3">
                <p className="text-blue-900 text-lg">Type here</p>
              </div>
            </div>

          </div>

          <div className="mb-4 mx-4">
            <label
              htmlFor="assessmentName"
              className="text-blue-900 font-semibold mb-2 flex items-start px-1 mt-3 text-lg"
              
            >
              Duration of the assessment
            </label>
            <input
              type="text"
              id="assessmentName"
              name="assessmentName"
              placeholder="HH:MM:SS"
              className="w-full border rounded-lg py-2 px-3 text-blue-900 border-gray-300 focus:outline-none font-medium h-12 text-lg"
              disabled
              // Add any other input properties or state handling as needed
            />
          </div>
          {/* Add more form fields here as needed */}
          <div className="flex justify-center mb-4 mt-4">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full m-2"
              type="button"
              disabled
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </motion.div>
    )}
    </>
  );
};

export default FormModal;
