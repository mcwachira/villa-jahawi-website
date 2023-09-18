
import Image from "next/image"
import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Container from "../container/Container"


const Gallery = ({images}) => {
    return (
        <>
        <Container>

        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry>
                {images.map((image, i) => (
                    <Image
                        key={i}
                        src={image}
                       
                        
                        style={{width: "80%", display: "block"}}
                        alt=""
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>


        </Container>
        
        
        
        </>
 
    )
}
export default Gallery


