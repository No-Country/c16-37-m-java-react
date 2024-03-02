const modalComponent = ({children}) => {

    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="modal">
    <div
      className={`${
        !openModal && "hidden"
      } sidebar-bg bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
      onClick={() => setOpenModal(false)}
    ></div>

    <div
      className={`${
        openModal ? "w-80" : "w-0"
      } sidebar-body bg-white min-h-screen fixed top-0 left-0 transition-all duration-300 overflow-hidden`}
    >
      <div className={`${!openModal && "hidden"} pt-3 relative`}>
        <button
          className="absolute top-0 right-0 h-16 w-16 "
          onClick={() => setOpenModal(false)}
        >
          <img src={iconCross} alt="" width={22} />
        </button>

            </div>
        </div>
    </div>  )
}

export default modalComponent