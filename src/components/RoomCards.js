import React from 'react'
import './css/roomcards.css'
import Typography from '@mui/material/Typography';

const RoomCards = ({src, title, description}) => {
  return (
    <div className='rootRooms'>
        <figure className='imageWrapper'>
          <img className='media' src={src} alt={title}/>

        </figure>
        <Typography variant='h5' color='textPrimary'>{title}</Typography>
        <Typography variant='h6' color='textSecondary'>{description}</Typography>

      
          
        
    </div>
  )
}

export default RoomCards