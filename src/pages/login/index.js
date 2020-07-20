import React, { useState } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';

import 'firebase/auth';

import './styles.css';

function Login (){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();


    const logar = (e) =>{
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado =>{
        setMsgTipo('sucesso')
    }).catch( erro =>{
        setMsgTipo('erro')
    })
   }

    return (
        <div className="wrapper">
            <div className="Login-banner">
                <img height="100%" width="100%" src={require('../../assets/banner.png')} alt="banner-mulheres" />
            </div>
            <div className="Login-container">
                <form className="Login-form">
                    <div className="Login-inputs">
                        <input
                            className="Login-input"
                            placeholder="Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className="Login-input"
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>
                    <div className="Login-container-button">
                        <button onClick={logar} type="submit">Entrar</button>
                    </div>
                    <div className="Container-link">
                        <Link className="link-login" to="/usuarioNovo">Cadastrar novo usuário</Link>
                    </div>
                </form>
                <div className="saudacoes">
                    {msgTipo === 'sucesso' && <strong>Você está conectado!</strong>}
                    {msgTipo === 'erro' && <strong>Verifique se a senha ou usuário estão corretos!</strong>}
                </div>
            </div>
        </div>
    );
};

export default Login;