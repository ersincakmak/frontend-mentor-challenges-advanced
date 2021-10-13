import { useEffect } from "react";
import Header from "./components/Header";
import { useAppDispatch } from "./redux/store";
import { setThemeOnMount } from "./redux/themeSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setThemeOnMount());
  }, []);

  return (
    <div className="text-very-dark-blue-text dark:text-white">
      <Header />
    </div>
  );
};

export default App;
