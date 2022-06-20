import React from 'react'
import './css/roomcards.css'
import Typography from '@mui/material/Typography';
import {useNavigate} from  'react-router-dom';
import InfoRoom from './InfoRoom';

export let ids = 0
const RoomCards = ({id, src, title, description}) => {
  const  history = useNavigate()

 
  
  return (
    
    <div className='rootRooms'>
        
        <figure className='imageWrapper' onClick={()=>getId({id})}>
          <img className='media' onClick={()=>history('/infoRoom')} src={src} alt={title} />

         
        </figure>
        <Typography variant='h5' color='textPrimary'>{title}
          
        </Typography>
        <Typography variant='h6' color='textSecondary'>{description}</Typography>

      
          
        
    </div>
   
  )
 
}
function getId(id){
  console.log(id.id)
  ids =  id.id
}

  

export default RoomCards