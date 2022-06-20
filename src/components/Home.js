import { Button, CssBaseline, Grid } from '@mui/material'
import React, { useState } from 'react'
import mockData from '../mockData'
import Banner from './Banner'
import DatePicker from './DatePicker'
import RoomCards from './RoomCards'
import './css/home.css'

const Home = () => {
  const [showdate, setShowdates] =useState(false);
  return (
    <CssBaseline>
          
            
          
           <div className='date' style={{zIndex: 2}}>
           
           <Button onClick={()=>setShowdates(!showdate)}>
                  {
                    showdate ? <p className='hide'>Hide</p>:<p className='searchDate'>Search Date</p>
                  }
              </Button>
              {
                 showdate && <DatePicker/>
              }
              
           </div>
           <div className='rootBanner' style={{zIndex: 1}}>
              <Banner/>
           </div>
           <div className='roomcard'>
           <Grid container  spacing={1}>
                {
                  mockData.map(({id, src, title, description}, index)=>(
                    <Grid item sm="6" md="4" lg="3">
                        <RoomCards 
                          id={id}
                          src={src}
                          title = {title}
                          description ={description}
                          key={index}                       
                        />
                    </Grid>
                    
                  ))
                }
           </Grid>
      
           </div>
           
      
        
        
        
    </CssBaseline>
    
  )
}

export default Home