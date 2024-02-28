import { Link } from 'react-router-dom';
import building from '../../../assets/img/icons/building.svg'
import mapMarker from '../../../assets/img/icons/map-marker.svg'
import { useState } from 'react';

const CartTwoComponent = () => {

    //estado y toogle de la entrega
    const [isSelectedLeft,  setIsSelectedLeft] = useState(true)
    const [isSelectedRight, setIsSelectedRight] = useState(false) 
    const selectDeliveryLeft = ()=>{
        if(!isSelectedLeft){
            setIsSelectedLeft(!isSelectedLeft)
            setIsSelectedRight(false)
        }
    }
    const selectDeliveryRight = ()=>{
        if(!isSelectedRight){
            setIsSelectedRight(!isSelectedRight)
            setIsSelectedLeft(false)
        }
    }

    // da formato a las fechas
      function formatDate(date) {
          const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          return date.toLocaleDateString('es-ES', option);
      }
      const today = new Date();
      const tomorrow = new Date();
      const todayString = formatDate(today);
      tomorrow.setDate(today.getDate() + 1);
      const tomorrowString = formatDate(tomorrow);

      //estado y toogle en las fechas
      const [todayChecked, setTodayChecked] = useState(true);
      const [tomorrowChecked, setTomorrowChecked] = useState(false);
    
      const handleTodayChange = () => {
        if(!todayChecked){
            setTodayChecked(!todayChecked);
            setTomorrowChecked(false);
        }
      };
    
      const handleTomorrowChange = () => {
        if(!tomorrowChecked){
            setTomorrowChecked(!tomorrowChecked);
            setTodayChecked(false);
        }
      };
      // handle el input
      const [inputValue, setInputValue] = useState('')
      const inputOnChange = (event) => {
          setInputValue(event.target.value)
      }

      return (
        <>
        <h2>Entrega</h2>
        <div className="cart-step2-container">
            
            <div className='order-left'>
            
                <div className="order-delivery">
                    <h3>Elige donde recibir tu pedido</h3>
                    <div className='order-delivery-container'>
                        <div className="order-delivery-selector">
                            <div
                            className={isSelectedLeft ? 'order-delivery-selected order-delivery-left' : 'order-delivery-left'}
                            onClick={selectDeliveryLeft}    
                            >   
                                    <input type="checkbox" 
                                    className="accent-gray-500"
                                    checked={isSelectedLeft}
                                    />
                                    <div>
                                    <img src={building} alt="Tienda" width='25px' /><p><strong>Tienda Zara</strong></p><p>Gratis</p>
                                    </div>
                            </div>
                            <div 
                            className={isSelectedRight ? 'order-delivery-selected order-delivery-left' : 'order-delivery-left'}
                            onClick={selectDeliveryRight}
                            >
                                <input type="checkbox" 
                                className="accent-gray-500"
                                checked={isSelectedRight}
                                />
                                <div>
                                    <img src={mapMarker} alt="Casa" width='25px' /><p>Casa</p><p>$12000</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='order-delivery-details'>
                            {isSelectedLeft ? 
                            <p>Unicentro Bogotá - CII 127 #15</p> :
                            <>
                                <p>Variable Dirección usuario</p>
                                <div>
                                    <span>Otra dirección: </span>
                                    <input 
                                    type="text"
                                    placeholder="Ingresa Dirección"
                                    className="text-gray-900 shadow-sm placeholder:text-gray-400 pl-2"
                                    value={inputValue}
                                    onChange={ inputOnChange }
                                    />
                                </div>
                            </>
                            }
                        </div>
                    </div>
                </div>
                
                <div className="order-date">
                    <h3>Elige fecha de entrega</h3>
                    <div className= {todayChecked ? 'field-selected order-today' : 'order-today'}
                    >
                        <label>
                            <input type="checkbox" 
                                    className="accent-gray-500"
                                    checked={todayChecked}
                                    onChange={handleTodayChange}
                            />
                                {` ${todayString}`}
                        </label>
                    </div>
                    <div className={tomorrowChecked ? 'field-selected order-tomorrow' : 'order-tomorrow'}>
                        <label>
                            <input type="checkbox" 
                                    className="accent-gray-500"
                                    checked={tomorrowChecked}
                                    onChange={handleTomorrowChange} 
                            /> 
                                {` ${tomorrowString}`}
                        </label>
                    </div>
                    
                </div>
            </div>    
                
                <div className="order-right order-summary">
                    <h3>Resumen de la compra</h3>
                    <div className='order-summary-list'>
                        <p>(x Productos)</p>
                            {/* hacer map con este formato */}
                        <div className='order-summary-item'>
                            <div className='order-sum-item-img'></div>
                            <div className='order-sum-item-title'></div>
                            <div className='order-sum-item-description'></div>
                            <div className='order-sum-item-price'></div>
                        </div>

                    </div>
                    <div className='order-summary-container'>
                        <div className='order-summary-details'>
                            <p><strong>Entrega: </strong>{isSelectedLeft ?
                                                        'Unicentro Bogotá - CII 127 #15' : 
                                                        (inputValue ? inputValue : 'userAddress')
                                                    }</p>
                            <p><strong>Fecha: </strong>{todayChecked ? todayString : tomorrowString}</p>
                        </div>
                        <div className='order-summary-price'>
                            <p><strong>Envío: </strong>Variable de precio</p>
                            <p><strong>TOTAL: </strong>Variable de Total</p>
                        </div>
                    </div>
                    <Link to='/cart/step-three'>
                        <button>PAGAR</button>
                    </Link>
                </div>
        
        
        
        </div> 
        </>
    )
}

export default CartTwoComponent