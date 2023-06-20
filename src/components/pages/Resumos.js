import React from 'react';
import Navbar from '../views/Navbar';
import './Resumos.css';

const Resumos = () => {
    return (
        <div>
            <Navbar />
                <ul className="list-group">
                    <li className="list-group-item"><a href="link1">Português</a></li>
                    <li className="list-group-item"><a href="link2">Direito Penal</a></li>
                    <li className="list-group-item"><a href="link3">Direito Processual Penal</a></li>
                    <li className="list-group-item"><a href="link4">Direito Processual Civil</a></li>
                    <li className="list-group-item"><a href="link5">Direito Constitucional</a></li>
                    <li className="list-group-item"><a href="link6">Direito Administrativo</a></li>
                    <li className="list-group-item"><a href="link7">Normas da Corregedoria do TJSP</a></li>
                    <li className="list-group-item"><a href="link8">Atualidades</a></li>
                    <li className="list-group-item"><a href="link9">Matemática</a></li>
                    <li className="list-group-item"><a href="link10">Informática</a></li>
                    <li className="list-group-item"><a href="link11">Raciocínio Lógico</a></li>
                </ul>
         
        </div>
    );
}

export default Resumos;