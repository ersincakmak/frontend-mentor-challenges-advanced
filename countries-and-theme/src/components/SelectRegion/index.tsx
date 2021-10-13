import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface MyOption {
  value: string;
  label: string;
}

const options: MyOption[] = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const SelectRegion = () => {
  const [dropDownActive, setdropDownActive] = useState(false);

  const handleDropDownClick = () => {
    setdropDownActive(!dropDownActive);
  };

  return (
    <div className="flex h-full w-48 text-sm relative">
      <div
        className=" w-full h-full flex items-center justify-between p-3 px-5 rounded bg-white
       dark:bg-dark-blue transition shadow-component cursor-pointer select-none  z-20"
        onClick={() => handleDropDownClick()}
      >
        Filter by Region
        <IoIosArrowDown className="text-lg" />
      </div>
      <AnimatePresence>
        {dropDownActive && (
          <motion.ul
            initial={{
              opacity: 0,
              bottom: "-0.75rem",
              translateY: "75%",
            }}
            animate={{
              opacity: 1,
              bottom: "-0.75rem",
              translateY: "100%",
            }}
            exit={{
              opacity: 0,
              bottom: "-0.75rem",
              translateY: "75%",
            }}
            transition={{
              duration: 0.2,
              type: "spring",
            }}
            className="absolute w-full bg-white dark:bg-dark-blue p-3 rounded -bottom-3 shadow-component z-10 transition"
          >
            {options.map((item) => (
              <li
                value={item.value}
                key={item.value}
                className="p-2 hover:underline cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectRegion;
