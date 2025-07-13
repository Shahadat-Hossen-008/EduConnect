'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CollegeCard() {
  const [collegeList, setCollegeList] = useState([]);

  // Fetch college list data from API
  const CollegeListData = async () => {
    const data = await fetch("http://localhost:5000/college-limit-list");
    const response = await data.json(); 
    setCollegeList(response);
  };

  useEffect(() => {
    CollegeListData(); 
  }, []);
console.log(collegeList);

  return (
     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8 w-11/12 mx-auto">
      {collegeList.map((college) =>{
        
        
        return(
        <div 
          key={college._id} 
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
        >
          <div className=" w-full h-48 p-4">
            <Image
              src={college.collegeImage}
              alt={college.collegeName}
              className="object-cover w-full h-full"
              priority
              width={420} height={250}
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold my-2 text-gray-800">
              {college.collegeName}
            </h3>
            <p className="text-sm text-green-600 mb-2">
              Admissions open: {college.admissionDates || 'Not specified'}
            </p>
            <p className="text-gray-600 mb-4">
              {college.description.slice(0,200)}...
            </p>
            <button className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      )})}
    </div>
  );
}
