/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { clearSingleData, fetchSingleCountry } from "../../redux/countrySlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { HiOutlineArrowLeft } from "react-icons/hi";
import axios from "axios";
import { API_URL } from "../../constants/api";
import { SingleData } from "../../types/singleData";

const CountryDetail = () => {
  const [borders, setborders] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  const { singleData, status } = useAppSelector((state) => state.country);

  const history = useHistory();

  const { code } = useParams<Record<string, string>>();

  const allFunctions = async (items: string[]) => {
    items?.map(async (item) => {
      const { data } = await axios.request<SingleData[]>({
        method: "GET",
        url: API_URL.SINGLE(item),
      });
      setborders((ex) => [...ex, data[0].name.common]);
    });
  };

  useEffect(() => {
    dispatch(fetchSingleCountry(code)).then(async (data) => {
      await allFunctions((data.payload as SingleData[])[0]?.borders);
    });
    setborders([]);

    return () => {
      dispatch(clearSingleData());
    };
  }, []);

  return (
    <div className="flex-1 bg-very-light-gray dark:bg-very-dark-blue transition flex flex-col gap-12 px-5 sm:px-10 lg:px-16 2xl:px-20 py-12 overflow-auto">
      {status === "loading" ? (
        "Loading..."
      ) : !singleData ? (
        "There is no data with given code by you."
      ) : (
        <>
          <button
            className="w-max flex items-center gap-2.5 bg-white dark:bg-dark-blue p-2 px-6 rounded shadow-component transition hover:shadow-lg
              font-light"
            onClick={() => {
              history.push("/");
            }}
          >
            <HiOutlineArrowLeft />
            Back
          </button>

          <div className="flex flex-col md:flex-row gap-14 md:gap-28 w-full">
            <div className="flex flex-1 items-center justify-center">
              <div className="overflow-hidden aspect-w-16 aspect-h-11 w-full h-max">
                <img
                  src={singleData?.flags.svg}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col md:justify-center items-start gap-7">
              <h1 className="text-2xl font-black">{singleData?.name.common}</h1>
              <div className="flex flex-col lg:flex-row gap-10 w-full">
                <ul className="font-semibold text-base flex-1 w-full flex flex-col gap-3">
                  <li>
                    Native Name :{" "}
                    <span className="font-light">
                      {
                        (
                          Object.entries(
                            singleData?.name.nativeName as any
                          )[0][1] as any
                        ).common
                      }
                    </span>
                  </li>
                  <li>
                    Population :{" "}
                    <span className="font-light">{singleData.population}</span>
                  </li>
                  <li>
                    Region :{" "}
                    <span className="font-light">{singleData.region}</span>
                  </li>
                  <li>
                    Sub Region :{" "}
                    <span className="font-light">{singleData.subregion}</span>
                  </li>
                  <li>
                    Capital :{" "}
                    <span className="font-light">{singleData.capital}</span>
                  </li>
                </ul>

                <ul className="font-semibold text-base flex-1 flex flex-col gap-3">
                  <li>
                    Top Level Domain :{" "}
                    <span className="font-light">{singleData.tld}</span>
                  </li>
                  <li>
                    Currencies :{" "}
                    <span className="font-light">
                      {
                        (
                          Object.entries(
                            singleData?.currencies as any
                          )[0][1] as any
                        ).name
                      }
                    </span>
                  </li>
                  <li>
                    Languages :{" "}
                    <span className="font-light">
                      {Object.values(singleData.languages).join(", ")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="min-w-max">
                  Border Countries : {!borders.length ? "No border" : null}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {borders.length
                    ? borders.map((item) => (
                        <span
                          className="py-1 px-6 bg-very-light-gray dark:bg-dark-blue shadow-component"
                          key={item}
                        >
                          {item}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetail;
