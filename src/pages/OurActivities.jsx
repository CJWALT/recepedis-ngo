import React, { useState } from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from "@mui/material/Stack"
import ActivityItem from '../component/ouractivities/ActivityItem'

import activities from '../../src/ActivityData.json'



const OurActivities = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage; 
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
    const currentItems = activities.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (event, value) =>{
      event.preventDefault();      
      setCurrentPage(value); 
    }

  return (
    <div className='flex flex-col gap-[2rem] pb-[4rem]'>
    <div className=''>
        <div className='pt-[2.2rem] w-[90%] mx-auto sm:w-[80%] md:w-[90%] overflow-hidden flex justify-center flex-col'>
          <h2 className='text-center font-bold text-[1.5rem] md:text-[3rem] mb-[.5rem]'>
            Our Impactful Activities
          </h2>
          <p className='text-center leading-[1.2rem] md:leading-[1.4rem] text-[.9rem] md:text-[1rem] md:w-[50rem] text-clip break-words self-center font-light'>
            Explore the various ways we are making a difference, our activities are designed to provide support and hope to those in need. Join us in creating a better future for the vulnerable.
          </p>

        </div>
        <Stack spacing={3}>
          {currentItems.map((activity, i)=>{
            return(
              <ActivityItem
              key={i}
              heading={activity.heading}
              paragraph={activity.para}
              imgOne={activity.imgOne}
              imgTwo={activity.imgTwo}
              className={activity.bgColor}
            />
            ) 
              
          })}
          <Pagination
            className='flex justify-center'
            count = {Math.ceil(activities.length/itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton
            />

        </Stack>
          
      </div>
      
    
    </div>
  )
}

export default OurActivities
