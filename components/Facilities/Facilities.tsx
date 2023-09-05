import React from 'react'
import Container from '../container/Container'
import {FaWifi,FaParking } from 'react-icons/fa'
import {FaPersonSwimming} from 'react-icons/fa6'
import {MdLocalLaundryService} from 'react-icons/md'
import {HiLightBulb} from 'react-icons/hi'

const Facilities = () => {
  return (
   <Container>

<div className='my-4'>




<h2  className='text-center text-6xl py-4'>
  Our Facilities
</h2>

<p className='text-center text-2xl'>
  We offer modern villa facilities for your comfort
</p>
<div className='py-2 grid aut-cols-max auto-rows-max  md:grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-4 my-40 '>



<div className="flex flex-col items-center justify-center bg-[#dfdfdf] w-3/4 px-16 py-16">


        <FaPersonSwimming size={60} color='#7c6a46'/>


    <h2 className="text-2xl text-[#7c6a46] my-4 leading-1">
            Swimming Pool
            </h2>


      
          </div>

          <div className="flex flex-col items-center justify-center bg-[#dfdfdf] w-3/4 px-16 py-16">


<FaWifi size={60} color='#7c6a46'/>


<h2 className="text-2xl text-[#7c6a46] my-4 leading-1">
    Wifi
    </h2>



  </div>

  <div className="flex flex-col items-center justify-center bg-[#dfdfdf] w-3/4 px-16 py-16">


        <FaParking size={60} color='#7c6a46'/>


    <h2 className="text-2xl text-[#7c6a46] my-4 leading-1">
           Parking
            </h2>


      
          </div>



</div>

<div className='py-2 grid aut-cols-max auto-rows-max  md:grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-4 my-40 '>



<div className="flex flex-col items-center justify-center bg-[#dfdfdf] w-3/4 px-16 py-16">


        <MdLocalLaundryService size={60} color='#7c6a46'/>


    <h2 className="text-2xl text-[#7c6a46] my-4 leading-1">
           Laundry
            </h2>


      
          </div>

          <div className="flex flex-col items-center justify-center bg-[#dfdfdf] w-3/4 px-16 py-16">


<HiLightBulb size={60} color='#7c6a46'/>


<h2 className="text-2xl text-[#7c6a46] my-4 leading-1">
24/7 Light
    </h2>



  </div>

  <div className="flex flex-col items-center justify-center bg-[#dfdfdf] w-3/4 px-16 py-16">


        <FaParking size={60} color='#7c6a46'/>


    <h2 className="text-2xl text-[#7c6a46] my-4 leading-1">
           Parking
            </h2>


      
          </div>



</div>
</div>

   </Container>
  )
}

export default Facilities