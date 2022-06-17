import React from 'react'
import {Typography } from '@mui/material';
import './css/footer.css'

const footer = () => {
  return (
    <div className='rootFooter'>
        <Typography variant='subtitle1' gutterBottom>
            2022 Copyright by Roberto
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
            Privacy  . Terms .SiteMap 
        </Typography>
    </div>
  )
}

export default footer