import { Link } from "react-router-dom"
import '../../assets/styles/registerComponent.css'
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RegisterComponent = () => {

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [errors, setErrors] = useState({}); // Nuevo estado para los errores

    const handleError = (error) => {
        if (error.response) {
            console.log(error.response.data);
            setErrors(error.response.data.error);

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
            firstName,
            lastName,
            email,
            number,
            password,
            repeatedPassword
        };

        try {
            const response = await axios.post('http://54.242.61.33/api/v1/user', user);
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

        <div className='register-component flex flex-wrap gap-12 mx-auto'>

            <div className="register-container flex flex-1 flex-col justify-center px-6 lg:px-8 min-w-80">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="font-bold tracking-tight text-gray-900 mt-4">
                        Registrate
                    </h2>
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="form-register space-y-6" onSubmit={handleSubmit}>

                        <div className="reg-username">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="username" className="reg-label">NOMBRE DE USUARIO</label>
                            {errors.username && <p className="  ml-4 text-red-500 text-xs italic mt-2">  {errors.username}</p>
}
                        </div>

                        <div className="reg-firstName">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="firstName"
                                required
                                className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label htmlFor="firstName" className="reg-label">NOMBRE</label>
                            {errors.firstName && <p className="  ml-4 text-red-500 text-xs italic mt-2">  {errors.firstName}</p>}
                        </div>

                        <div className="reg-lastname">
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                autoComplete="lastname"
                                required
                                className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label htmlFor="lastName" className="reg-label">APELLIDO</label>
                            {errors.lastName && <p className="  ml-4 text-red-500 text-xs italic mt-2">  {errors.lastName}</p>}
                        </div>

                        <div className="reg-email">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email" className="reg-label">EMAIL</label>
                            {errors.lastName && <p className="  ml-4 text-red-500 text-xs italic mt-2">  {errors.lastName}</p>}
                        </div>

                        <div className="reg-number">
                            <input
                                id="number"
                                name="number"
                                type="number"
                                autoComplete="number"
                                required
                                className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                            <label htmlFor="number" className="reg-label">NUMBER</label>
                            {errors.number && <p className="  ml-4 text-red-500 text-xs italic mt-2">  {errors.number}</p>}
                        </div>

                        <div className="reg-pass">
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
                            <label htmlFor="password" className="reg-label">CONTRASEÑA</label>
                            {errors.password && <p className="  ml-4 text-red-500 text-xs italic mt-2">  {errors.password}</p>}
                        </div>

                        <div className="reg-repeatedPassword">
                        <input
                                    id="repeatedPassword"
                                    name="repeatedPassword"
                                    type="password"
                                    autoComplete="current-repeatedPassword"
                                    required
                                    className="block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    value={repeatedPassword}
                                    onChange={(e) => setRepeatedPassword(e.target.value)}
                                />
                            <label htmlFor="repeatedPassword" className="reg-label">REPETIR CONTRASEÑA</label>
                            {errors.repeatedPassword && <p className="  ml-4 text-red-500 text-xs italic mt-2">  {errors.repeatedPassword}</p>}
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