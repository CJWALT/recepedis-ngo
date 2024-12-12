import React, { useState } from 'react'

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

   
  
  
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    try{ 
        const res = await fetch('http://localhost:3000/api/sendmessage',{ 
            method:'POST',
            mode:'no-cors',
            body: JSON.stringify({ 
              name, email, message
            }),
            headers:{
              'content-type': 'application/json'
            },

        })}
        
    catch(err){ 
      console.log('err', err)
    }    
  }
 
  return (
    <>
    <div className='w-[90%] sm:w-[80%] md:w-[90%] mx-auto border-2 border-red-400 py-[6rem]'>

    <h4>Contact us at RECEPEDIS today!</h4>

      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
            <input type='text' value={name} placeholder='Name:' onChange={(e) => setName(e.target.value)} required/>

            <label htmlFor="email">
              Email: 
            </label>
            <input type='email' value={email} placeholder='Email:' onChange={(e) => setEmail(e.target.value)} required/>
            
            <label htmlFor="message">Message:</label>
            <textarea name="message" value={message} id="message" onChange={(e) => setMessage(e.target.value)}>
              Enter message here
            </textarea>
            <button type='submit'>Send message</button>
              </form>  
              
            </div>
      
    </>
  )
}

export default Contact
