import { useEffect, useTransition, useState } from "react";
import { getcountrydata } from "../api/Countryapi";
import { Loader } from "../Components/UI/loader";
import { Countrycard } from "../Components/UI/Countrycard";
import { Searchfilter } from "../Components/UI/searchfilter";
export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getcountrydata();
      setCountry(res.data);
    });
  }, []);
  if (isPending) return <Loader />;
  //for Search Country Function 
  const Searchcountry = (country) =>{
    if(search){
      return country.name.common.toLowerCase().includes(search)
    }
    return(country)
  }
  //for filterRegion Function
  const filterRegion =(country)=>{
    if(filter==="all")return country;
    return country.region===filter;
  }
  
  const Filtercountry = countries.filter((country) =>Searchcountry(country) && filterRegion(country))
  return (
    <section>
      <Searchfilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountry={setCountry}
      ></Searchfilter>

      <ul className="country-list">
        {Filtercountry.map((curCountry, index) => {
          return <Countrycard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
