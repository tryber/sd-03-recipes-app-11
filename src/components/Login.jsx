import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmailPassword = () => {
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/;
    return password.length > 6 && re.test(email);
  };

  const setLocalStorage = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const emailStringify = JSON.stringify({ email });
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
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={!validateEmailPassword()}
        onClick={setLocalStorage}
      >Entrar</button>
    </div>
  );
}

export default Login;
