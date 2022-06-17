import { HighlightOffTwoTone } from '@mui/icons-material'
import { Chip, Typography,Slider } from '@mui/material'
import React, { useState } from 'react'
import mockData,{ chips } from '../mockData'
import './css/search.css'
import Results from './Results'
import { useSelector } from 'react-redux/es/exports'
import { selectStart } from '../features/startSlice'
import { selectEnd } from '../features/endSlice'

const Search = () => {
  const [value, setValue] = useState(400)
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);

  const handleChange=(e, newValue)=>{
       setValue(newValue)
       console.log(value)
       console.log("este es end"+end)
       console.log("este es start"+start)
  }
  return (
    <div className='rootSearchPage'>
      <Typography variant='h5' gutterBottom>
         Available rooms
      </Typography>
      <div className='chips'>
        {
            chips.map(data => {
              let icon = <HighlightOffTwoTone/>
              return(
                  <Chip 
                  className='chip'
                  label={data.label}
                  key = {data.key}
                  icon = {icon}
                 
                  />

                
              )
           })
        }
         
      </div>
      <div className='selector'>
          <Typography gutterBottom>Prices</Typography>
          <Slider 
            value={value}
            onChange={handleChange}
            aria-label="Default"
            valueLabelDisplay="auto" 
            min={100}
            max={400}
          />
      </div>
       {
        mockData
        .filter((data)=>data.cat ==="room")//Filtra por room, la ostia!!!
        .filter((data)=>data.price <= value)
        .filter((data)=> end < data.notAvailablestart || start > data.notAvailableend)
        .map(({src, title, description, price, stock, notAvailablestart, notAvailableend},index)=>(
          
          <Results
             title={title}
             src={src}
             description={description}
             price={price}
             stock={stock}
             start ={notAvailablestart}
             end = {notAvailableend}
             key={index}

          />
        ))
       }
     
      

    </div>
  )
}

export default Search