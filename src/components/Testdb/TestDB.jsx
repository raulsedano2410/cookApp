// src/view/NewSpace/NewSpace.js
import React, { useEffect, useState } from "react";

function TestDB() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://prueba-db.onrender.com/api/data");
      //   const response = await fetch("http://localhost:5000/api/data");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    if (showUsers) {
      fetchUsers();
    }
  }, [showUsers]);

  const handleShowUsers = () => {
    setShowUsers(true);
  };

  const handleHideUsers = () => {
    setShowUsers(false);
  };

  return (
    <div>
      <h1>Mi Espacio Nuevo</h1>
      <p>Bienvenido a mi nuevo espacio.</p>

      <button onClick={handleShowUsers}>Mostrar Usuarios</button>
      <button onClick={handleHideUsers}>Ocultar Usuarios</button>

      {showUsers && (
        <div>
          <h2>Lista de Usuarios:</h2>
          {users.length > 0
            ? (
              <ul>
                {users.map((user, index) => (
                  <li key={index}>{user.name}</li> // Asume que cada usuario tiene una propiedad 'name'
                ))}
              </ul>
            )
            : <p>Cargando usuarios...</p>}
        </div>
      )}
    </div>
  );
}

export default TestDB;
