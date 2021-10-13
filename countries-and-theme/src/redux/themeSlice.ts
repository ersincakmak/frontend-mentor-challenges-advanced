import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../types/theme";

const initialState: ThemeState = {
  theme: undefined,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeOnMount: (state) => {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
        state.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        state.theme = undefined;
      }
    },

    switchTheme: (state) => {
      if (state.theme === "dark") {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove("dark");
        state.theme = undefined;
      } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        state.theme = "dark";
      }
    },
  },
});

export const { setThemeOnMount, switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
