import React, { useState } from 'react';

export default function InputField({ label, type, name, value, onChange, placeholder, required = false }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ marginBottom: '22px', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
      <label style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          padding: '14px',
          borderRadius: '6px',
          border: isFocused ? '1px solid #e50914' : '1px solid #374151', /* Borde Rojo Streaming al enfocar */
          fontSize: '16px',
          outline: 'none',
          backgroundColor: '#1f2937', /* Fondo gris oscuro */
          color: '#ffffff', /* Texto 100% visible blanco */
          transition: 'all 0.2s ease',
          boxShadow: isFocused ? '0 0 10px rgba(229, 9, 20, 0.25)' : 'none'
        }}
      />
    </div>
  );
}
