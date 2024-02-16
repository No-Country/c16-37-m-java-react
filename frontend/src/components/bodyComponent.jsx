import '../assets/styles/bodyComponent.css'
import { MainBodyComponent } from './bodyComponents/mainBodyComponent'
import React, { useState } from 'react';
 
export const BodyComponent = () => {
  const [showMain, setShowMain] = useState(true);
  return (
    <>
      {showMain ? ( <MainBodyComponent /> ) : null}
      
    </>
    )
}
