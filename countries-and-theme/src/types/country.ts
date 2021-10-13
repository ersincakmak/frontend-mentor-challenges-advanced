import { CountryObject } from "./api";

export interface CountryState {
  data: CountryObject[];
  status: "loading" | "idle";
}
