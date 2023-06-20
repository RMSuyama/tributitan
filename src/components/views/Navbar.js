import React from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {

  function handleLogout() {
    firebase.auth().signOut().then(() => {
        console.log("deslogado")
      // Logout bem-sucedido
      // Redirecionar para a página de login ou qualquer outra página desejada
    }).catch((error) => {
        console.log("erro")
      // Ocorreu um erro durante o logout
      console.log(error);
    });
  }
  


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="./home">- SPRT -</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/edital" style={{ color: 'black', textDecoration: 'none' }}>Análise Tributária</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rotina" style={{ color: 'black', textDecoration: 'none' }}>Teses Jurídicas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resumos" style={{ color: 'black', textDecoration: 'none' }}>Modelos</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Planejamento de Estudo</a></li>
                <li><a className="dropdown-item" href="#">Estatísticas e Relatórios</a></li>
                <li><a className="dropdown-item" href="#">Atualizações Legais</a></li>
                <li><a className="dropdown-item" href="#">Página de Ajuda/FAQ</a></li>
                <li><a className="dropdown-item" href="#">Página do Perfil</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="nav-link" to="/" onClick={handleLogout} style={{ color: 'black', textDecoration: 'none' }}>Log-out</Link>
      </div>          
    </nav>
  );
};

export default Navbar;
