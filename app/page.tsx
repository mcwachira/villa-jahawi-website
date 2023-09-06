"use client"
import Blog from '@/components/Blog/Blog'
import Carousel from '@/components/Carousel/Carousel'
import Facilities from '@/components/Facilities/Facilities'
import Gallery from '@/components/Gallery/Gallery'
import Rooms from '@/components/Rooms/Rooms'
import Testimonial from '@/components/Testimonial/Testimonial'
import { galleryData } from '@/data/galleryImages'
import { imageData } from '@/data/images'
import Image from 'next/image'



export default function Home() {
  return (


    <main> 


     <Carousel images={imageData}/>
     <Facilities/>
     <Rooms/>
     <Testimonial/>
     <Gallery images={galleryData}/>
     <Blog/>

    </main>
  )
}
