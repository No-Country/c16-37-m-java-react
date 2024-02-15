import '../assets/styles/bodyComponent.css'
import bgZara1 from '../assets/img/bodyComponent/bg-zara-dresses-1.jpg'
import bgZara2 from '../assets/img/bodyComponent/bg-zara-dresses-2.jpg'
import bgZara3 from '../assets/img/bodyComponent/bg-zara-dresses-3.jpg'
import filterCatWomen from '../assets/img/bodyComponent/category-women.jpg'
import filterCatMen   from '../assets/img/bodyComponent/category-men.jpg'
import filterCatKids from '../assets/img/bodyComponent/category-kids.webp'
export const BodyComponent = () => {
  return (
    <>
    <h1 className="text-3xl font-bold underline">No Country - c16-31-m-java-react</h1>
    <div className='bg-container'>
    <div className='bg-zara-2'><img src={bgZara2} alt="" /></div>
    <div className='bg-zara-1'><img src={bgZara1} alt="" /></div>
    <div className='bg-zara-3'><img src={bgZara3} alt="" /></div>
    </div>
    <div className='category-container'>
      <div className='category-card'>
        <img src={filterCatWomen} alt="foto de mujer" />
        <div>
          <h3>MUJER</h3> 
        </div>
      </div>
      <div className='category-card'>
        <img src={filterCatMen} alt="foto de hombre" />
        <div>
          <h3>HOMBRE</h3>
        </div>
      </div>
      <div className='category-card'>
        <img src={filterCatKids} alt="foto de niños" />
        <div>
          <h3>NIÑOS</h3>
        </div>
      </div>
    </div>
    </>
    )
}
