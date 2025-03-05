// Login.js
import React, { useState } from 'react';
import './auth.css';

const Login = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage]   = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // para enviar cookies de sessão
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if(response.ok) {
        setMessage('Login realizado com sucesso!');
        // Aqui você pode redirecionar ou atualizar o estado global
      } else {
        setMessage(data.message || 'Erro no login');
      }
    } catch (error) {
      setMessage('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Entrar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
