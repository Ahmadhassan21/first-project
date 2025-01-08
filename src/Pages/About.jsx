import Countrydata from "../api/Countrydata.json";
export const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="aboutheading">
          <h1>
            Here are the Interesting Facts <br></br> we are proud of
          </h1>
        </div>

        <div className="jsoncard">
          {Countrydata.map((Country) => {
            const { id, country_name, capital, population, interesting_fact } =
              Country;
            return (
              <div className="jsoncardbody" key={id}>
                <p>{id}-</p>
                <p className="ccp">
                  <span>Country Name:</span>
                  {country_name}
                </p>
                <p className="ccp">
                  <span>Capital:</span>
                  {capital}
                </p>
                <p className="ccp">
                  <span>Population:</span>
                  {population}
                </p>
                <p className="fact">
                  <span>Interesting-fact:</span>
                  {interesting_fact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
