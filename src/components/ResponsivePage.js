import React, { useEffect, useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdFilterAlt} from 'react-icons/md';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { IoMdAdd, IoMdMore, IoMdLink} from 'react-icons/io';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { BsClock } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
import { CiGrid2H } from 'react-icons/ci';
import { MdPersonOutline, MdPerson } from 'react-icons/md';
import { PiGlobeLight } from 'react-icons/pi';
import { ImArrowUpLeft2 } from "react-icons/im";
import { motion, AnimatePresence } from 'framer-motion';
import SmallScreenFormModal from './SmallScreenFormModal';


const ResponsivePage = ({ onClick }) => {
  const [showPartitions, setShowPartitions] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// Array of content to display
  const contentArray = [
    { title: 'Math Assessment'},
    { title: 'Math Assessment'},
    { title: 'Math Assessment'},
    { title: 'Math Assessment'},
    { title: 'Math Assessment'},
  ];

  // State to toggle the partitions
  const [showModal, setShowModal] = useState(false);


  // Define functions to show and hide the partitions
  const togglePartitions = () => {
    setShowPartitions(!showPartitions);
  };

  // Define functions to show the modal 
  const handlePopUp = () => {
    // console.log("hello");
    setShowModal(true);
  }

  // Define functions hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // check if clicked outside the modal 
  const handleBackgroundClick = (event) => {
    // Check if the click event is coming from the background element
    if (event.target.classList.contains('modal-background')) {
      handleCloseModal();
    }
  };

  
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


  return (
    <div className="bg-white w-full h-full" onClick={onClick}>
      <div className="mt-6 flex items-start">
        <h4 className="ml-5 text-blue-500 font-medium text-base">My Assessments</h4>
        <h4 className={`${isLessThan400?'ml-12':'ml-20'} text-blue-900 font-medium text-base`}>Unstop Assessments</h4>
      </div>
      {/* Horizontal row with border */}
      <div className="mt-4 relative">
      <hr className="border-t-4 border-blue-500 w-[180px] absolute left-0 -top-[2px] z-0" />
        <hr className="border-t-2 border-gray-200 w-full z-0" />
      </div>

      {/* Animated partitons  */}
      <AnimatePresence>
      {showPartitions && (
        <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: showPartitions ? 1 : 0,
          height: showPartitions ? 'auto' : 0
        }}
        exit={{
          opacity: 0,
          height: 0,
        }}
        transition={{ duration: 0.3 }}
      >
      <div className="flex flex-col mx-6 rounded-lg border-2 border-gray-200 items-center text-blue-900 font-semibold mt-4">
      {/* First and Fourth Partitions */}
      <div className="flex justify-between w-full">
    {/* First Partition */}
          <div className="px-2 h-34 w-48 rounded-tl-lg rounded-bl-lg border-r-2 border-gray-200">
            <h4 className='mt-2 text-base'>Total Assessment</h4>
            <div className='flex justify-start'>
              <div className="bg-indigo-100 h-10 w-10 rounded-xl flex justify-center items-center mt-3">
                <CiGrid2H size={20} className="text-indigo-500 font-bold "/>
              </div>
              <h4 className='mt-5 ml-4 text-lg font-bold'>34</h4>
            </div>
          </div>
          {/* Fourth Partition */}
          <div className="px-4 h-34 w-48 rounded-tr-lg rounded-br-lg">
            <h4 className='mt-3 text-base'>Total Purpose</h4>
            <div className='flex justify-start'>
              <div className="bg-blue-100 h-10 w-10 rounded-xl flex justify-center items-center mt-3 mb-1">
                <IoMdLink size={20} className="text-blue-500 font-bold "/>
              </div>
              <h4 className='mt-5 ml-4 text-lg font-bold'>11</h4>
            </div>
          </div>
        </div>  

        <div className="border-b-2 border-gray-200 w-full"></div>
        
        {/* Second Partition */}
        <div className="px-4 h-34 w-full border-b-2 border-gray-200 mb-4">
          <h4 className='mt-2 text-base flex justify-start'>Candidates</h4>
          <div className='flex justify-start'>
            <div className="bg-indigo-100 h-10 w-10 rounded-xl flex justify-center items-center mt-4 relative mb-4">
              <MdPersonOutline size={20} className="absolute top-3 left-[8px] z-10 text-indigo-600"/>
              <MdPerson size={20} className='text-indigo-500 clip-person absolute top-3 left-[13px] transform -scale-x-100 pl-[1px]' />
            </div>
            <div className='flex items-center'>
              <h4 className='ml-6 mt-2 text-blue-900 text-base  font-bold'>11,145 <span className='text-green-500 text-xs font-semibold'>+89</span> <br className='ml-14' /> <p className='text-xs font-semibold'>Total Candidate</p></h4>
            </div>
            <h2 className="text-gray-200 text-5xl font-thin mx-2 mt-[4px] ml-3">|</h2>

            <div className='flex items-center text-sm'>
              <h4 className='ml-2 mt-2 text-blue-900 text-base font-bold'>1,14 <span className='text-green-500 text-xs font-semibold'>+89</span> <br className='ml-14' /> <p className='text-xs font-semibold'>Who Attempted</p></h4>
            </div>
          </div>
        </div>

        {/* Third Partition */}
        <div className="px-4 h-34 w-full border-b-1 border-gray-200 mb-2">
          <h4 className='mt-1 text-base flex justify-start'>Candidates Source</h4>
          <div className='flex justify-start'>
            <div className={`bg-pink-100 ${isLessThan400?'h-8':'h-10'} ${isLessThan400?'w-8':'w-10'} rounded-xl flex justify-center items-center mt-3 relative`}>
              <PiGlobeLight size={isLessThan400?16:20} className="z-10 text-rose-600 top-3 left-[8px]" style={{ clipPath: 'polygon(100% 0%, 100% 50%, 0 100%, 0 25%, 25% 0)' }} />
              <ImArrowUpLeft2 className={`text-rose-600 ${isLessThan400?'top-5':'top-6'} ${isLessThan400?'left-auto ml-1.5':'left-[20px]'} absolute`} size={isLessThan400?8:10} />
            </div>
            <div className='flex items-center'>
              <h4 className='ml-4 mt-2 text-blue-900 text-sm font-bold'>11,000
              <span className='text-green-500 text-xs font-semibold'>+89</span> 
              <br className='ml-14' /> <p className='text-xs font-semibold flex items-start'>E-mail</p>
              </h4>
            </div>
            <h2 className="text-gray-200 text-5xl font-thin mx-1 mt-[4px] ml-1">|</h2>
            <div className='flex items-center ml-1'>
              <h4 className='ml-1 mr-1 mt-2 text-blue-900 text-sm font-bold'>11,000<span className='text-green-500 text-xs font-semibold'>+89</span> <br className='ml-14' /> <p className='text-xs font-semibold'>Social Share</p></h4>
            </div>
            <h2 className="text-gray-200 text-5xl font-thin mx-1 mt-[4px] ml-1">|</h2>
            <div className='flex items-center ml-1'>
              <h4 className='ml-0 mt-2 text-blue-900 text-sm font-bold'>11,000<span className='text-green-500 text-xs font-semibold'>+89</span> <br className='ml-14' /> <p className='text-xs font-semibold'>Unique Link</p></h4>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
      )}
      </AnimatePresence>

      {/* header */}
      <div className='flex items-start mt-8'>
        <h4 className={`${isLessThan400?'ml-5':'ml-8'} text-blue-950 font-semibold text-lg`}>My Assessment</h4>
        <AiOutlineSearch size={26} className={`mt-1 ${isLessThan400?'ml-20':'ml-32'} text-blue-950`}/>
        <MdFilterAlt size={26} className='mt-1 ml-4 text-blue-950'/>
        <button className={` ml-3  cursor-pointer transform -scale-x-100 ${
            showPartitions ? 'bg-blue-100 rounded-3xl h-10 w-10 flex items-center justify-center text-blue-500 border border-blue-500' : 'text-blue-950 mt-1'
          }`}>
        <BiSolidBarChartAlt2 size={26}  onClick={togglePartitions}/>
        </button>
      </div>

      {/* cards */}
      {/* 1st card */}
      <div className='mt-6 ml-3'>
      <div className={`bg-gray-100 h-52 w-[97%] rounded-lg border-2 border-gray-200 border-dotted flex flex-col justify-center items-center`}>
        <div className="bg-white h-20 w-20 rounded-full border-2 border-white border-dotted flex justify-center items-center mb-2">
        <button onClick={handlePopUp}>
          <IoMdAdd size={36} className="text-blue-600" />
        </button>
        </div>
        <h2 className="text-blue-900 font-semibold text-xl">New Assessment</h2>
        <p className='text-blue-900 text-sm mt-2 font-medium flex justify-center'>From here you can add questions of multiple types <br /> &nbsp;&nbsp;&nbsp; like MCQs, subjective (text or paragraph)!</p>
        </div>
        </div>

        {/* 2nd card */}
        <div className={`relative flex flex-col w-[94%] h-36 rounded-lg border-2 mt-4 ml-3`}>
          <div className='flex items-start'>
            <div className="bg-indigo-100 h-12 w-12 rounded-2xl flex justify-center items-center mt-4 ml-4">
              <IoBriefcaseOutline size={26} className="text-indigo-500" />
            </div>

            <div className="ml-3">
              <h2 className='text-blue-900 text-lg font-medium mt-2'>Math Assessment</h2>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-base font-medium mt-1'>Job</h4>
              <h2 className="text-gray-300 text-lg font-thin mx-2 mt-[1px]">|</h2>
              <BsClock className="text-gray-400 mt-[4px] " size={14} />
              <h4 className='text-gray-400 ml-1 mt-[4px] text-sm font-medium'>20 Apr 2023</h4>
            </div>
          </div>

            <div className="absolute top-4 right-4">
            <IoMdMore size={28} className="text-blue-950" />
          </div>
        </div>

          <div className="w-6/7 border-t border-dotted border-gray-400 my-2 ml-4 mr-4" />
          <div className='flex justify-start'>
            <div className='ml-3'>
            <h4 className=' mt-1 text-blue-900 text-base font-semibold'>00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00</h4>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-sm mx-0'>Duration&nbsp;&nbsp; Question</h4>
            </div>
            </div>
            <div className={`bg-white h-8 w-20 rounded-2xl border flex items-center mt-2 ${isLessThan400 ? 'ml-20' : 'ml-28'} border-blue-900`}>
              <AiOutlineLink size={20} className='text-blue-900 ml-1' />
              <h4 className='text-blue-900 font-medium ml-1'>Share</h4>
            </div>
            <div className='bg-indigo-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-2'>
              <h3 className='text-white font-semibold'>LP</h3>
            </div>
          </div>
        </div>

        {/* 5 cards */}
        {contentArray.map((item, index)=> (
          <div className={`relative flex flex-col w-[94%] h-36 rounded-lg border-2 mt-4 ml-3`} key={index}>
          <div className='flex items-start'>
            <div className="bg-indigo-100 h-12 w-12 rounded-2xl border-2 border-dotted flex justify-center items-center mt-4 ml-4">
              <IoBriefcaseOutline size={26} className="text-indigo-500" />
            </div>

            <div className="ml-3">
              <h2 className='text-blue-900 text-lg font-medium mt-2' >{item.title}</h2>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-base font-medium mt-1'>Job</h4>
              <h2 className="text-gray-300 text-lg font-thin mx-2 mt-[1px]">|</h2>
              <BsClock className="text-gray-400 mt-[4px] " size={14} />
              <h4 className='text-gray-400 ml-1 mt-[4px] text-sm font-medium'>20 Apr 2023</h4>
            </div>
          </div>

            <div className="absolute top-4 right-4">
            <IoMdMore size={28} className="text-blue-950" />
          </div>
        </div>

          <div className="w-6/7 border-t border-dotted border-gray-400 my-2 ml-4 mr-4" />
          <div className='flex justify-start'>
            <div className='ml-3'>
            <h4 className=' mt-1 text-blue-900 text-base font-semibold'>00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00</h4>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-sm mx-0'>Duration&nbsp;&nbsp; Questions</h4>
            </div>
            </div>
            <div className={`bg-white h-8 w-20 rounded-2xl border flex items-center mt-2 ${isLessThan400 ? 'ml-4' : 'ml-16'} border-blue-900`}>
              <AiOutlineLink size={20} className='text-blue-900 ml-1' />
              <h4 className='text-blue-900 font-medium ml-1'>Share</h4>
            </div>
            <div className="relative">
            <div className="bg-indigo-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className="bg-blue-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1 absolute top-[0.5px] left-[15px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className="bg-pink-700 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1 absolute top-[0.5px] left-[30px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className='flex justify-center items-center absolute top-[15.5px] left-[68px]'>
              <h3 className='text-blue-900 font-semibold text-xs'>+324</h3>
            </div>
          </div>
          </div>
        </div>

        ))}

        {/* last card */}
        <div className={`relative flex flex-col w-[94%] h-36 rounded-lg border-2 mt-4 ml-3`}>
          <div className='flex items-start'>
            <div className="bg-indigo-100 h-12 w-12 rounded-2xl border-2 border-dotted flex justify-center items-center mt-4 ml-4">
              <IoBriefcaseOutline size={26} className="text-indigo-500" />
            </div>

            <div className="ml-3">
              <h2 className='text-blue-900 text-lg font-medium mt-2' >Math Assessment</h2>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-base font-medium mt-1'>Job</h4>
              <h2 className="text-gray-300 text-lg font-thin mx-2 mt-[1px]">|</h2>
              <BsClock className="text-gray-400 mt-[4px] " size={14} />
              <h4 className='text-gray-400 ml-1 mt-[4px] text-sm font-medium'>20 Apr 2023</h4>
            </div>
          </div>

            <div className="absolute top-4 right-4">
            <IoMdMore size={28} className="text-blue-950" />
          </div>
        </div>

          <div className="w-6/7 border-t border-dotted border-gray-400 my-2 ml-4 mr-4" />
          <div className='flex justify-start'>
            <div className='ml-3'>
            <h4 className=' mt-1 text-blue-900 text-base font-semibold'>00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00</h4>
            <div className='flex items-center'>
              <h4 className='text-blue-900 text-sm mx-0'>Duration&nbsp;&nbsp; Questions</h4>
            </div>
            </div>
            <div className={`bg-white h-8 w-20 rounded-2xl border flex items-center mt-2 ${isLessThan400 ? 'ml-1' : 'ml-12'} border-blue-900`}>
              <AiOutlineLink size={20} className='text-blue-900 ml-1' />
              <h4 className='text-blue-900 font-medium ml-1'>Share</h4>
            </div>
            <div className="relative">
            <div className="bg-indigo-500 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className="bg-pink-700 h-8 w-8 rounded-full flex justify-center items-center mt-2 ml-1 absolute top-[0.5px] left-[15px] border border-white">
              <h3 className="text-white font-semibold">LP</h3>
            </div>
            <div className='flex justify-center items-center absolute top-[15.5px] left-[54px]'>
              <h3 className='text-blue-900 font-semibold text-xs'>+32,4090</h3>
            </div>
          </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
        <div className="modal-background" onClick={handleBackgroundClick}>
          <SmallScreenFormModal show={showModal} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default ResponsivePage;
