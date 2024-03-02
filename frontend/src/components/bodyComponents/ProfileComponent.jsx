import axios from 'axios';
import { useState, useEffect } from 'react';
import '../../assets/styles/userComponent.css'

export const ProfileComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post('http://ecommerce.c3wco4c0ixns.us-east-2.rds.amazonaws.com/api/v1/profile', {}, {
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
          <button type="button" className="boton-portada">
            <i className="far fa-image"></i> Mi PERFIL
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