import React from 'react'

const About = () => {
  return (
    <>
  
    <section className="mb-40">

  {/* <!-- Jumbotron --> */}
  <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        background:" url('/assets/images/banner-3.png')",
        height: '800px'
  }}>
    <div
      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.25)] bg-fixed">
      <div className="flex h-full items-center justify-center">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
  About Us
          </h1>
       <p className='mt-2 mb-8 text-lg md:text-xl xl:text-2xl leading-loose w-full md:w-1/2 mx-auto my-auto'>
       Villa Jahawi, nestled in the serene beauty of Diani, is a true coastal haven.
       This exquisite villa boasts of spacious interiors, tasteful decor, and stunning views 
       that epitomize coastal living. Surrounded by lush tropical greenery, the villa features a private pool and a spacious terrace, ideal for sun-soaked relaxation or al fresco dining.
       </p>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Jumbotron --> */}
  </section>

  </>
  )
}

export default About