"use client"
import Carousel from '@/components/Carousel/Carousel'
import Facilities from '@/components/Facilities/Facilities'
import Rooms from '@/components/Rooms/Rooms'
import { imageData } from '@/data/images'
import Image from 'next/image'



export default function Home() {
  return (


    <main> 


     <Carousel images={imageData}/>
     <Facilities/>
     <Rooms/>

    </main>
  )
}
