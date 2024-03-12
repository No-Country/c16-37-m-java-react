import "../../assets/styles/productsComponent.css"
import heart from "../../assets/img/icons/heart.svg";
import heartFilled from "../../assets/img/icons/heart-filled.svg";
import addBag from "../../assets/img/icons/add-square.svg";
import { useState } from "react";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


const ProductCard = ({product, id, image, price}) => {
  const existingLikesAlready = JSON.parse(localStorage.getItem('likes')) || [];
  const isLikedAlready = existingLikesAlready.some(item => item.id === id);

  const [isLiked, setIsLiked] = useState(isLikedAlready)
  const toogleLike = () => {
    if(  localStorage.getItem('jwt')){
      setIsLiked(!isLiked)
      const existingLikes = JSON.parse(localStorage.getItem('likes')) || [];
      const existingIndex = existingLikes.findIndex(item => item.id === id);
  
      if (existingIndex !== -1) {
        // Si el producto ya está en la lista, lo eliminamos
        existingLikes.splice(existingIndex, 1);
      } else {
        // Si el producto no está en la lista, lo agregamos
        existingLikes.push({ id });
      }
  
      localStorage.setItem('likes', JSON.stringify(existingLikes));
      console.log(localStorage.getItem('likes'));

    } else {
        Swal.fire({
        title: `Diste "Me Gusta" al producto`,
        icon: 'warning',
        text: 'Necesitas ingresar a tu usuario.',
      });
    }
  }
  // Agregar el nuevo elemento al carrito
  // const addCart = () => {
  //   if(  localStorage.getItem('jwt')){
  //     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
  //     const updatedCart = [...existingCart, { id, product, image, price, quantity : 1}];
  //     localStorage.setItem('cart', JSON.stringify(updatedCart));
  //     Swal.fire({
  //       title: `Agregaste el producto al carrito`,
  //       icon: 'success',
  //       text: `Agregaste 1 ${product}`,
  //     });
  //     console.log(localStorage.getItem('cart'))
  //   } else {
  //       Swal.fire({
  //       title: `Diste "Agregar" al producto`,
  //       icon: 'warning',
  //       text: 'Necesitas ingresar a tu usuario.',
  //     });
  //   }
  // }


  return (
    <div>
      <div className="product-item" onDoubleClick={toogleLike}>
        <Link to={`/item/${id}`}>
          <img  loading="lazy" src={image} style={{width:"250px", height:"320px"}}/>
        </Link>
        <div className="product-item-footer">
          <div className="product-item-footer-text">
            <p>{product}</p>
            <p>{price} ARS</p>
          </div>
          <img onClick={toogleLike} src={isLiked ? heartFilled : heart} width="20px" />
          <Link to={`/item/${id}`}>
              <img src={addBag} width="20px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
