import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HeaderComponent } from './components/headerComponent'
import { BodyComponent } from './components/bodyComponent'
import { FooterComponent } from './components/footerComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
         <HeaderComponent></HeaderComponent>
         <BodyComponent></BodyComponent>
         <FooterComponent></FooterComponent>
        </>
    </React.StrictMode>,
)
