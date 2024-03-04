import { Link } from 'react-router-dom'
import '../../assets/styles/userComponent.css'
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const UserComponent = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleError = (error) => {
  if (error.response) {
    console.log(error.response.data);

  } else if (error.request) {
    console.log(error.request);

  } else {
    console.log('Error', error.message);
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();

  const user = {
    username,
    password,
  };

  try {
    const response = await axios.post('http://54.242.61.33/api/v1/login', user);
    console.log(response.data);
    localStorage.setItem('jwt', response.data.jwtToken);
    await Swal.fire({
      icon: 'success',
      title: '¡Inicio de sesión exitoso!',
      text: 'Has iniciado sesión correctamente.',
    });
    window.location.href = './';
  } catch (error) {
    handleError(error);
    await Swal.fire({
      icon: 'error',
      title: '¡Error!',
      text: error.response.data.message,
    });
  }
};


  return (
    <div className='user-component flex flex-wrap gap-12 mx-auto'>

      <div className="user-login-container flex flex-1 flex-col justify-center px-6 lg:px-8 min-w-80">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="font-bold tracking-tight text-gray-900 mt-4">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="user-login space-y-6" onSubmit={handleSubmit}>
            <div className="login-username">
              <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username" className="login-label">USERNAME</label>
            </div>
            <div className="login-pass">
              <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
          <Link to={'/register'}>
            <button
              className="flex w-full justify-center bg-zinc-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-400 "
              >
            REGISTRATE
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserComponent