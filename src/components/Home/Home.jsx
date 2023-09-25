import { useLoaderData } from "react-router-dom";
import Banner from "../../pages/Banner/Banner";
import Cards from "../Cards/Cards";

const Home = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div>
      <Banner></Banner>
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {allData.map((data) => (
            <Cards key={data.id} data={data}></Cards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
