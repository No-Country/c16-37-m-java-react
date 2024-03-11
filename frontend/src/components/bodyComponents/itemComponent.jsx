import { useParams } from "react-router-dom";
import { productsTest } from "../../assets/json/products";
import '../../assets/styles/itemComponent.css'
import ruler from "../../assets/img/icons/ruler.svg"
import angleRight from "../../assets/img/icons/angle-right.svg"
import building from "../../assets/img/icons/building.svg"
import mapMarker from "../../assets/img/icons/map-marker.svg"
import { useState } from "react";
import Swal from 'sweetalert2';


const ItemComponent = () => {
  let {id} = useParams()
  const selectedItem = productsTest.find(product => product.id == parseInt(id, 10));
  
  const [size, setSize] = useState("M")
  const [isS, setIsS] = useState(false)
  const [isM, setIsM] = useState(true)
  const [isL, setIsL] = useState(false)
  const [isXL, setIsXL] = useState(false)
  const handleTalle = (estado, setEstado, talle) => {
    if (!estado) {
      setIsS(false);
      setIsM(false);
      setIsL(false);
      setIsXL(false);
      setEstado(true);
      setSize(talle)
    }
  };
 
    // Agregar el nuevo elemento al carrito
  const addCart = () => {
    // if(  localStorage.getItem('jwt')){
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedCart = [...existingCart, { id: selectedItem.id, productName: selectedItem.productName, image: selectedItem.image, price: selectedItem.price, size: size , quantity: 1}];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      Swal.fire({
        title: `Agregaste el producto al carrito`,
        icon: 'success',
        text: `Agregaste 1 ${selectedItem.productName}`,
      });
      console.log(localStorage.getItem('cart'))
    // } else {
    //     Swal.fire({
    //     title: `Diste "Agregar" al producto`,
    //     icon: 'warning',
    //     text: 'Necesitas ingresar a tu usuario.',
    //   });
    // }
  }


  return (
    <div className="item-container">
        <div className="item-carrousel">
            <button onClick={addCart}>AGREGAR A LA CESTA</button>
            <div className="item-carrousel-body">
            <div className="item-arrow-left"><img src={angleRight} width="20" /></div>
            <img src={selectedItem.image} alt="" />
            <div className="item-arrow-right"><img src={angleRight} width="20" /></div>
            </div>
            {/* <div className="item-carrousel-footer">
                <div className="item-thumbnail">
                    <img src={selectedItem.image} />
                </div>
                <div className="item-thumbnail">
                    <img src={selectedItem.image} />
                </div>
                <div className="item-thumbnail">
                    <img src={selectedItem.image} />
                </div>
                <div className="item-thumbnail">
                    <img src={selectedItem.image} />
                </div>

            </div> */}
        </div>
        <div className="item-info">
            <div className="item-info-container">

            
                <h2>{selectedItem.productName}</h2>
                <div>Precio: {selectedItem.price} ARS</div>
                <div>{selectedItem.description}</div>
                <div className="item-info-talle-box">
                    <h3>Selecciona talla</h3>
                    <div className="item-info-talle-container">
                        <div className={isS ? 'item-info-talle-selected item-info-talle' : 'item-info-talle'}
                        onClick={() => handleTalle(isS, setIsS, "S")}
                        >S</div>
                        <div className={isM ? 'item-info-talle-selected item-info-talle' : 'item-info-talle'}
                        onClick={() => handleTalle(isM, setIsM, "M")}
                        >M</div>
                        <div className={isL ? 'item-info-talle-selected item-info-talle' : 'item-info-talle'}
                        onClick={() => handleTalle(isL, setIsL, "L")}
                        >L</div>
                        <div className={isXL ? 'item-info-talle-selected item-info-talle' : 'item-info-talle'}
                        onClick={() => handleTalle(isXL, setIsXL, "XL")}
                        >XL</div>
                    </div>
                    <div className="item-info-legend">
                        <img src={ruler} width="20"/><span>Guia de medidas</span>
                    </div>
                </div>
                <div className="item-info-footer">
                    <div className="item-info-legend">
                        <img src={mapMarker} width="20" /><span>Envío a domicilio</span>
                    </div>
                    <div className="item-info-legend">
                        <img src={building} width="20" /><span>Disponibilidad en Tienda</span>
                    </div>
                </div>
            </div>
            <button onClick={addCart}>AGREGAR A LA CESTA</button>
        </div>
    </div>
  )
}

export default ItemComponent