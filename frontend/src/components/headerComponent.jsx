import "../assets/styles/headerComponent.css";
import imgLogo from "../assets/img/headerComponent/zara-logo.svg";
import iconMenuHamburger from "../assets/img/icons/menu-burger.svg";
import iconUser from "../assets/img/icons/user.svg";
import iconShoppingBag from "../assets/img/icons/shopping-bag2.svg";
export const HeaderComponent = () => {
  return (
    <>
      <div className ="header-container header-container-initial">
        <div className="nav-container ">
            <img className="nav-logo" src={imgLogo} alt="" width="300"/>
            <div className ="nav-icon-container">
            <img className="nav-icon" src={iconMenuHamburger} alt="" width="32" />
            <div className="nav-icon-right flex flex-row flex-wrap items-center">
                <form className="nav-search group relative">
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
            <img className="nav-icon mx-4" src={iconUser} alt="" width="32" />
            <img className="nav-icon mx-4" src={iconShoppingBag} alt="" width="32" />
            </div>

            </div>
            
        </div>
        <div className="nav-call-action">NUEVA COLECCIÓN
        </div>    
      </div>
    </>
  );
};