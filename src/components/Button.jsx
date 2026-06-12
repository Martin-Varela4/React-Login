import React from 'react';

export default function Button({ text, type = 'submit' }) {
  return (
    <button
      type={type}
      style={{
        width: '100%',
        padding: '15px',
        backgroundColor: '#e50914', /* Rojo característico de streaming */
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: '700',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'all 0.2s ease',
        letterSpacing: '0.5px'
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = '#f6121d';
        e.target.style.boxShadow = '0 0 15px rgba(229, 9, 20, 0.4)';
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#e50914';
        e.target.style.boxShadow = 'none';
      }}
    >
      {text}
    </button>
  );
}
