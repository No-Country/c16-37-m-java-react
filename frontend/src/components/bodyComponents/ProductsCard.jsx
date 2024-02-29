import React from "react";
import "../../assets/styles/productsComponent.css"

const ProductCard = ({product, image, price}) => {
  return (
    <div>
      <div className="product-item">
        <img src={image} alt="" style={{width:"250px", height:"320px"}}/>
        <div className="product-item-footer">
          <div className="product-item-footer-text">
            <p>{product}</p>
            <p>{price} ARS</p>
          </div>
          <img src='' alt="" width="20px" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
