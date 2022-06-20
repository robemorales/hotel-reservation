import { Typography, Paper, Grid, Button } from '@mui/material'
import React from 'react'
import accounting from 'accounting'
import './css/room.css'
import Checkbox from '@mui/material/Checkbox';
import SendIcon from '@mui/icons-material/Send';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';

import TextareaAutosize from '@mui/material/TextareaAutosize';

const Room = ({src,src1,src2,src3,src4, title, description, price, stock }) => {
    const [state, handleSubmit] = useForm("xayvzqqg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

  
  return (
    <Paper className='rootResults'>
    <div className='all'>
     <div className='up'>
     <Grid item sm="6" md="4" lg="3">
        <div className='imageslist'>
            <img src={src} className='imageResult1'  alt={title}/>
            <img src={src1} className='imageResult2' alt={title}/>
            <img src={src2} className='imageResult3' alt={title}/>
            <img src={src3} className='imageResult4' alt={title}/>
            <img src={src4} className='imageResult5' alt={title}/>

        </div>
        
        
      </Grid>
     
    </div>   
    <div className='down'>
        <Typography variant='h6'>{title}</Typography>
            <Typography variant='body1'>{description}</Typography>
            <Typography variant='body1'>Price per nigth {" "}</Typography>
            <span>{accounting.formatMoney(price) }</span>
        <Typography variant='body1'>Rooms Available
           <span className='number'>{stock}</span>
        </Typography>
        <Typography variant='h6'>Give us your calification</Typography>
        <div>
            <Checkbox  defaultValue={1} color="success" />
            <Checkbox  defaultValue={2} color="success" />
            <Checkbox  defaultValue={3} color="success" />
            <Checkbox  defaultValue={4} color="success" />
            <Checkbox  defaultValue={5} color="success" />
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
                <Button variant="contained" color="success" type="submit" disabled={state.submitting}>
                    <SendIcon/>
                </Button>
            </div>
            </div>
        </form>
       
    </div>
    
        
    </div>
    
  </Paper>
  )
}

export default Room