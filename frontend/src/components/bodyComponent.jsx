import '../assets/styles/bodyComponent.css'
import { MainBodyComponent } from './bodyComponents/mainBodyComponent'
import ProductsComponent from './bodyComponents/productsComponent'
import UserComponent from './bodyComponents/userComponent'
import CartComponent from './bodyComponents/cartComponent'
import RegisterComponent from './bodyComponents/registerComponent'
import { Routes, Route } from 'react-router-dom'
 
export const BodyComponent = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={ <MainBodyComponent />} />
        <Route path='/products' element= { <ProductsComponent /> } /> 
        <Route path='/user' element= { <UserComponent /> } /> 
        <Route path='/register' element= { <RegisterComponent /> } /> 
        <Route path='/cart' element= { <CartComponent /> } /> 
      </Routes>
    </>
    )
}