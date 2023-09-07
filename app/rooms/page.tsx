import React from 'react'
import Image from 'next/image'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {GiBathtub} from 'react-icons/gi'
import Container from '@/components/container/Container'

const Rooms = () => {
  return (
  <>
  
  <section className="mb-40">

{/* <!-- Jumbotron --> */}
<div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
      backgroundPosition: '50%',
      backgroundImage:" url('/assets/images/blog-2.png')",
      height: '800px'
}}>
  <div
    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.25)] bg-fixed">
    <div className="flex h-full items-center justify-center">
      <div className="px-6 text-center text-white md:px-12">
        <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
   Contact us
        </h1>
        <button type="button"
          className="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
          data-te-ripple-init data-te-ripple-color="light">
          Get started
        </button>
      </div>
    </div>
  </div>
</div>
{/* <!-- Jumbotron --> */}
</section>


  <Container>




  <div className='py-2 grid aut-cols-max auto-rows-max  md:grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-8 my-20 mb-5 '>
<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
      <MdOutlineBedroomParent size={40} />

        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
        <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>

<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
          <MdOutlineBedroomParent size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
        <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>
<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
          <MdOutlineBedroomParent size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
      <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>
</div>

<div className='py-2 grid aut-cols-max auto-rows-max  md:grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-8 my-20 mb-5 '>
<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
      <MdOutlineBedroomParent size={40} />

        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
        <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>

<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
          <MdOutlineBedroomParent size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
        <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>
<div className="max-w-full w-full rounded overflow-hidden shadow-lg hover:shadow-xl">
  <img className="w-full" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80" alt="Property Image"/>
  <div className="px-6 py-4">
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900">Beautiful House</h2>
      <div className="flex items-center">

      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center">
          <MdOutlineBedroomParent size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">3 Bedrooms</p>
      </div>
      <div className="flex items-center">
          <GiBathtub size={40} />
        <p className="ml-2 text-lg  font-medium text-gray-700">2 Bathrooms</p>
      </div>
      
    </div>
    <div className="my-12 flex justify-between items-center">

        <button   className="ease-in-up  rounded-md bg-[#7c6a46] py-3 px-8 text-xl font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9">
            Book Now 
        </button>
      <p className="text-3xl font-extrabold text-black">$300</p>
    </div>
  </div>

</div>
</div>

</Container>
  </>
  )
}

export default Rooms