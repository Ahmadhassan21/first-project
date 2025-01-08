import { FaLongArrowAltRight } from "react-icons/fa";
export const Herosection = () => {
  return (
    <>
      <div className="herocontainer">
        <img src="/images/earth.png"></img>
        <div className="herosectioncontent">
          <h1>
            Explore the World, One <br></br>Country at a Time.
          </h1>
          <p>
            Discover the history,culture and beauty of every nation.Sort,search
            and <br></br>
            filter through countries to find the details you need
          </p>
          <button>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </>
  );
};
