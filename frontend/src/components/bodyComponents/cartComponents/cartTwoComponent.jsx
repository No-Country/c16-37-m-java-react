import building from '../../../assets/img/icons/building.svg'
import mapMarker from '../../../assets/img/icons/map-marker.svg'
const CartTwoComponent = () => {
    return (
        <div className="cart-step2-container">
            <h2>Entrega</h2>
            <div className="order-delivery">
                <h2>¿Dónde quieres recibir tu pedido?</h2>
                <div>
                    <div className="order-delivery-selector">
                        <div><img src={building} alt="Tienda" width='52px' /><p>Tienda Zara</p><p>Gratis</p></div>
                        <div><img src={mapMarker} alt="Casa" width='52px' /><p>Casa</p><p>$12000</p></div>
                        
                    </div>
                    <div>Unicentro Bogotá</div>
                </div>
            </div>
            
            <div className="order-date">
                <h2>Fecha de entrega</h2>
            </div>
            
            <div className="order-summary">
                <h2>Resumen de la compra</h2>
            </div>
        
        
        
        </div> 
    )
}

export default CartTwoComponent