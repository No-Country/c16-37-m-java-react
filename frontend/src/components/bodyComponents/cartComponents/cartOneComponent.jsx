import { Link } from "react-router-dom"
import camisa1 from '../../../assets/img/bodyComponent/products/camisa1.jpg'
import { CounterComponent } from "./counterComponent"

const CartOneComponent = () => {
  return (
    <div className="cart-step1-container">
        <h2>Cesta</h2>
        <div className="cart-items-container">
            <div className="cart-items-list">


                <div className="cart-item">
                    <div className="cart-item-img">
                        <img src={camisa1} alt="" />
                    </div>
                    <div className="cart-item-detail">
                        <header>(Titulo de prenda de vestir)</header>
                        <p>Talla: M</p>
                        <p>1 un.</p>
                    </div>
                    <div className="cart-item-numbers">
                        <div className="cart-item-price">
                            <header>ar$ (precio unit)</header>
                        </div>
                        <div className="cart-item-counter">
                            <CounterComponent cantidad={1} />
                        </div>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="cart-item-img">
                        <img src={camisa1} alt="" />
                    </div>
                    <div className="cart-item-detail">
                        <header>(Titulo de prenda de vestir)</header>
                        <p>Talla: M</p>
                        <p>1 un.</p>
                    </div>
                    <div className="cart-item-numbers">
                        <div className="cart-item-price">
                            <header>ar$ (precio unit)</header>
                        </div>
                        <div className="cart-item-counter">
                            <CounterComponent cantidad={1} />
                        </div>
                    </div>
                </div>
                <div className="cart-item">
                    <div className="cart-item-img">
                        <img src={camisa1} alt="" />
                    </div>
                    <div className="cart-item-detail">
                        <header>(Titulo de prenda de vestir)</header>
                        <p>Talla: M</p>
                        <p>1 un.</p>
                    </div>
                    <div className="cart-item-numbers">
                        <div className="cart-item-price">
                            <header>ar$ (precio unit)</header>
                        </div>
                        <div className="cart-item-counter">
                            <CounterComponent cantidad={1} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-items-subtotal">
                <header className="my-2 ml-4">(x Productos)</header>
                <p className="ml-4">Total: ar$ 300000</p>
                <p className="ml-4 mb-4">Envío: gratis</p>
                <Link to='/cart/step-two'>
                <button>CONTINUAR</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CartOneComponent