import React from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import './css/datepicker.css'
import { Button, InputBase, Typography } from '@mui/material';
import{People} from '@mui/icons-material'
import {useNavigate} from  'react-router-dom'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {selectStart,setStart} from '../features/startSlice';
import {selectEnd,setEnd} from '../features/endSlice';


const DatePicker = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const start = useSelector(selectStart);
  const end = useSelector(selectEnd);

  const selectionRange = {
    startDate: start,
    endDate: end,
    key: 'selection'
  }
  const handleSelect = (ranges)=>{ 
    console.log(ranges)
    dispatch(setStart(ranges.selection.startDate.getTime()))
    dispatch(setEnd(ranges.selection.endDate.getTime()))


  }
  return (
    <div className='calendar'>
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
        />
        <div className='inputSelection'>
            <Typography  className='text' variant='h5'>Number of guest</Typography>
            <div className='people'>
              <InputBase placeholder='2pax' className='input'
              inputProps={{className:'inputs'}}
              />
              <People/>
          
            </div>
            <div className='button'>
              <Button  onClick={()=>history("/search")}><p className='text-button'>Search room</p> </Button>
            </div>
            
        </div>
    </div>
    
  )
}

export default DatePicker
