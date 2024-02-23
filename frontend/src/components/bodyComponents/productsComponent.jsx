import '../../assets/styles/productsComponent.css'
import iconCross from '../../assets/img/icons/cross.svg'
import heart from '../../assets/img/icons/heart.svg'
import heartFilled from '../../assets/img/icons/heart-filled.svg'
import camisa1 from '../../assets/img/bodyComponent/products/camisa1.jpg'
import camisa2 from '../../assets/img/bodyComponent/products/camisa2.jpg'
import camisa3 from '../../assets/img/bodyComponent/products/camisa3.jpg'
import camisa4 from '../../assets/img/bodyComponent/products/camisa4.jpg'
import camisa5 from '../../assets/img/bodyComponent/products/camisa5.jpg'
const ProductsComponent = () => {
  return (
    <div className='products-container'>
      <div className="filter-container">
        <div className="filter--category">
            <strong>MUJER</strong>
            <p>Camisas</p>
            <p>Resultados (25)</p>
        </div>
        <div className="filter--selected">
            <strong>Filtro Seleccionado:</strong>
            <div className='filter--selected-container'>
              <div className="filter--selected-item">
                  <p>Camisas</p>
                  <img src={iconCross} alt="" width='10' />
              </div>
            </div>
        </div>
        <div className="filter--orderby">
            <strong>Ordenar por:</strong>
            <select className="select select-sm w-30 max-w-xs">
                <option disabled selected>Menor Precio</option>
                <option>Mayor Precio</option>
                <option>Más relevante</option>
                <option>{`// New`}</option>
            </select>
        </div>

      </div>
      <div className='products-grid'>
          {/* generar componente */}
          <div className='product-item'>
                <img src={camisa1} alt="" />
            <div className='product-item-footer'>
              <div className='product-item-footer-text'>
                <p>CAMISA CROP GABARDINA</p>
                <p>79.990,00 ARS</p>
              </div>
              <img src={heart} alt="" width='20px' />
            </div>
          </div>

          <div className='product-item'>
                <img src={camisa1} alt="" />
            <div className='product-item-footer'>
              <div className='product-item-footer-text'>
                <p>CAMISA CROP GABARDINA</p>
                <p>79.990,00 ARS</p>
              </div>
              <img src={heart} alt="" width='20px' />
            </div>
          </div>

          <div className='product-item'>
                <img src={camisa1} alt="" />
            <div className='product-item-footer'>
              <div className='product-item-footer-text'>
                <p>CAMISA CROP GABARDINA</p>
                <p>79.990,00 ARS</p>
              </div>
              <img src={heart} alt="" width='20px' />
            </div>
          </div>

          <div className='product-item'>
                <img src={camisa1} alt="" />
            <div className='product-item-footer'>
              <div className='product-item-footer-text'>
                <p>CAMISA CROP GABARDINA</p>
                <p>79.990,00 ARS</p>
              </div>
              <img src={heart} alt="" width='20px' />
            </div>
          </div>

          <div className='product-item'>
                <img src={camisa1} alt="" />
            <div className='product-item-footer'>
              <div className='product-item-footer-text'>
                <p>CAMISA CROP GABARDINA</p>
                <p>79.990,00 ARS</p>
              </div>
              <img src={heart} alt="" width='20px' />
            </div>
          </div>


          
      
      
      
      </div>
    </div>
  )
}

export default ProductsComponent