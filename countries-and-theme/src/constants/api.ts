export const API_URL = {
  ALL: "https://restcountries.com/v3.1/all",
  REGION: (region: string) => `https://restcountries.com/v3.1/region/${region}`,
  SINGLE: (code: string) => `https://restcountries.com/v3.1/alpha/${code}`,
};
