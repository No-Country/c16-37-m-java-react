import "../../assets/styles/productsComponent.css";
import iconCross from "../../assets/img/icons/cross.svg";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductsList, getProductsSearch } from "../../redux/actions";
import ProductCard from "./ProductsCard";
import { useParams } from "react-router-dom";
import { productsTest } from "../../assets/json/products";
import { useState } from "react";

const ProductsComponent = () => {
  let {search , gender, category} = useParams()
  
  const handleClean = () =>{  
    window.location.href = `/products/all/allGenders/all`;
  }
  // const dispatch = useDispatch();
  // const productsRaw = useSelector((state) => state.productsToShow.content);
  // console.log(productsRaw)
  // const [products, setProducts] = useState()
  const productsRaw = productsTest;
  let products
  // desglosamiento de la BD
  if(gender === 'allGenders'){
    products = productsRaw
  } else {
    products = productsRaw.filter(product => product.gender.includes(gender));
  }
  const results = products.length;

  if(category !== 'all'){
    products = products.filter(product => product.category.includes(category));
  } else {
    category = 'Todas Categorías'
  }
  // ordena por precio, agregar las otras alternativas del select
  const [orderBy, setOrderBy] = useState("Menor Precio");
  const handleOrderByChange = (event) => {
    setOrderBy(event.target.value);
  };
  if (orderBy === "Menor Precio") {
    products.sort((a, b) => a.price - b.price);
  } else if (orderBy === "Mayor Precio") {
    products.sort((a, b) => b.price - a.price);
  } 

  // useEffect(() => {
  //   if(search === 'all'){
  //     dispatch(getProductsList());
  //     console.log("se despachó la action");
  //   } else {
  //     dispatch(getProductsSearch(search));

  //   }
  // }, []);
  
  return (
    <div className="products-container">
      <div className="filter-container">
        <div className="filter--category">
          <strong>{gender === 'allGenders' ? 'TODOS' : gender}</strong>
          <p>{category}</p>
          <p>Resultados ({results})</p>
        </div>
        <div className="filter--selected">
          <strong>Filtro Seleccionado:</strong>
          <div className="filter--selected-container">
            <div className="filter--selected-item">
              <p>{search}</p>

              <img src={iconCross} onClick={handleClean} width="10" />
            </div>
          </div>
        </div>
        <div className="filter--orderby">
          <strong>Ordenar por:</strong>
          <select className="select select-sm w-30 max-w-xs"
                  onChange={handleOrderByChange}
          >
            <option>Menor Precio</option>
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
