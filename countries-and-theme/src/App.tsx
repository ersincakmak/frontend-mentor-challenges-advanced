/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Header from "./components/Header";
import { useAppDispatch } from "./redux/store";
import { setThemeOnMount } from "./redux/themeSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setThemeOnMount());
  }, []);

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
