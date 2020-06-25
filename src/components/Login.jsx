import React, { useState } from 'react';

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
      <div className="Container">
        <h2 className="Title-Login">Login</h2>
      </div>
      <input
        onChange={(event) => setEmail(event.target.value)}
        data-testid="email-input"
        placeholder="Email"
        className="Input-Login"
        type="email"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        data-testid="password-input"
        placeholder="Senha"
        className="Input-Login"
        type="password"
      /><br />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={!validateEmailPassword()}
        onClick={setLocalStorage}
        className="Button-Login"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
