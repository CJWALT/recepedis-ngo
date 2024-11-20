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
    <div className='flex flex-col gap-[2rem] py-[4rem]'>
      <div className='w-[90%] mx-auto'>
        <Stack spacing={3}>
          {currentItems.map((activity)=>{
            return(
              <ActivityItem
              heading={activity.heading}
              paragraph={activity.para}
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
