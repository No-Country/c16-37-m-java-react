import '../assets/styles/bodyComponent.css'
import { MainBodyComponent } from './bodyComponents/mainBodyComponent'
import ProductsComponent from './bodyComponents/productsComponent'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
 
export const BodyComponent = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={ <MainBodyComponent />} />
        <Route path='/products' element= { <ProductsComponent /> } /> 
      </Routes>
    </>
    )
}


// export const BodyComponent = () => {
//   // const showComponent = (show) => {
//   //     setShowMain(false)
//   //     setShowProducts(false)
//   //     show(true)
//   // }

//   // const [showMain, setShowMain] = useState(true);
//   // const [showProducts, setShowProducts] = useState(false);
//   return (
//     <>
//       {/* <MainBodyComponent />
//       <MainBodyCatComponent />
//       <ProductsComponent /> */}

//       {/* {showMain ? ( <MainBodyComponent /> ) : null}
//       {showMain ? ( <MainBodyCatComponent showComponent={showComponent}/> ) : null}
//       {showProducts ? ( <ProductsComponent /> ) : null}
//       <button onClick={showComponent(setShowProducts)}>show</button>
//        */}
//     </>
//     )
// }