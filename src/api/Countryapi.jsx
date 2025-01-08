import axios from "axios";
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});
//http get method
export const getcountrydata = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

//http get method for the individual country data
export const getcountryindivdata = (name) => {
  return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags
`);
};
