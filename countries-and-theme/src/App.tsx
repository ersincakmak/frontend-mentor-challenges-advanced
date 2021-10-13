/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import CountryDetail from "./pages/CountryDetail";
import Home from "./pages/Home";
import { fetchAllCountries, fetchByRegion } from "./redux/countrySlice";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { setThemeOnMount } from "./redux/themeSlice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setThemeOnMount());
  }, []);

  const { selectedRegion } = useAppSelector((state) => state.country);

  useEffect(() => {
    if (selectedRegion === null) {
      dispatch(fetchAllCountries());
    } else {
      dispatch(fetchByRegion(selectedRegion.value));
    }
  }, [selectedRegion]);

  return (
    <div className="text-very-dark-blue-text dark:text-white w-screen h-screen flex flex-col overflow-hidden">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:code" component={CountryDetail} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
