import { Paper, Typography } from '@mui/material'
import React from 'react'
import accounting from "accounting"
import './css/results.css'

const Results = ({src, title, description, price, stock, start, end}) => {
  return (
    <Paper className='rootResults'>
      <div className='left'>
        <img src={src} className='imageResult' alt={title}/>

      </div>
      <div className='rigth'>
          <Typography variant='h6'>{title}</Typography>
          <Typography variant='body1'>{description}</Typography>
          <Typography variant='body1'>Price per nigth {" "}</Typography>
          <span>{accounting.formatMoney(price) }</span>
          <Typography variant='body1'>Rooms Available
             <span className='number'>{stock}</span>
          </Typography>
          <Typography>{start}</Typography>
          <Typography>{end}</Typography>
          
      </div>
    </Paper>
  )
}

export default Results
