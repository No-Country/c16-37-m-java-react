import "../../assets/styles/productsComponent.css"
import heart from "../../assets/img/icons/heart.svg";
import heartFilled from "../../assets/img/icons/heart-filled.svg";

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
          <img src={heart} alt="" width="20px" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
