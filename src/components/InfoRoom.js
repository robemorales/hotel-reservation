import React from 'react'
import mockData from '../mockData'
import RoomCards from './RoomCards'
import Room from './Room'
import {ids} from './RoomCards'

const InfoRoom = () => {
  console.log("id cam=pturado "+ ids)
  
  return (
    <div>
       {
          
          mockData
          .filter((data)=>data.id === ids)
          .map(({src, title, description, price, stock, calification },index)=>(
            <Room
              
              title={title}
              src={src}
              description={description}
              price={price}
              stock={stock}
              calification = {calification}
              key={index}
            />

          ))
       }

    </div>
  )
}

export default InfoRoom