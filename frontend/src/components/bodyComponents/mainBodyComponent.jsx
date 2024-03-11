import '../../assets/styles/mainBodyComponent.css'
import bgZara1 from '../../assets/img/bodyComponent/bg-zara-dresses-1.webp'
import bgZara2 from '../../assets/img/bodyComponent/bg-zara-dresses-2.webp'
import bgZara3 from '../../assets/img/bodyComponent/bg-zara-dresses-3.webp'
import MainBodyCatComponent from './mainBodyCatComponent'

export const MainBodyComponent = () => {

  return (
    <>
    <div className='main-container'>
        <div className='bg-container'>
            <div className="bg-mask"></div>    
            <div className='bg-zara-2'><img src={bgZara2} alt="" /></div>
            <div className='bg-zara-1'><img src={bgZara1} alt="" /></div>
            <div className='bg-zara-3'><img src={bgZara3} alt="" /></div>
            <div className="bg-call-action">NUEVA COLECCIÓN</div>    
        </div>
    </div>
    <MainBodyCatComponent></MainBodyCatComponent>
    </>
    )
}
