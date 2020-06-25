import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <input
        data-testid="email-input"
        placeholder="Email"
      />
      <input
        data-testid="password-input"
        placeholder="Senha"
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
      >Entrar</button>
    </div>
  );
}

export default Login;
