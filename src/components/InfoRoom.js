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
          .map(({src,src1,src2,src3,src4, title, description, price, stock },index)=>(
            <Room
              
              title={title}
              src={src}
              src1={src1}
              src2={src2}
              src3={src3}
              src4={src4}
              description={description}
              price={price}
              stock={stock}
              key={index}
            />

          ))
       }

    </div>
  )
}

export default InfoRoom