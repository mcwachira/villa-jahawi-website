import { AnimatePresence, motion } from "framer-motion";
import Facilities from "../components/Facilities";
import { FeaturedArticles } from "../components/FeaturedArticles";

import Hero from "../components/Hero";

import Rooms from "../components/Rooms";
import Testimonial from "../components/Testimonial";

import { getAllArticles } from "../lib/articles";

export const metadata = {
  title: "Villa jahawi ",
  description: "",
};

export default function Home({ caseStudies, articles }) {
  console.log(process.env.NEXT_PUBLIC_GMAIL_PASSWORD);
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Hero />

      <Facilities />
      <Rooms />

      <Testimonial />
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
    </motion.div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: await getAllArticles(),
    },
  };
}
