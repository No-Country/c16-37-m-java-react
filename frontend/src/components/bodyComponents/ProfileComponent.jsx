import axios from 'axios';
import { useState, useEffect } from 'react';

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

  return (
    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      {/* Add more fields as necessary */}
    </div>
  );
};