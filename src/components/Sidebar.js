import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineDashboard, MdOutlineNoteAlt } from 'react-icons/md';
import { MdOutlineContentCopy } from 'react-icons/md';
import { BsQuestion } from 'react-icons/bs';
import { HiOutlineClipboard } from 'react-icons/hi';
import { BiCapsule } from 'react-icons/bi';
import { IoMdLaptop } from 'react-icons/io';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// it will hide sidebar when clicked outside
  const handleClickOutside = (event) => {
    // check if clicked outside the sidebar and if it is open
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      hideSidebar();
    }
    
  };
  useEffect(() => {
    // Add event listener to handle click outside of sidebar
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener('click', handleClickOutside, true);
    };
    // eslint-disable-next-line
  }, []);


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

  // Define functions to show and hide the sidebar
  const hideSidebar = () => {
    setIsOpen(false);
  };

  // Define functions to show and hide the sidebar
  const showSidebar = () => {
    setIsOpen(true);    
  }



  return (
    <div className="flex" >

      {/* Sidebar Icon (visible on small screens) */}
      <div className="md:hidden cursor-pointer px-4 py-2 bg-blue-50 rounded-3xl mt-2 ml-1" onClick={showSidebar}>
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineAlignLeft className='text-blue-900' size={24} />}
      </div>
    
      
      <div className="md:hidden flex items-start">
        <h4 className="ml-3 mt-[12px] text-blue-950 text-xl font-semibold">
          Assessment
        </h4>
        <IoMdLaptop size={20} className={`text-blue-950 mt-[16px] ${isLessThan400?'ml-36':'ml-48'}`} />

      </div>
      

      {/* Sidebar Content */}
      
      <div
        className={`fixed top-0 left-0 h-screen className="sidebar"   ${
          isOpen ? 'w-[85%]' : 'w-1/4'
        } bg-white transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:flex md:flex-col md:justify-between md:h-screen md:w-1/4 z-20`}
        ref={sidebarRef}>

        {/* Sidebar Header */}
        <div className="flex items-center ">


        {/* Close Icon (visible on small screens) */}
        <div className="md:hidden absolute top-9 right-4 cursor-pointer " onClick={hideSidebar}>
          <AiOutlineClose size={18} className="text-blue-950 "/>
        </div>

        {/* Heading (visible on small screens) */}
        <h2 className="md:hidden text-lg py-8 px-6 text-left text-blue-950">
          Menu
        </h2>
        </div>

        {/* Sidebar Items */}
        <nav className="px-4 py-2 text-left text-blue-950 text-lg">
          <ul className={`space-y-2 ${isOpen ? '' : 'hidden md:block'}`}>
            <li className="relative flex items-center flex-row py-2">
            <MdOutlineDashboard size={24} className="text-blue-950 ml-4" />
              <a className="block py-2 ml-2" href="/">
                Dashboard
              </a>
            </li>
            <li className=" flex items-center flex-row bg-blue-50 text-blue-600 font-semibold border border-blue-600 rounded-lg h-12 py-2">
            <MdOutlineNoteAlt size={24} className="text-blue-600 ml-4 " />
              <a className={`block py-1 ${isOpen ? '' : 'hidden md:block'} ml-2  `} href="/">
                Assessment
              </a>
            </li>
            <li className='flex items-center flex-row py-2'>
            <BsQuestion size={20} className="text-blue-950 absolute  text-center pl-[6px] pb-[2px] ml-4 " />
              <MdOutlineContentCopy size={24} className="text-blue-950 transform -rotate-90 text-center ml-4 " />
              <a className="block py-1 ml-2" href="/">
                My Library
              </a>
            </li>
            <li className="relative flex items-center py-2">
              <div className="border-t-2 border-dotted border-gray-500 absolute -top-1 w-full mt-2" />
            </li>
            <li className="flex items-center flex-row py-2">
              <BiCapsule size={24} className="text-blue-950 absolute text-center pl-[2px] pt-[7px] pr-[3px] pb-[3px] ml-4" />
              <HiOutlineClipboard size={24} className="text-blue-950  text-center ml-4"/>
              <a className="block py-1 ml-2" href="/">
                Round Status
              </a>
              <p className="text-red-700 text-xs font-[4px] border border-red-700 rounded-xl mt-1 bg-red-100 w-14 text-center ml-[18px]">
                Admin
            </p>
            </li>
          </ul>
        </nav>
      </div>

      {/* Permanent Navbar (visible on larger screens) */}
      <div className="hidden md:block w-40 bg-white h-screen absolute top-0 left-0 text-blue-950 text-[15px] font-[512] z-20">
        {/* Sidebar Items */}
        <nav className="px-4 py-2">

          {/* Sidebar Header */}
          <ul className="space-y-2 py-4">

            {/* Close Icon (visible on small screens) */}
            <li className="relative flex items-center flex-col py-4">
            <MdOutlineDashboard size={24} className="text-blue-950" />
              <a className="block py-1" href="/">
                Dashboard
              </a>
            </li>
            
            <li className="bg-blue-50 border border-blue-600 rounded-lg text-blue-600 w-24 mx-auto flex items-center flex-col py-2">
              <MdOutlineNoteAlt size={24} className="text-blue-600" />
              <a className="block py-1" href="/">
                Assessment
              </a>
            </li>
            
            <li className="relative flex items-center flex-col py-4">
            <BsQuestion size={18} className="text-blue-950 absolute  text-center pl-[2px] pt-[3px]" />
              <MdOutlineContentCopy size={24} className="text-blue-950 transform -rotate-90 text-center" />
              
              <a className="block py-1" href="/">
                My Library
              </a>
            </li>
            <li className='relative'>
            <div className="border-t border-dotted border-gray-950 absolute -top-1 w-full"></div>
            
            </li>
            <li className='relative'>
            <p className="text-red-600 text-xs font-[4px] border border-red-600 rounded-xl mt-5 bg-red-100 w-14 mx-auto text-center">
                Admin
            </p>
            </li>
            <li className="relative flex items-center flex-col py-4">
              <BiCapsule size={24} className="text-blue-950 absolute text-center pl-[2px] pt-[7px] pr-[3px] pb-[3px]" />
              <HiOutlineClipboard size={24} className="text-blue-950  text-center"/>
              <a className="block py-1" href="/">
                Round <br />Status
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
