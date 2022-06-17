import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';

const Mail = () => {
    const [state, handleSubmit] = useForm("xnqwrkyp");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
      
          <form onSubmit={handleSubmit} className='emailForm'>
            <div className='email'>
              
                <TextField htmlFor="email"
                  id="email"
                  label="email"
                  placeholder="e-mail"
                  multiline
                  variant="standard"
                  name = "email"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />

            </div>
            <div className='textArea'>
                <textarea
                id="message"
                name="message"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>  
         
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>

        
    );
  }


export default Mail
