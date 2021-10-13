import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants/api";
import { CountryObject } from "../types/api";
import { CountryState } from "../types/country";

const initialState: CountryState = {
  data: [],
  status: "idle",
};

export const fetchAllCountries = createAsyncThunk(
  "country/fetchAll",
  async () => {
    const { data } = await axios.request<CountryObject[]>({
      method: "GET",
      url: API_URL.ALL,
    });

    return data;
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchAllCountries.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export const { reducerName } = countrySlice.actions;

export default countrySlice.reducer;
