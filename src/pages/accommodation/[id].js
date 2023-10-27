import RoomFeatures from "../../components/accommodation/RoomFeatures";

import { accommodationData } from "../../data/accommodationData";
import clsx from "clsx";
import { useTheme } from "next-themes";

const AccommodationPage = ({ room }) => {
  const { theme, setTheme } = useTheme();

  console.log(room);

  return (
    <div className={clsx(theme === "dark" ? "bg-[#041434]" : "bg-white")}>
      <RoomFeatures key={room?.id} room={room} />
    </div>
  );
};

export default AccommodationPage;

export async function getStaticProps({ params }) {
  console.log(accommodationData);

  const accommodation = accommodationData.filter(
    (accommodation) => accommodation.id.toString() === params.id
  );

  return {
    props: {
      room: accommodation[0],
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
