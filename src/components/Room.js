import { Typography, Paper, Grid, Button, iconButtonClasses } from '@mui/material'
import React from 'react'
import accounting from 'accounting'
import './css/room.css'
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';


import TextareaAutosize from '@mui/material/TextareaAutosize';

const Room = ({src, title, description, price, stock, calification }) => {
    const [state, handleSubmit] = useForm("xayvzqqg");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

 const score =()=>{
    let check = []; 
    for (let index = 0; index < 5; index++) {
      check[index] =   <Checkbox id='selected'  color="success" />
      for (let j = 0; j < calification; j++) {
        check[j] =<Checkbox id='selected' value={2}   defaultChecked  color="success" /> 
        
      }
       
    } 
    return check
 }

    //putRooms(id)
    

 

  return (
    <Paper className='rootResults'>
    <div className='all'>
     <div className='up'>
     <Grid item sm="6" md="4" lg="3">
        <div className='imageslist'>
            <img src={src} className='imageResult1'  alt={title}/>
       

        </div>
        <div className='down'>
        <Typography variant='h6'>{title}</Typography>
            <Typography variant='body1'>{description}</Typography>
            <Typography variant='body1'>Price per nigth {" "}</Typography>
            <span>{accounting.formatMoney(price) }</span>
        <Typography variant='body1'>Rooms Available
           <span className='number'>{stock}</span>
        </Typography>
        <Typography variant='h6'>Our calification</Typography>
        <div>
          
           {
                score()
                
           } 
        </div>

   
      
      
   
        <form onSubmit={handleSubmit}>
            <div className='opinions'>
            <TextField className='emailOpinion' type="email"  name="email"    label="Enter your email address" variant="standard" />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    /> 
            <div>
                <TextareaAutosize
                    id="message"
                    name="message"
                    placeholder="Your Opinion Here"
                    style={{ width: 550, height: 150 }}
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
            </div>  
            <div>
                <Button variant="contained" className='buttonOpinion' color="success" type="submit" disabled={state.submitting}>
                    <SendIcon/>
                </Button>
            </div>
            </div>
        </form>
       
    </div> 
        
      </Grid>
     
    </div>   
    
    
        
    </div>
    
  </Paper>
  )
}

export default Room