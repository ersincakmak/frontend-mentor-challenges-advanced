import { MyOption } from "../components/SelectRegion";
import { CountryObject } from "./api";
import { SingleData } from "./singleData";

export interface CountryState {
  data: CountryObject[];
  status: "loading" | "idle";
  filteredData: CountryObject[];
  filterValue: string;
  selectedRegion: MyOption | null;
  singleData: SingleData | undefined;
}
