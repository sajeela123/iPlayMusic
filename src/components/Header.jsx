import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
 
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "60px",
    padding: "10px",
    /*backgroundColor: "#fff",*/
   
    position: "relative", // Helps center title
 
  },
 
  backButton: {
    fontSize: "24px",
    cursor: "pointer",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  searchButton: {
    fontSize: "24px",
    cursor: "pointer",
    padding: "0 15px",
  },
};
 
function Header({ title }) {
  const navigate = useNavigate();
 
  return (
    <header style={styles.header}>
      <IoIosArrowBack onClick={() => navigate(-1)} style={styles.backButton} />
      <h1 style={styles.title}>{title}</h1>
      <CiSearch style={styles.searchButton} />
    </header>
  );
}
 
export default Header;