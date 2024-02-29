import filterCatWomen from "../../assets/img/bodyComponent/category-women.jpg";
import filterCatMen from "../../assets/img/bodyComponent/category-men.jpg";
import filterCatKids from "../../assets/img/bodyComponent/category-kids.jpg";
import { Link } from "react-router-dom";
import { products } from "../../assets/productosPrueba";
import axios from "axios";

const MainBodyCatComponent = () => {
  const loadProducts = () => {
    products.forEach(async (element) => {
      await axios.post("http://localhost:8081/producto", element);
    });
  };

  return (
    <div className="category-container">
      <button onClick={loadProducts}>Cargar products</button>
      <div className="category-card">
        <Link to={"/products"}>
          <img src={filterCatWomen} alt="foto de mujer" />
          <div>
            <h3>MUJER</h3>
          </div>
        </Link>
      </div>
      <div className="category-card">
        s
        <Link to={"/products"}>
          <img src={filterCatMen} alt="foto de hombre" />
          <div>
            <h3>HOMBRE</h3>
          </div>
        </Link>
      </div>

      <div className="category-card">
        <Link to={"/products"}>
          <img src={filterCatKids} alt="foto de niños" />
          <div>
            <h3>NIÑOS</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainBodyCatComponent;
