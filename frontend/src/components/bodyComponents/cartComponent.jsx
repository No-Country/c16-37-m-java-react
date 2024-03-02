import { Outlet } from 'react-router-dom'
import '../../assets/styles/cartComponent.css'
import { useState } from 'react'

const CartComponent = () => {
    const [isOneComplete, setIsOneComplete] = useState(false)
    const [isTwoComplete, setIsTwoComplete] = useState(false)
    const [isThreeComplete, setIsThreeComplete] = useState(false)

    const stepHandler = (stepComplete) => {
        if(stepComplete === 1){
            setIsOneComplete(true)
            console.log('se activo paso 1')
        }
        if(stepComplete === 2){
            setIsTwoComplete(true)
            console.log('se activo paso 2')
        }
        if(stepComplete === 1){
            setIsThreeComplete(true)
            console.log('se activo paso 3')
        }

    }

  return (
    <section className='cart-container max-w-screen-lg mx-auto'>
        <div className='cart-steps max-w-80 mx-auto mb-8'>
            <div className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200">
                <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
                <li className={`relative flex justify-start  ${isOneComplete ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>
                    <span className={isOneComplete ? "absolute -bottom-[1.75rem] start-0 text-white rounded-full bg-gray-900 " : "absolute -bottom-[1.75rem] start-0 w-4 text-white text-center bg-gray-400 "}>
                    {isOneComplete ? <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                        />
                    </svg> : '1'}
                    </span>

                    <span className="hidden sm:block"> Cesta </span>

                    <svg
                    className="size-6 sm:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                    </svg>
                </li>

                <li className={`relative flex justify-center  ${isTwoComplete ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>
                    <span className={`absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 ${isTwoComplete ? 'rounded-full bg-gray-900' : 'w-4 text-white text-center bg-gray-400'}`}  >
                    {isTwoComplete ? <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                        />
                    </svg> : '2'}
                    </span>

                    <span className="hidden sm:block"> Entrega </span>

                    <svg
                    className="mx-auto size-6 sm:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    </svg>
                </li>

                <li className={`relative flex justify-end  ${isThreeComplete ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>
                    <span className={`absolute -bottom-[1.75rem] end-0 ${isTwoComplete ? 'rounded-full bg-gray-900' : 'w-4 text-white text-center bg-gray-400'}`}>
                    {isThreeComplete ? <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                        />
                    </svg> : '3'}
                    </span>

                    <span className="hidden sm:block"> Pago </span>

                    <svg
                    className="size-6 sm:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                    </svg>
                </li>
                </ol>
            </div>
        </div>
        <Outlet stepHandler={stepHandler}/>    
    </section>
  )
}

export default CartComponent