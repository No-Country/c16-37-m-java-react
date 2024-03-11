import { Link } from "react-router-dom"
// import { CounterComponent } from "./counterComponent"
import trash from "../../../assets/img/icons/trash.svg"
import carritoVacio from "../../../assets/img/bodyComponent/carrito-vacio.jpg"
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from "react";
import StepsCartContext from "../../../assets/context/StepsCartContext";


const CartOneComponent = () => {
    const { handleStepsCart } = useContext(StepsCartContext)
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const [cartTotal, setCartTotal] = useState(0);

    const calculateTotal = () => {
        const total = cartItems.reduce((accumulator, product) => {
            return accumulator + parseFloat(product.price);
        }, 0);
        setCartTotal(total.toFixed(2));
    };

    const handleDelete = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        // Actualiza el estado o realiza otras acciones según tu lógica
        Swal.fire({
            title: `Eliminaste el producto al carrito`,
            icon: 'success',
        });
        window.location.href = `/cart`;
    }

    useEffect(() => {
        calculateTotal();
    }, []);

  return (
        <div>
            {!cartItems.length ? (
                <div className="empty-cart">
                    <img src={carritoVacio} width="300" />
                    <h2>El carrito está vacío</h2>
                </div>
            ) : (
                <div className="cart-step1-container">
                    <h2>Cesta</h2>
                    <div className="cart-items-container">
                        <div className="cart-items-list">

                        {
                        cartItems?.map((product) => {
                        return (
                            <div className="cart-item" key={product.id}>
                                <div className="cart-item-img">
                                    <img src={product.image} />
                                </div>
                                <div className="cart-item-detail">
                                    <header>{product.productName}</header>
                                    <p>Talla: {product.size}</p>
                                    <p>1 un.</p>
                                </div>
                                <div className="cart-item-numbers">
                                    <div className="cart-item-price">
                                        <header>{product.price} ARS</header>
                                    </div>

                                    {/* <div className="cart-item-counter">
                                        <CounterComponent cantidad={product.quantity} />
                                    </div> */}
                                </div>
                                <div className="cart-item-delete" onClick={() => handleDelete(cartItems.id)}>
                                    <img src={trash} width="20" />
                                </div>
                            </div>
                        );
                        }) //aqui termina el map
                        }

                        </div>
                        <div className="cart-items-subtotal">
                            <header className="my-2 ml-4">({cartItems.length} Productos)</header>
                            <p className="ml-4">Total: {cartTotal} ARS</p>
                            <p className="ml-4 mb-4">Envío: A convenir</p>
                            <Link to='/cart/step-two'>
                            <button onClick={()=>handleStepsCart(1)}>CONTINUAR</button>
                            </Link>
                        </div>

                    </div>

                </div>
            )}
        </div>
  )
}

export default CartOneComponent
