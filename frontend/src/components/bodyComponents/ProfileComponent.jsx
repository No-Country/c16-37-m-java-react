import axios from 'axios';
import { useState, useEffect } from 'react';
import '../../assets/styles/userComponent.css'

export const ProfileComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.post('https://www.thechris.tech/api/v1/profile', {}, {
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
  
  const signOff = () =>{
    localStorage.removeItem('jwt');
    window.location.href = '/';
  }

return (
    <section className="seccion-perfil-usuario">
      <div className="perfil-usuario-header">
        <div className="perfil-usuario-portada">
        <h3 className="titulo">Bienvenido de nuevo!</h3>
          <div className="perfil-usuario-avatar">
            <img src="src/assets/img/icons/user.png" alt="img-avatar" />
          </div>
        </div>
      </div>
      <div className="perfil-usuario-body">
        <div className="perfil-usuario-bio">
          <h3 className="titulo">{user.username}</h3>
        </div>
        <div className="perfil-usuario-footer">
          <ul className="lista-datos">
            <li><span className="font-bold">Nombre:</span> {user.firstName}</li>
            <li><span className="font-bold">Apellido:</span> {user.lastName}.</li>
            <li><span className="font-bold">Email:</span> {user.email}</li>
            <li><span className="font-bold">Teléfono:</span> {user.number}</li>
          </ul>
          <button>Cambiar contraseña</button>
          <button onClick={signOff}>Cerrar Sesión</button>
        </div>

      </div>
    </section>
);
};