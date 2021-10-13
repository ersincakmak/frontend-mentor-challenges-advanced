/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import CountryList from "../../components/CountryList";
import Search from "../../components/Search";
import SelectRegion from "../../components/SelectRegion";
import { fetchAllCountries } from "../../redux/countrySlice";
import { useAppDispatch } from "../../redux/store";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  return (
    <div className="bg-very-light-gray dark:bg-very-dark-blue flex-1 px-20 py-12 gap-12 transition flex flex-col overflow-auto">
      <div className="flex justify-between items-center ">
        <Search />
        <SelectRegion />
      </div>
      <CountryList />
    </div>
  );
};

export default Home;
