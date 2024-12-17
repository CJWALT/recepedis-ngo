
import React, { useState } from 'react'
import Button from '../component/Button'


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { toast, ToastContainer} from 'react-toastify'


function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')

   
  
  
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    try{ 
        const res = await fetch('https://recepedis-api.vercel.app/api/sendmessage',{ 
            method:'POST',
            body: JSON.stringify({ 
              name, email, message
            }),
            headers:{
              'content-type': 'application/json'
            },
          }); 

          if(res.status === 200 ){ 
            toast.success('Message sent Successfully', {
              position:'top-left', 
              autoClose:3000, 
              hideProgressBar:false, 
              closeOnClick:true,
              pauseOnHover:true, 
              draggable:true, 
              progress:undefined
            })}
            else{ 
              toast.error('Failed to send Message.')
            }            
          }
      catch(err){ 
      console.log('err', err)
      toast.error('Something went wrong. Please try again')
    }    
  }
 
  return (
    <div className='relative'>
       <span className='bg-[#010104cc] -z-10 absolute h-[50%] md:bottom-unset md:right-0 md:w-[50%] md:h-[100%] bottom-0 w-full block'>
        </span>
            <div className='w-[90%] sm:w-[80%] md:w-[90%] mx-auto py-[3rem]'>
              <div className='flex flex-col'>
                  <h4 className='font-bold mb-[.8rem] text-[2rem]'>Get in Touch </h4>
                  <div className='md:flex md:flex-row md:flex-wrap gap-4 xl:gap-10'>
                      <div className=' px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-20 xl:px-16 xl:py-20 md:w-[60%] bg-white shadow-lg'>
                      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
                        
                          <input type='text' value={name} className='p-4 border-2 border-black rounded-md h-12' placeholder='Name:' onChange={(e) => setName(e.target.value)} required/>
                        <input type='email' value={email} className='p-4 border-2 border-black rounded-md h-12' placeholder='Email:' onChange={(e) => setEmail(e.target.value)} required/>
                        <textarea name="message" className='p-4 resize-none border-2 border-black rounded-md focus:outline-none' placeholder='Enter Message' rows={4} cols={3} value={message} id="message" onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                        
                          <div>
                          <Button
                          children='Send Message'
                          className='bg-btnColor hover:bg-white rounded-lg'/>
                            </div>        
                              </form>  
                    </div>
                    <div className='pt-6 mt-[2rem] md:w-[15rem] lg:w-[35%] md:self-center text-white'>
                    <h5 className='mb-2 text-[1rem] md:text-[1.4rem] lg:text-[2rem] font-normal lg:font-bold'> Stay Connected with us: </h5> 
                      <div className='mb-4 flex gap-[1rem]'>
                        <span>
                        <a href="https://instagram.com/recepedis237?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><InstagramIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>  
                        </span>
                        <span>
                        <a href="https://www.facebook.com/profile.php?id=100079275348605&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><FacebookIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                        </span>
                        <span>
                        <a href="https://wa.me/+237677087801" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>

                        </span>
                        <span>
                        <a href="https://instagram.com/recepedis237?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><InstagramIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>  
                        </span>
                        </div>
                        <div>
                          <h5 className='mt-4 lg:mt-12 text-[1rem] font-light'>Mile 90, Nsongwa Bamenda Cameroon.</h5>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
            <ToastContainer />
    </div>
  )
}

export default Contact
