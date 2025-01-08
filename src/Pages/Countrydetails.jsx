import { useEffect, useTransition, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getcountryindivdata } from "../api/Countryapi";
import { Loader } from "../Components/UI/loader";

export const Countrydetails = () => {
  const params = useParams();
  console.log(params);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getcountryindivdata(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  if (!country) return <div>No country data available.</div>;

  return (
    <section className="countrycardbtndetails">
      <div className="countrycardbtnimageandcontent">
        <img
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
          width={300}
        />
        <div className="countrycardcontent">
          <h1>{country.name.official}</h1>
          <p>
            <span>Native name:</span>
            {Object.keys(country.name.nativeName)
              .map((key) => country.name.nativeName[key].common)
              .join(",")}
          </p>
          <p>
            <span>Population:</span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span>Region:</span>
            {country.region}
          </p>
          <p>
            <span>SubRegion:</span>
            {country.subregion}
          </p>
          <p>
            <span>Capital:</span>
            {country.capital}
          </p>
          <p>
            <span>Top level domain:</span>
            {country.tld}
          </p>
          <p>
            <span>Currencies:</span>
            {Object.keys(country.currencies).map(
              (currelem) => country.currencies[currelem].name
            )}
          </p>
          <NavLink to="/country">
          <button>Back to Country</button>
          </NavLink>
        </div>
      </div>
     
    </section>
  );
};
