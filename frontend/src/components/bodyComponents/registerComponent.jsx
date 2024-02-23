import { Link } from "react-router-dom"
import '../../assets/styles/registerComponent.css'
const RegisterComponent = () => {
  return (

    <div className='register-component flex flex-wrap gap-12 mx-auto'>

      <div className="register-container flex flex-1 flex-col justify-center px-6 lg:px-8 min-w-80">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="font-bold tracking-tight text-gray-900 mt-4">
            Registrate
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="form-register space-y-6" action="#" method="POST">

          <div className="reg-name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              <label htmlFor="name" className="reg-label">NOMBRE DE USUARIO</label>
            </div>

            <div className="reg-email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              <label htmlFor="email" className="reg-label">EMAIL</label>
            </div>

            <div className="reg-pass">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <label htmlFor="password" className="reg-label">CONTRASEÑA</label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                REGISTRARTE
              </button>
            </div>
          </form>
          <div className="text-sm text-zinc-900">
            Al registrarte aceptas nuestras Condiciones de Uso y Políticas de Privacidad
          </div>
        </div>
      </div>
      <div className="reg-is-user flex flex-1 flex-col justify-center px-6 lg:px-8 min-w-80">
      <p className="text-sm text-zinc-900">¿Ya tienes una cuenta?</p>
      <Link 
          className="text-sm text-zinc-900 hover:text-zinc-400"
          to={'/user'}><strong>Iniciar Sesión</strong></Link>
      </div>
    </div>    
  )
}

export default RegisterComponent