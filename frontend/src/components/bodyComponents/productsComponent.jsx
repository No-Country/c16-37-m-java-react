import "../../assets/styles/productsComponent.css";
import iconCross from "../../assets/img/icons/cross.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../../redux/actions";
import ProductCard from "./ProductsCard";

const ProductsComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsToShow.content);
  useEffect(() => {
    dispatch(getProductsList());
    console.log("se despachó la action");
  }, []);
  return (
    <div className="products-container">
      <div className="filter-container">
        <div className="filter--category">
          <strong>MUJER</strong>
          <p>Camisas</p>
          <p>Resultados (25)</p>
        </div>
        <div className="filter--selected">
          <strong>Filtro Seleccionado:</strong>
          <div className="filter--selected-container">
            <div className="filter--selected-item">
              <p>Camisas</p>
              <img src={iconCross} alt="" width="10" />
            </div>
          </div>
        </div>
        <div className="filter--orderby">
          <strong>Ordenar por:</strong>
          <select className="select select-sm w-30 max-w-xs">
            <option disabled selected>
              Menor Precio
            </option>
            <option>Mayor Precio</option>
            <option>Más relevante</option>
            <option>{`// New`}</option>
          </select>
        </div>
      </div>
      <div className="products-grid">
        {/* generar componente */}

      {
        products?.map((product, i) => {
          return (
            <ProductCard
              key={i}
              product={product.productName}
              image={product.image}
              price={product.price}
            />
          );
        }) //aqui termina el map
      }
      </div>
      
    </div>
  );
};

export default ProductsComponent;
