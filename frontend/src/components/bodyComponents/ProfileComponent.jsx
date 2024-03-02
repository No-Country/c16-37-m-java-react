import axios from 'axios';
import { useState, useEffect } from 'react';
import '../../assets/styles/userComponent.css'
import Swal from "sweetalert2";

export const ProfileComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post('http://localhost:8081/api/v1/profile', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    console.log("se hizo click")
    try {
      const token = localStorage.getItem('jwt');
      console.log(token)
      const response = await axios.post('http://localhost:8081/api/v1/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        localStorage.removeItem('jwt');
        await Swal.fire({
          icon: 'success',
          title: '¡Cierre de sesión exitoso!',
          text: 'Has cerrado sesión correctamente.',
        });
        window.location.href = 'http://localhost:5173/';
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
      <section className="seccion-perfil-usuario">
        <div className="perfil-usuario-header">
          <div className="perfil-usuario-portada">
            <div className="perfil-usuario-avatar">
              <img src="src/assets/img/icons/user.png" alt="img-avatar" />
              <button type="button" className="boton-avatar">
                <i className="far fa-image"></i>
              </button>
            </div>
            <button type="button" className="boton-portada" onClick={handleLogout}>
              <i className="far fa-image"></i> CERRAR SESION
            </button>
          </div>
        </div>
        <div className="perfil-usuario-body">
          <div className="perfil-usuario-bio">
            <h3 className="titulo">{user.username}</h3>
            <p className="texto">Bienvenido a tu perfil . Muchas gracias por preferir KARA para adquirir tus productos.</p>
          </div>
          <div className="perfil-usuario-footer">
            <ul className="lista-datos">
              <li><i className="icono fas fa-phone-alt"></i> <span className="font-bold">Nombre:</span> {user.firstName}</li>
              <li><i className="icono fas fa-briefcase"></i> <span className="font-bold">Apellido:</span> {user.lastName}.</li>
              <li><i className="icono fas fa-map-signs"></i> <span className="font-bold">Email:</span> {user.email}</li>
            </ul>
            <ul className="lista-datos">
              <li><i className="icono fas fa-map-marker-alt"></i> <span className="font-bold">Username:</span> {user.username}</li>
              <li><i className="icono fas fa-calendar-alt"></i> <span className="font-bold">Number:</span> {user.number}</li>
              <li><i className="icono fas fa-user-check"></i> <span className="font-bold">Role:</span> Customer</li>
            </ul>
          </div>

        </div>
      </section>
  );
};