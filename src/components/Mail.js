import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './css/mail.css'
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';
import {useNavigate} from  'react-router-dom';
import SendIcon from '@mui/icons-material/Send';



const Mail = () => {
    const [state, handleSubmit] = useForm("xnqwrkyp");
    const history = useNavigate();
    if (state.succeeded) {
        
        return <Alert onClick={()=>history("/")} severity="success" ><p className='alertText'>This email has been sent successfully!!!</p></Alert>;
        
    }
    return (
        <div className='rootMeil'>
            <React.Fragment>
        <CssBaseline />
            <Container maxWidth="sm">
                
                <Box sx={{ bgcolor: '#fff', height: '72vh' }} >
                <form onSubmit={handleSubmit}>
                    <TextField className='email' type="email"  name="email"  fullWidth id="email" label="Enter your email address" variant="standard" />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <TextareaAutosize 
                        id="message"
                        className='bodyText'
                        aria-label="minimum height"
                        name="message"
                        minRows={20}
                        
                       
                        style={{ width: 550 }}
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <Button variant="contained" color="success" type="submit" disabled={state.submitting}>
                         <SendIcon/>
                    </Button>
                    </form>
                </Box>
            </Container>
        </React.Fragment>

        </div>
        
        /*<form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
       
        <textarea
          id="message"
          name="message"
        />
        
        
     */
    );
}

export default Mail
