import Search from "../../components/Search";
import SelectRegion from "../../components/SelectRegion";

const Home = () => {
  return (
    <div className="bg-very-light-gray dark:bg-very-dark-blue flex-1 px-20 py-12 gap-12 transition flex flex-col overflow-hidden">
      <div className="flex justify-between items-center">
        <Search />
        <SelectRegion />
      </div>
    </div>
  );
};

export default Home;
