import visa from "../../../assets/img/icons/visa.svg";
import master from "../../../assets/img/icons/mastercard.svg";
import american from "../../../assets/img/icons/american-express.svg";
import mercado from "../../../assets/img/icons/mercadolibre.svg";
import voucher from "../../../assets/img/icons/voucher.svg";
import gift from "../../../assets/img/icons/gift-card.svg";
import "../../../assets/styles/cartThreeComponent.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getStepsCart } from "../../../redux/actions";

const CartThreeComponent = () => {
  //estados de casillas de pago
  const [isVisa, setIsVisa] = useState(false);
  const [isMaster, setIsMaster] = useState(false);
  const [isAmerican, setIsAmerican] = useState(false);
  const [isMercado, setIsMercado] = useState(false);
  const [isGift, setIsGift] = useState(false);
  const [isVoucher, setIsVoucher] = useState(false);
  const handlePay = (estado, setEstado) => {
    if (!estado) {
      setIsVisa(false);
      setIsMaster(false);
      setIsAmerican(false);
      setIsMercado(false);
      setIsGift(false);
      setIsVoucher(false);
      setEstado(true);
    }
  };

  return (
    <section className="cart-step3">
      <h2>Pago</h2>
      <div className="cart-step3-container">
        <div className="step3-column1">
          <h3>Resumen de la compra</h3>
          <div className="pay-summary-container">
            <p>(x Productos)</p>

            <div className="pay-summary-">
              <div className="pay-summary-details">
                <p>
                  <strong>Entrega: </strong>Carrito entrega
                </p>
                <p>
                  <strong>Fecha: </strong>Carrito Fecha
                </p>
              </div>
              <div className="pay-summary-price">
                <p>
                  <strong>Envío: </strong>Carrito Envío
                </p>
                <p>
                  <strong>TOTAL: </strong>SUMA Total
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="step3-column2">
          <h3>Elige forma de pago</h3>
          <div className="pay-method-container">
            <div>
              <div
                onClick={() => handlePay(isVisa, setIsVisa)}
                className={isVisa ? "pay-method-container-selected" : ""}
              >
                <input  type="checkbox" 
                        className="accent-gray-500"
                        checked={isVisa}
                        onChange={() => handlePay(isVisa, setIsVisa)}
                />
                <img src={visa} width="32" alt="Tarjeta Crédito Visa" />
                <p>TC Visa</p>
              </div>
              <div
                onClick={() => handlePay(isMaster, setIsMaster)}
                className={isMaster ? "pay-method-container-selected" : ""}
              >
                <input  type="checkbox" 
                        className="accent-gray-500"
                        checked={isMaster}
                        onChange={() => handlePay(isMaster, setIsMaster)}
                />
                <img src={master} width="32" alt="Tarjeta Crédito MasterCard" />
                <p>TC MasterCard</p>
              </div>
            </div>
            <div>
              <div
                onClick={() => handlePay(isAmerican, setIsAmerican)}
                className={isAmerican ? "pay-method-container-selected" : ""}
              >
                <input  type="checkbox" 
                        className="accent-gray-500"
                        checked={isAmerican}
                        onChange={() => handlePay(isAmerican, setIsAmerican)}
                />
                <img
                  src={american}
                  width="32"
                  alt="Tarjeta Crédito American Express"
                />
                <p>TC American Express</p>
              </div>
              <div
                onClick={() => handlePay(isMercado, setIsMercado)}
                className={isMercado ? "pay-method-container-selected" : ""}
              >
                <input  type="checkbox" 
                        className="accent-gray-500"
                        checked={isMercado}
                        onChange={() => handlePay(isMercado, setIsMercado)}
                />
                <img src={mercado} width="32" alt="Mercado Pago" />
                <p>Mercado Pago</p>
              </div>
            </div>
            <div>
              <div
                onClick={() => handlePay(isGift, setIsGift)}
                className={isGift ? "pay-method-container-selected" : ""}
              >
                <input  type="checkbox" 
                        className="accent-gray-500"
                        checked={isGift}
                        onChange={() => handlePay(isGift, setIsGift)}
                />
                <img src={gift} width="32" alt="Tarjeta Regalo" />
                <p>Tarjeta Regalo</p>
              </div>
              <div
                onClick={() => handlePay(isVoucher, setIsVoucher)}
                className={isVoucher ? "pay-method-container-selected" : ""}
              >
                <input  type="checkbox" 
                        className="accent-gray-500"
                        checked={isVoucher}
                        onChange={() => handlePay(isVoucher, setIsVoucher)}
                />
                <img src={voucher} width="32" alt="Cupón" />
                <p>Cupón</p>
              </div>
            </div>
          </div>
        </div>

        <div className="step3-column3">
          <h3>Ingresa los datos de la tarjeta</h3>
          <div className="pay-form">
            <form className="">
              <label className="form-name relative flex flex-col mb-2">
                <span className="text-xs ">Nombre Titular</span>
                <input
                  className="peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="card_name"
                  placeholder="Juan Pérez"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </label>

              <label className="form-number relative flex flex-col mb-2">
                <span className="text-xs">Número de la Tarjeta</span>
                <input
                  className="peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="card_number"
                  placeholder="0000 0000 0000"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </label>

              <label className="form-expire relative flex flex-col  mb-2">
                <span className="text-xs">Vencimiento</span>
                <input
                  className="peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="expire_date"
                  placeholder="MM/YY"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </label>

              <label className="form-cvc relative flex flex-col  mb-2">
                <span className="text-xs flex items-center gap-3">
                  CVC/CVV
                  <span className="relative group">
                    <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 top-1/2 bg-black text-white">
                      {" "}
                      Estos números están en el reverso de la tarjeta.
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </span>
                <input
                  className="peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="card_cvc"
                  placeholder="&bull;&bull;&bull;"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </label>
            </form>

                <div>
                    <Link to='/cart/step-three'>
                        <button onClick={()=>getStepsCart(3)}>PAGAR</button>
                    </Link>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartThreeComponent;
