/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import CountryList from "../../components/CountryList";
import Search from "../../components/Search";
import SelectRegion from "../../components/SelectRegion";
import { setFilterValue } from "../../redux/countrySlice";
import { useAppDispatch } from "../../redux/store";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setFilterValue(""));
    };
  }, []);

  return (
    <div className="bg-very-light-gray dark:bg-very-dark-blue flex-1 px-5 sm:px-10 lg:px-16 2xl:px-20 py-12 gap-12 transition flex flex-col overflow-auto">
      <div className="flex flex-col sm:flex-row items-start gap-6 justify-between ">
        <Search />
        <SelectRegion />
      </div>
      <CountryList />
    </div>
  );
};

export default Home;
