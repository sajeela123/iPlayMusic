import { IoMdSettings } from "react-icons/io";
import { IoContrastOutline } from "react-icons/io5";
import { MdOutlineWifiTethering } from "react-icons/md";
import { IoIosMicrophone } from "react-icons/io";
import { IoMdPulse } from "react-icons/io";
import { Link } from "react-router-dom";
 
const Footer = ({ toggleTheme, darkMode }) => {
  return (
    <div style={{
      ...styles.footer,
      backgroundColor: darkMode ? "#341931" : "#fff",
      color: darkMode ? "#fff" : "#000",
    }}>
      <Link to="/categories"><IoMdPulse size={40} color="red" /></Link>
      <Link to="/"><IoIosMicrophone size={40} color="red" /></Link>
      <Link to=""><MdOutlineWifiTethering size={40} color="red" /></Link>
      <IoContrastOutline size={40} color="red" onClick={toggleTheme} style={styles.iconButton} />
      <IoMdSettings size={40} color="red" />
    </div>
  );
};
 
const styles = {
  footer: {
    textAlign: "center",
    padding: "1rem",
    position: "fixed",
    bottom: 0,
    width: "450px",  
    /*height: "65px", */
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    left: "50%",  
    transform: "translateX(-50%)",
    boxShadow: "0px -5px 10px rgba(128, 128, 128, 0.3)",
    transition: "background-color 0.3s ease",
  },
  iconButton: {
    cursor: "pointer",
  },
};
 
export default Footer;
 
 
 