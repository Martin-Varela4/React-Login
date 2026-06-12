import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import InputField from '../../components/InputField.jsx';
import Button from '../../components/Button.jsx';
import './Register.css';

export default function Register() { 
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert('¡Usuario registrado con éxito!');
        navigate('/login'); 
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Crear Cuenta</h2>
        <p>Regístrate para empezar</p>
        <form onSubmit={handleSubmit}>
          <InputField label="Nombre Completo" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Juan Pérez" />
          <InputField label="Correo Electrónico" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@ejemplo.com" required />
          <InputField label="Contraseña" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mínimo 6 caracteres" required />
          <Button text="Registrarse" />
        </form>
        
        <div className="auth-link">
          ¿Ya tenés una cuenta? <Link to="/login" style={{ color: '#4f46e5', fontWeight: 'bold', textDecoration: 'none' }}>Iniciá sesión acá</Link>
        </div>
      </div>
    </div>
  );
}
