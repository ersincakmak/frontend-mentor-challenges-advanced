import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { MyOption } from "../components/SelectRegion";
import { API_URL } from "../constants/api";
import { CountryObject } from "../types/api";
import { CountryState } from "../types/country";
import { SingleData } from "../types/singleData";

const initialState: CountryState = {
  data: [],
  filteredData: [],
  filterValue: "",
  status: "idle",
  selectedRegion: null,
  singleData: undefined,
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

export const fetchByRegion = createAsyncThunk(
  "country/fetchByRegion",
  async (region: string) => {
    const { data } = await axios.request<CountryObject[]>({
      method: "GET",
      url: API_URL.REGION(region),
    });

    return data;
  }
);

export const fetchSingleCountry = createAsyncThunk(
  "country/fetchSingleCountry",
  async (code: string) => {
    const { data } = await axios.request<SingleData[]>({
      method: "GET",
      url: API_URL.SINGLE(code),
    });

    return data;
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setFilterValue: (state, action: PayloadAction<string>) => {
      state.filterValue = action.payload;
    },
    filterCountries: (state, action: PayloadAction<string>) => {
      state.filteredData = state.data.filter((item) =>
        item.name.common
          .toLowerCase()
          .trim()
          .includes(action.payload.toLowerCase().trim())
      );
    },
    setSelectedRegion: (state, action: PayloadAction<MyOption | null>) => {
      state.selectedRegion = action.payload;
    },
    clearSingleData: (state) => {
      state.singleData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCountries.pending, (state) => {
        state.status = "loading";
        state.data = [];
        state.filteredData = [];
      })
      .addCase(fetchAllCountries.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchAllCountries.rejected, (state) => {
        state.status = "idle";
      });

    builder
      .addCase(fetchByRegion.pending, (state) => {
        state.status = "loading";
        state.data = [];
        state.filteredData = [];
      })
      .addCase(fetchByRegion.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchByRegion.rejected, (state) => {
        state.status = "idle";
      });

    builder
      .addCase(fetchSingleCountry.pending, (state) => {
        state.status = "loading";
        state.singleData = undefined;
      })
      .addCase(fetchSingleCountry.fulfilled, (state, action) => {
        state.status = "idle";
        state.singleData = action.payload[0];
      })
      .addCase(fetchSingleCountry.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export const {
  filterCountries,
  setFilterValue,
  setSelectedRegion,
  clearSingleData,
} = countrySlice.actions;

export default countrySlice.reducer;
