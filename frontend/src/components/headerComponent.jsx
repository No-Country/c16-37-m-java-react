import "../assets/styles/headerComponent.css";
import imgLogo from "../assets/img/headerComponent/zara-logo.svg";
import iconMenuHamburger from "../assets/img/icons/menu-burger.svg";
import iconUser from "../assets/img/icons/user.svg";
import iconShoppingBag from "../assets/img/icons/shopping-bag2.svg";
import iconCross from "../assets/img/icons/cross.svg";
import { useState } from "react";

export const HeaderComponent = () => {
  
  const onSubmit = (event) => {
    event.preventDefault()
  }
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <>
      <h1 className="text-3xl font-bold underline">No Country - c16-31-m-java-react</h1>

      <div className ="header-container">
        <div className="nav-container ">
            <div className ="nav-icon-container">
                  <img  className="nav-icon"
                        src={iconMenuHamburger} alt="" width="32" 
                        onClick={() => setOpenSideBar(true)}/>
                  <img className="nav-logo" src={imgLogo} alt="" width="200" />
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
                      <img className="nav-icon mx-4" src={iconUser} alt="" width="32" />
                      <img className="nav-icon mx-4" src={iconShoppingBag} alt="" width="32" />
                  </div>
            </div>
        </div>
      </div>

 
    <div className='side-bar'>
      <div className={`${!openSideBar && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpenSideBar(false)}></div>

      <div className={`${openSideBar ? "w-80" : "w-0"} bg-white min-h-screen fixed top-0 left-0 transition-all duration-300`}>
        <div className={`${!openSideBar && "hidden"} pt-3 relative`}>
          <button className='absolute top-0 right-0 h-16 w-16 ' onClick={() => setOpenSideBar(false)}>
            <img src={iconCross} alt="" width={22}/>
          </button>
          <img className="side-bar-logo ml-8 mt-2 mb-8" src={imgLogo} alt="" width="200" />
          {/* <div className='text-center text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 1</div>
          <div className='text-center text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 2</div>
          <div className='text-center text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 3</div>
          <div className='text-center text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 4</div>
          <div className='text-center text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 5</div> */}
        
        
        <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
            <button className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-black-900 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
                MUJER
            </button>

            <button className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-600 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                HOMBRE
            </button>

            <button className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-gray-600 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
                NIÑOS
            </button>
        </div>
        
        
        
        
        
        </div>
      </div>
    </div>
    </>
  );
};