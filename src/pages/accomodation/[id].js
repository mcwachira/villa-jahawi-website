

import { accommodationData } from "@/data/accommodationData";






const AccommodationPage =({room}) => {




console.log(room)

// {props.map((prop) => console.log(prop))}

	return (
		<div className="container py-8 sm:py-10 mt-5 sm:mt-10">



<h1>
    Hello room
</h1>
		

			</div>

	);
}



export default AccommodationPage;



export async function getStaticProps(params) {
	console.log(accommodationData)

const id =params.id
const accommodation =  accommodationData.filter(
	(accommodation) => accommodation.id.toString() === id)

return {
    props: {
		room:accommodation 
	
	}
  };

}



export const getStaticPaths = async() => {
	const paths =  accommodationData.map((accommodation) => ({ params: { id:accommodation.id.toString() } }));
	console.log(paths)
  
	return {
	  paths,
	  fallback: false,
	};
  };



  



