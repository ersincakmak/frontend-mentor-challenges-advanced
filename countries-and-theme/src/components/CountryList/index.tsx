import { useAppSelector } from "../../redux/store";
import Card from "../Card";
import LazyLoad from "react-lazyload";
import MyLoader from "../ContentLoader";

const CountryList = () => {
  const { data, status } = useAppSelector((state) => state.country);

  if (status === "loading") {
    return <div>LOADING...</div>;
  }

  return (
    <div className="grid grid-cols-4 auto-rows-fr gap-20 flex-1 ">
      {data.map((item) => (
        <LazyLoad
          once={false}
          overflow={true}
          unmountIfInvisible={true}
          placeholder={<MyLoader />}
        >
          <Card key={item.cca2} item={item} />
        </LazyLoad>
      ))}
    </div>
  );
};

export default CountryList;
