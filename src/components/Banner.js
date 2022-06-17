import React from 'react'
import {Button, Typography } from '@mui/material';
import './css/banner.css'

const Banner = () => {
  return (
    <div className='bannerRoot'>
      <div className='info'>
        <div className='textBanner'>
          <Typography  variant='h3'>Plane your getaway...</Typography>
        </div>
        <div className='buttonBanner'>
            <Button><p className='btn'>Check our rooms</p></Button>
        </div>
        
      </div>
    </div>
  )
}

export default Banner