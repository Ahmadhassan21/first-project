import Footerapi from "../../api/Footerapi.json"
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export const Footer = () => {
  const footericon = {
    FaHome:<FaHome/>,
    FaPhoneAlt:<FaPhoneAlt />,
    MdEmail: <MdEmail />,

  }
  return(
    <>
    <footer>
      <div className="footercontainer">{
        Footerapi.map((cuurentelem,index) =>{
          const{icon,title,details} = cuurentelem;
          return(
            <div className="Footercontent" key={index}>
            <i>{footericon[icon]}</i>
            <div>
             <h3>{title}</h3>
             <p>{details}</p>
            </div>
            </div>
          )
        })
        }
      

      </div>
    </footer>
    </>
  ) ;
};
