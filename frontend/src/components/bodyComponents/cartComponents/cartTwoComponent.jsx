import '../../../assets/styles/cartTwoComponent.css'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import StepsCartContext from '../../../assets/context/StepsCartContext';
import angle from '../../../assets/img/icons/angle-right.svg'
import building from '../../../assets/img/icons/building.svg'
import mapMarker from '../../../assets/img/icons/map-marker.svg'



const CartTwoComponent = () => {
    const { handleStepsCart } = useContext(StepsCartContext);
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

      //mostrar más
      const [isShowingAll, setIsShowingAll] = useState(true)

      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const [cartTotal, setCartTotal] = useState(0);
  
      const calculateTotal = () => {
          const total = cartItems.reduce((accumulator, product) => {
              return accumulator + parseFloat(product.price);
          }, 0);
          setCartTotal(total.toFixed(2));
      };
  
      useEffect(() => {
          calculateTotal();
      }, []);

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
                                    onChange={selectDeliveryLeft}
                                    />
                                    <div>
                                    <img src={building} alt="Tienda" width='25px' /><p><strong>Tienda Kara</strong></p><p>Gratis</p>
                                    </div>
                            </div>
                            <div 
                            className={isSelectedRight ? 'order-delivery-selected order-delivery-left' : 'order-delivery-left'}
                            onClick={selectDeliveryRight}
                            >
                                <input type="checkbox" 
                                className="accent-gray-500"
                                checked={isSelectedRight}
                                onChange={selectDeliveryRight}
                                />
                                <div>
                                    <img src={mapMarker} alt="Casa" width='25px' /><p>Casa</p><p>50 ARS</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='order-delivery-details'>
                            {isSelectedLeft ? 
                            <p>Alto Rosario Shopping</p> :
                            <>
                                <div>
                                    <span>Ingresa dirección: </span>
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
                        <header>
                            <div><p>({cartItems.length} Productos)</p></div>
                            <div
                            className='showMore'
                            onClick={()=>setIsShowingAll(!isShowingAll)}
                            ><p>{isShowingAll ? 'Mostrar menos' : 'Mostrar más'}</p><img src={angle} className={isShowingAll ? 'order-summary-list-header-img-more' : 'order-summary-list-header-img-less'} width='15' /></div>

                        </header>


                            {/* contendor del map */}
                            <div className={isShowingAll ? 'order-summary-item' : 'order-summary-item order-summary-item-hidden'}>
                                {cartItems?.map((product) => (
                                    <div className='cart-item' key={product.id}>
                                        <div className='order-sum-item-img'>
                                            {/* Utiliza la imagen del producto del array cartItems */}
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className='order-sum-item-title'>
                                            <strong>{product.name}</strong>
                                            <p className='order-sum-item-description'>{`Talle: ${product.size}`}</p>
                                            <p className='order-sum-item-description'>{`Cantidad: ${product.quantity}`}</p>
                                        </div>
                                        <div className='order-sum-item-price'>
                                            <p>{`ar$ ${product.price.toFixed(2)}`}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>




                    </div>
                    <div className='order-summary-container'>
                        <div className='order-summary-details'>
                            <p><strong>Entrega: </strong>{isSelectedLeft ?
                                                        'Kara Alto Rosario Shopping' : 
                                                        (inputValue ? inputValue : '')
                                                    }</p>
                            <p><strong>Fecha: </strong>{todayChecked ? todayString : tomorrowString}</p>
                        </div>
                        <div className='order-summary-price'>
                            <p><strong>Envío: </strong>{isSelectedLeft ? 'Gratis' : '50 ARS'}</p>
                            <p><strong>TOTAL: </strong>{isSelectedLeft ? cartTotal : (+cartTotal+50)}ARS</p>
                        </div>
                    </div>
                    <Link to='/cart/step-three'>
                        <button onClick={()=>handleStepsCart(2)}>PAGAR</button>
                    </Link>
                </div>
        
        
        
        </div> 
        </>
    )
}

export default CartTwoComponent