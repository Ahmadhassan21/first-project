import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const Countrycard = ({ country }) => {
  return (
    <div className="countrypagecontent">
      <img
        className="flags"
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        width="100%"
      />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <NavLink to={`/country/${country.name.common}`}>
      <button>
        Read More <FaLongArrowAltRight />
      </button>
      </NavLink>
      
    </div>
  );
};
