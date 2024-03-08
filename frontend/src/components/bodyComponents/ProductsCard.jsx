import "../../assets/styles/productsComponent.css"
import heart from "../../assets/img/icons/heart.svg";
import heartFilled from "../../assets/img/icons/heart-filled.svg";
import { useState } from "react";
import Swal from 'sweetalert2';


const ProductCard = ({product, image, price}) => {
  const [isLiked, setIsLiked] = useState(false)
  const toogleLike = () => {
    if(  localStorage.getItem('jwt')){
      setIsLiked(!isLiked)
    } else {
        Swal.fire({
        icon: 'warning',
        title: `Le has dado "Me Gusta" al producto`,
        text: 'Necesitas ingresar a tu usuario.',
      });
    }
    // se tiene que fijar si estás logueado
  }

  return (
    <div>
      <div className="product-item" onDoubleClick={toogleLike}>
        <img src={image} alt="" style={{width:"250px", height:"320px"}}/>
        <div className="product-item-footer">
          <div className="product-item-footer-text">
            <p>{product}</p>
            <p>{price} ARS</p>
          </div>
          <img onClick={toogleLike} src={isLiked ? heartFilled : heart} alt="" width="20px" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
