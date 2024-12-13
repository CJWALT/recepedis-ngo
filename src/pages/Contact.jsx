
import React, { useState } from 'react'
import Button from '../component/Button'


import InstagramIcon from '@mui/icons-material/Instagram';


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
    <div className='relative'>
       <span className='bg-gray-400 -z-10 absolute h-[50%] bottom-0 w-full block'>
        </span>
            <div className='w-[90%] sm:w-[80%] md:w-[90%] mx-auto border-2 border-red-400 py-[3rem]'>
              <div className='border-2 border-red-400 flex flex-col'>
                  <h4 className='font-bold mb-[.8rem] text-[2rem]'>Get in Touch </h4>

                <div className='px-4 py-7 bg-white shadow-lg'>
                  <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    
                      <input type='text' value={name} className='border-2 border-black rounded-md h-12' placeholder='Name:' onChange={(e) => setName(e.target.value)} required/>
                    <input type='email' value={email} className='border-2 border-black rounded-md h-12' placeholder='Email:' onChange={(e) => setEmail(e.target.value)} required/>
                    <textarea name="message" className='resize-none border-2 border-black rounded-md focus:outline-none' placeholder='Enter Message' rows={4} cols={3} value={message} id="message" onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                    
                      <div>
                      <Button
                      children='Send Message'
                      className='bg-btnColor hover:bg-white rounded-lg'/>
                        </div>          </form>  
                </div>
                <div className='border-2 border-red-400 py-4'>
                <h5 className='mb-2'> Stay Connected with us on our Socials: </h5> 
                  <div className='mb-4 flex gap-[1rem]'>
                    <span>
                    <a href="https://instagram.com/recepedis237?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><InstagramIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>  
                    </span>
                    <span>
                    <a href="https://instagram.com/recepedis237?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><InstagramIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>  
                    </span>
                    <span>
                    <a href="https://instagram.com/recepedis237?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><InstagramIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>  
                    </span>
                    <span>
                    <a href="https://instagram.com/recepedis237?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><InstagramIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>  
                    </span>
                    </div>
                </div>
              
              </div>
            </div>
      
    </div>
  )
}

export default Contact
