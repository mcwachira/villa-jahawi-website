

import Facilities from "@/components/Facilities";
import { FeaturedArticles } from "@/components/FeaturedArticles";

import Hero from "@/components/Hero";

import Rooms from "@/components/Rooms";
import TestimonialTwo from "@/components/Testimonial/TestimonialTwo";

import { getAllArticles } from '@/lib/articles'




export default function Home({ caseStudies, articles }) {
  return (


    <main> 

<Hero/>

     <Facilities/>
     <Rooms/>
{/* 
     <TestimonialTwo/> */}
     <FeaturedArticles articles={articles} />
     {/* <Gallery images={galleryData}/> */}
     {/* <Blog/> */}
{/* 


                <ModalVideo
  thumb={VideoThumb}
  thumbWidth={768}
  thumbHeight={432}
  thumbAlt="Modal video thumbnail"
  video="/assets/images/video.mp4"
  videoWidth={1920}
  videoHeight={1080} /> */}


    </main>
  )
}


export async function getStaticProps() {
  return {
    props: {

      articles: await getAllArticles(),
    },
  }
}
