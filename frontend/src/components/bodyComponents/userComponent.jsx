import '../../assets/styles/userComponent.css'
const UserComponent = () => {
  return (
    <div className='user-component flex flex-wrap gap-12 mx-auto'>

      <div className="flex flex-1 flex-col justify-center px-6 lg:px-8 min-w-80">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="font-bold tracking-tight text-gray-900 mt-4">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="user-login space-y-6" action="#" method="POST">
            <div className="login-email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              <label htmlFor="email" className="login-label">EMAIL</label>
            </div>

            <div className="login-pass">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <label htmlFor="password" className="login-label">CONTRASEÑA</label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                INICIAR SESION
              </button>
            </div>
          </form>
          <div className="text-sm">
            <a href="#" className="font-semibold text-zinc-900 hover:text-zinc-400">
              ¿Has olvidado tu contraseña?
            </a>
          </div>
        </div>
      </div>


      <div className='user-registration flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 min-w-80 my-12'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <div className="text-sm mb-4">
            <a href="#" className="font-bold text-zinc-900 hover:text-zinc-400 ">
              ¿Necesitas una nueva cuenta?
            </a>
          </div>
          <button
            className="flex w-full justify-center bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-400 "
            >
            REGISTRATE
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserComponent