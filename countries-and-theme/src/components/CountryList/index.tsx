/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { filterCountries } from "../../redux/countrySlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Card from "../Card";

const CountryList = () => {
  const { data, filteredData, filterValue, status } = useAppSelector(
    (state) => state.country
  );

  const dispatch = useAppDispatch();

  const [pagination, setpagination] = useState(0);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      dispatch(filterCountries(filterValue));
      setpagination(0);
    }, 500);

    return () => {
      clearTimeout(myTimeout);
    };
  }, [data, filterValue]);

  if (status === "loading") {
    return <div>LOADING...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  auto-rows-fr gap-20 flex-1 ">
        {filteredData.slice(pagination * 8, pagination * 8 + 8).map((item) => (
          <Card key={item.cca2} item={item} />
        ))}
      </div>
      <div className="flex w-max items-center gap-5">
        <button
          onClick={() => {
            setpagination(pagination - 1);
          }}
          className="p-3 bg-white dark:bg-dark-blue rounded shadow-component hover:shadow-md transition"
          disabled={pagination === 0}
        >
          Previous
        </button>
        <span>{pagination}</span>
        <button
          onClick={() => {
            setpagination(pagination + 1);
          }}
          className="p-3 bg-white dark:bg-dark-blue rounded shadow-component hover:shadow-md transition"
          disabled={pagination >= Math.floor(filteredData.length / 8)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CountryList;
