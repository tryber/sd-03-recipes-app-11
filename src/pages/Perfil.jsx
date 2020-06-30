import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header title="Perfil" />
      <section className="Perfil">
        <h2 data-testid="profile-email">{email}</h2>
        <Link to="receitas-feitas">
          <button data-testid="profile-done-btn">Receitas Feitas</button>
        </Link>
        <Link to="/receitas-favoritas">
          <button data-testid="profile-favorite-btn">Receitas Favoritas</button>
        </Link>
        <Link to="/">
          <button
            onClick={() => localStorage.clear()}
            data-testid="profile-logout-btn"
          >
            Sair
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Perfil;
