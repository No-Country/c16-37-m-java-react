import '../assets/styles/bodyComponent.css'
import { MainBodyComponent } from './bodyComponents/mainBodyComponent'
import ProductsComponent from './bodyComponents/productsComponent'
import UserComponent from './bodyComponents/userComponent'
import CartComponent from './bodyComponents/cartComponent'
import RegisterComponent from './bodyComponents/registerComponent'
import { Routes, Route } from 'react-router-dom'
import CartOneComponent from './bodyComponents/cartComponents/cartOneComponent'
import CartTwoComponent from './bodyComponents/cartComponents/cartTwoComponent'
import CartThreeComponent from './bodyComponents/cartComponents/cartThreeComponent'
import {ProfileComponent} from "./bodyComponents/ProfileComponent.jsx";

export const BodyComponent = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={ <MainBodyComponent />} />
        <Route path='/products' element= { <ProductsComponent /> } />
        <Route path='/user' element= { <UserComponent /> } />
        <Route path='/register' element= { <RegisterComponent /> } />
        <Route path='/profile' element= { <ProfileComponent /> } />
        <Route path='/cart' element= { <CartComponent /> }>
        <Route path='/cart/' element={<CartOneComponent />} /> 
            <Route path='/cart/*' element={<CartOneComponent />} /> 
            <Route path='/cart/step-two' element={<CartTwoComponent />} /> 
            <Route path='/cart/step-three' element={<CartThreeComponent />} /> 
        </Route>
      </Routes>
    </>
    )
}