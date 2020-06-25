import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmailPassword = () => (
    password.length > 6 && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/.test(email)
  );

  const setLocalStorage = () => {
    const emailStringify = JSON.stringify({ email });
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', emailStringify);
  };


  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={(event) => setEmail(event.target.value)}
        data-testid="email-input"
        placeholder="Email"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        data-testid="password-input"
        placeholder="Senha"
      />
      <Link to="/comidas">
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={!validateEmailPassword()}
          onClick={setLocalStorage}
        >Entrar</button>
      </Link>
    </div>
  );
}

export default Login;
