import "../assets/styles/headerComponent.css";
import imgLogo from "../assets/img/headerComponent/zara-logo.svg";
import iconMenuHamburger from "../assets/img/icons/menu-burger.svg";
import iconUser from "../assets/img/icons/user.svg";
import iconShoppingBag from "../assets/img/icons/shopping-bag2.svg";
import iconCross from "../assets/img/icons/cross.svg";
import { useState } from "react";
import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
  
  const onSubmit = (event) => {
    event.preventDefault()
  }
  const [openSideBar, setOpenSideBar] = useState(false)
  const [sideBarCategorySelect, setSideBarCategorySelect] = useState('1')
  return (
    <>
      <h1 className="text-3xl font-bold underline">No Country - c16-31-m-java-react</h1>

      <div className ="header-container">
        <div className="nav-container ">
            <div className ="nav-icon-container">
                  <img  className="icon-side-bar nav-icon"
                        src={iconMenuHamburger} alt="" width="32" 
                        onClick={() => setOpenSideBar(true)}/>
                  <Link to='/'>
                  <img className="nav-logo" src={imgLogo} alt="" width="200" />
                  </Link>
                  <form className="nav-search group relative" onSubmit={onSubmit}>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-gray-500"
                      aria-hidden="true"
                      >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        />
                    </svg>
                    <input
                      className="w-80 focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                      type="text"
                      aria-label="Filter projects"
                      placeholder="Tipo de prenda..."
                      />
                  </form>
                  <div className="nav-icon-right flex flex-row flex-wrap items-center">
                      <Link to='/user'>
                      <img className="nav-icon mx-4" src={iconUser} alt="" width="32" />
                      </Link>
                      <Link to='/cart'>
                      <img className="nav-icon mx-4" src={iconShoppingBag} alt="" width="32" />
                      </Link>
                  </div>
            </div>
        </div>
      </div>

 
    <div className='sidebar'>
      <div className={`${!openSideBar && "hidden"} sidebar-bg bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpenSideBar(false)}></div>

      <div className={`${openSideBar ? "w-80" : "w-0"} sidebar-body bg-white min-h-screen fixed top-0 left-0 transition-all duration-300 overflow-hidden`}>
        <div className={`${!openSideBar && "hidden"} pt-3 relative`}>
          <button className='absolute top-0 right-0 h-16 w-16 ' onClick={() => setOpenSideBar(false)}>
            <img src={iconCross} alt="" width={22}/>
          </button>
          <img className="sidebar-logo ml-8 mt-2 mb-8" src={imgLogo} alt="" width="200" />
        
          <div className="sidebar-category-container flex overflow-x-auto whitespace-nowrap justify-center">
              <button onClick={() => setSideBarCategorySelect('1')} className={`sidebar-category-item inline-flex transition-all duration-300 items-center h-12 px-4 py-2 text-sm text-center text-gray-800 border-gray-300 sm:text-base whitespace-nowrap focus:outline-none ${sideBarCategorySelect === '1' ? "border-2 border-b-8 rounded-t-lg border-zinc-400" : "bg-transparent border-b cursor-base hover:border-gray-900 dark:hover:border-gray-300"}`}>
                  MUJER
              </button>

              <button onClick={() => setSideBarCategorySelect('2')} className={`sidebar-category-item inline-flex transition-all duration-300 items-center h-12 px-4 py-2 text-sm text-center text-gray-800 border-gray-300 sm:text-base whitespace-nowrap focus:outline-none ${sideBarCategorySelect === '2' ? "border-2 border-b-8 rounded-t-lg border-zinc-400" : "bg-transparent border-b cursor-base hover:border-gray-900 dark:hover:border-gray-300"}`}>
                  HOMBRE
              </button>

              <button onClick={() => setSideBarCategorySelect('3')} className={`sidebar-category-item inline-flex transition-all duration-300 items-center h-12 px-4 py-2 text-sm text-center text-gray-800 border-gray-300 sm:text-base whitespace-nowrap focus:outline-none ${sideBarCategorySelect === '3' ? "border-2 border-b-8 rounded-t-lg border-zinc-400" : "bg-transparent border-b cursor-base hover:border-gray-900 dark:hover:border-gray-300"}`}>
                  NIÑOS
              </button>
          </div>
          
          
          <div className={`sidebar-subcategory-container ${sideBarCategorySelect === '2' ? 'sidebar-sub-cont2' : (sideBarCategorySelect === '3' ? 'sidebar-sub-cont3' : "")}`}>
            <div className="sidebar-subcategory">
              <div className="sidebar-subcategory-item">ABRIGOS | TRENCH</div>
              <div className="sidebar-subcategory-item">CHAQUETAS</div>
              <div className="sidebar-subcategory-item">BLAZERS</div>
              <div className="sidebar-subcategory-item">VESTIDOS | MONOS</div>
              <div className="sidebar-subcategory-item">CAMISAS | TOPS</div>
              <div className="sidebar-subcategory-item">CAMISETAS</div>
              <div className="sidebar-subcategory-item">PUNTO | BUZOS</div>
              <div className="sidebar-subcategory-item">PANTALONES</div>
              <div className="sidebar-subcategory-item">JEANS</div>
              <div className="sidebar-subcategory-item">FALDAS | SHORTS</div>
              <div className="sidebar-subcategory-item">ZAPATOS</div>
              <div className="sidebar-subcategory-item">BOLSOS</div>
            </div>
            <div className="sidebar-subcategory">
              <div className="sidebar-subcategory-item">ABRIGOS | TRENCH</div>
              <div className="sidebar-subcategory-item">CHAQUETAS</div>
              <div className="sidebar-subcategory-item">BLAZERS</div>
              <div className="sidebar-subcategory-item">CAMISAS</div>
              <div className="sidebar-subcategory-item">CAMISETAS</div>
              <div className="sidebar-subcategory-item">PUNTO | BUZOS</div>
              <div className="sidebar-subcategory-item">PANTALONES</div>
              <div className="sidebar-subcategory-item">JEANS</div>
            </div>
            <div className="sidebar-subcategory">
              <div className="sidebar-subcategory-item">BLAZERS</div>
              <div className="sidebar-subcategory-item">VESTIDOS | MONOS</div>
              <div className="sidebar-subcategory-item">CAMISETAS</div>
              <div className="sidebar-subcategory-item">PUNTO | BUZOS</div>
              <div className="sidebar-subcategory-item">PANTALONES</div>
              <div className="sidebar-subcategory-item">JEANS</div>
            </div>



          </div>


        </div>
      </div>
    </div>
    </>
  );
};