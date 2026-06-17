import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import InputField from '../../components/InputField.jsx'; // <-- Añadido .jsx para evitar errores en Vite
import Button from '../../components/Button.jsx';       // <-- Añadido .jsx para evitar errores en Vite
import './Login.css';

export default function Login() { 
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue por completo
    
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('¡Inicio de sesión correcto!');
        //Redirigir a Home en el futuro
      } else {
        alert(data.error || 'Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error de conexión con el servidor:', error);
      alert('No se pudo conectar con el servidor. ¿Está Express encendido?');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2> Iniciar Sesión </h2>
        <p>Ingresa tus credenciales para acceder</p>
        
        <form onSubmit={handleSubmit}>
          <InputField label="Correo Electrónico" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@ejemplo.com" required />
          <InputField label="Contraseña" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required />
          <Button text="Iniciar Sesión" />
        </form>
        
        <div className="auth-link">
          ¿No tenés cuenta? <Link to="/register" style={{ color: '#4f46e5', fontWeight: 'bold', textDecoration: 'none' }}>Registrate acá</Link>
        </div>
      </div>
    </div>
  );
}
