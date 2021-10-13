import React from "react";
import { CountryObject } from "../../types/api";

interface Props {
  item: CountryObject;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col rounded w-full h-full overflow-hidden bg-white dark:bg-dark-blue shadow-component transition ">
      <div className="overflow-hidden aspect-w-16 aspect-h-10 w-full">
        <img src={item.flags.png} alt="" />
      </div>
      <div className="flex flex-col gap-3 p-5 pb-10">
        <span className="font-black">{item.name.common}</span>
        <ul className="text-sm font-semibold flex flex-col gap-1">
          <li>
            Population:{" "}
            <span className="font-light text-sm">{item.population}</span>
          </li>
          <li>
            Region: <span className="font-light text-sm">{item.region}</span>
          </li>
          <li>
            Capital: <span className="font-light text-sm">{item.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
