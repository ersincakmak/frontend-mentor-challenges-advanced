import { IoIosSearch } from "react-icons/io";
import { setFilterValue } from "../../redux/countrySlice";
import { useAppDispatch } from "../../redux/store";

const Search = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center p-2 bg-white dark:bg-dark-blue w-full max-w-full sm:max-w-md rounded shadow-component text-dark-gray transition">
      <IoIosSearch className="text-2xl mx-4" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="py-2 w-full text-dark-gray bg-transparent outline-none border-none"
        onInput={(e) => dispatch(setFilterValue(e.currentTarget.value))}
      />
    </div>
  );
};

export default Search;
