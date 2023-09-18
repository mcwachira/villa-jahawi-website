import React from 'react'
import Image from 'next/image'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {GiBathtub} from 'react-icons/gi'
import Container from '@/components/container/Container'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'
import {BsPeopleFill} from 'react-icons/bs'



const Rooms = () => {
  return (
  <>
  
  <section className="mb-40">

{/* <!-- Jumbotron --> */}
<div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '50%',
      backgroundImage:" url('/assets/images/blog-2.png')",
      height: '850px'
}}>
  <div
    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.25)] bg-fixed">
    <div className="flex flex-col md:flex-row w-full items-center justify-end  md:w-2/3 h-full md:items-end md:justify-start text-white">

        <div className="mb-2 justify-end md:mb-28 mx-14  text-left font-bold tracking-tight flex flex-col sm:1/2 md:w-1/2">
          <span className='text-3xl my-4'>
          Designed to take advantage of 
          </span>

<div className='w-full flex justify-between items-center'>


<span className='text-6xl xl:text-7xl'>
The sunny costal climate
          </span>

</div>
    

        </div>
        <div className="px-6 text-center  mb-12 md:mb-24 ml-auto text-white md:px-12">
        <button href="#section1" scroll={false}
          className="bg-white opacity-60">
          <AiOutlineArrowDown size={60} color='#111'/>
        </button>
      </div>
     
    </div>
  </div>
</div>
{/* <!-- Jumbotron --> */}
</section>



  <Container>

<h2  className='text-center text-6xl py-24'>
  Our Facilities
</h2>

</Container>


  <div className="pb-20 w-full grid  md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 " id="#section1">





<div className='mt-20 ml-auto mr-auto w-full'>

<Container>
    <div className='flex flex-col'>
    
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 text-3xl text-left capitalize font-semibold  "> 3 Bedroom </h2>
                
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#7c6a46] text-5xl text-left capitalize font-semibold  ">Contemporary Swahili furnishing </h2>
      
                  
    <p className='text-2xl my-4'>

Lamu style carved door features a fountain against a triple height coral clad wall with decorative grille panel bringing light & ventilation into the whole villa.
</p>
     
<div className="flex my-14 ">
      <div className="flex items-center">
          <BsPeopleFill size={60} color='#7c6a46'/>
        <p className="ml-2 text-2xl  font-medium text-gray-700">for upto 6 people</p>
      </div>

      
    </div>

  
            <div className=" w-2/3 my-16 flex justify-between items-center space-x-1
    ">
<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Inquire</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Book Now</span>
</Link>
    </div>



    </div>
    </Container>
</div>


    <div className="relative  mx:auto my-auto md:w-full order-first md:order-last ">
        <Image
            src="/assets/images/blog-2.png"
            loading="lazy" alt="Care Girl Image"
            className="relative z-10 shadow-lg object-cover rounded-lg"
            width="916" height="817"/>






</div>

</div>



<div className="pb-20 w-full grid  md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 ">

<div className="relative  mx:auto my-auto md:w-full  ">
        <Image
            src="/assets/images/blog-2.png"
            loading="lazy" alt="Care Girl Image"
            className="relative z-10 shadow-lg object-cover rounded-lg"
            width="916" height="817"/>






</div>


<div className='mt-20 ml-auto mr-auto w-full'>


<Container>
    <div className='flex flex-col'>
    
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-6 pr-2 justify-start items-start text-gray-500 text-3xl text-left capitalize font-semibold  "> 4 Bedroom </h2>
                
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-[#7c6a46] text-5xl text-left capitalize font-semibold  ">Contemporary Swahili furnishing </h2>
      
                  
    <p className='text-2xl my-4'>

Lamu style carved door features a fountain against a triple height coral clad wall with decorative grille panel bringing light & ventilation into the whole villa.
</p>
     
<div className="flex my-14 ">
      <div className="flex items-center">
          <BsPeopleFill size={60} color='#7c6a46'/>
        <p className="ml-2 text-2xl  font-medium text-gray-700">for upto 8 people</p>
      </div>

      
    </div>

  
            <div className=" w-2/3 my-16 flex justify-between items-center space-x-4
    ">
<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Inquire</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Book Now</span>
</Link>
    </div>



    </div>
    </Container>
</div>



</div>
{/* 
<div className="pb-20 w-full grid  md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 " id="#section1">





<div className='mt-20 ml-auto mr-auto w-full'>

<Container>
    <div className='flex flex-col'>
    
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-gray-500 text-3xl text-left capitalize font-semibold  "> 3 Bedroom </h2>
                
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-gray-500 text-5xl text-left capitalize font-semibold  ">Contemporary Swahili furnishing </h2>
      
         
     
     

  
            <div className=" my-16 flex justify-between items-center space-x-4
    ">
<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Book Now</span>
</Link>
    </div>



    </div>
    </Container>
</div>


    <div className="relative  mx:auto my-auto md:w-full order-first md:order-last ">
        <Image
            src="/assets/images/blog-2.png"
            loading="lazy" alt="Care Girl Image"
            className="relative z-10 shadow-lg object-cover rounded-lg"
            width="916" height="817"/>






</div>

</div>



<div className="pb-20 w-screen grid  md:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3first-letter:mx-auto">

<div className="relative  mx:auto my-auto md:w-full  ">
        <Image
            src="/assets/images/blog-2.png"
            loading="lazy" alt="Care Girl Image"
            className="relative z-10 shadow-lg object-cover rounded-lg"
            width="916" height="817"/>






</div>


<div className='mt-20 ml-auto mr-auto w-full'>

<Container>
    <div className='flex flex-col'>
    
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-gray-500 text-3xl text-left capitalize font-semibold  "> 3 Bedroom </h2>
                
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-gray-500 text-5xl text-left capitalize font-semibold  ">Contemporary Swahili furnishing </h2>
      
         
     
     

  
            <div className=" my-16 flex justify-between items-center space-x-4
    ">
<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Book Now</span>
</Link>
    </div>



    </div>
    </Container>
</div>



</div>

<div className="pb-20 w-full grid  md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 " id="#section1">





<div className='mt-20 ml-auto mr-auto w-full'>

<Container>
    <div className='flex flex-col'>
    
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-gray-500 text-3xl text-left capitalize font-semibold  "> 3 Bedroom </h2>
                
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-gray-500 text-5xl text-left capitalize font-semibold  ">Contemporary Swahili furnishing </h2>
      
         
     
     

  
            <div className=" my-16 flex justify-between items-center space-x-4
    ">
<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Book Now</span>
</Link>
    </div>



    </div>
    </Container>
</div>


    <div className="relative  mx:auto my-auto md:w-full order-first md:order-last ">
        <Image
            src="/assets/images/blog-2.png"
            loading="lazy" alt="Care Girl Image"
            className="relative z-10 shadow-lg object-cover rounded-lg"
            width="916" height="817"/>






</div>

</div>



<div className="pb-20 w-screen grid  md:grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3first-letter:mx-auto">

<div className="relative  mx:auto my-auto md:w-full  ">
        <Image
            src="/assets/images/blog-2.png"
            loading="lazy" alt="Care Girl Image"
            className="relative z-10 shadow-lg object-cover rounded-lg"
            width="916" height="817"/>






</div>


<div className='mt-20 ml-auto mr-auto w-full'>

<Container>
    <div className='flex flex-col'>
    
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-gray-500 text-3xl text-left capitalize font-semibold  "> 3 Bedroom </h2>
                
                <h2 className="relative overflow-visible w-auto mt-0 mr-auto mb-0 pr-2 justify-start items-start text-gray-500 text-5xl text-left capitalize font-semibold  ">Contemporary Swahili furnishing </h2>
      
         
     
     

  
            <div className=" my-16 flex justify-between items-center space-x-4
    ">
<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Explore</span>
</Link>

<Link href="#_" class="relative rounded-md  inline-flex items-center justify-start py-2 px-6 text-2xl border-2 border-[#7c6a46]  text-black overflow-hidden transition-all  bg-white  hover:bg-white group">
<span class="w-48 h-48 rounded rotate-[-40deg] bg-[#7c6a46] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
<span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Book Now</span>
</Link>
    </div>



    </div>
    </Container>
</div>



</div> */}

  </>
  )
}

export default Rooms



