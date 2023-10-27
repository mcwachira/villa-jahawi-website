import SingleAccommodation from "@/components/accommodation/SingleAccommodation";
import { accommodationData } from "@/data/accommodationData";
import clsx from "clsx";
import { useTheme } from "next-themes";

const AccommodationPage = (props) => {
  const { room } = props;
  console.log(room);

  const { theme, setTheme } = useTheme();

  return (
    <div className={clsx(theme === "dark" ? "bg-[#041434]" : "bg-white")}>
      <SingleAccommodation key={room.id} room={room} />
    </div>
  );
};

export default AccommodationPage;

export async function getStaticProps(params) {
  console.log(accommodationData);

  const id = params.id;
  const accommodation = accommodationData.filter(
    (accommodation) => accommodation.id.toString() === id
  );

  return {
    props: {
      room: { ...accommodation },
    },
  };
}

export const getStaticPaths = async () => {
  const paths = accommodationData.map((accommodation) => ({
    params: { id: accommodation.id.toString() },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};
