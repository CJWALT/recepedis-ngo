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
      setCurrentPage(value); 
    }

  return (
    <div className='flex flex-col gap-[2rem] pb-[4rem]'>
      <div className='w-[90%] sm:w-[80%] md:w-[90%] mx-auto'>
        <Stack spacing={3}>
          {currentItems.map((activity, i)=>{
            return(
              <ActivityItem
              key={i}
              heading={activity.heading}
              paragraph={activity.para}
              imgOne={activity.imgOne}
              imgTwo={activity.imgTwo}
            />
            ) 
              
          })}
          <Pagination
            className='flex justify-center'
            count = {Math.ceil(activities.length/itemsPerPage)}
            page={activities}
            onChange={handlePageChange}
            />

        </Stack>
          
      </div>
      
    
    </div>
  )
}

export default OurActivities
