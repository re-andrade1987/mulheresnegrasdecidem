import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

import '../login/styles.css';

function UsuarioNovo() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [loading, setLoading] = useState();


    function cadastrar() {
        setMsgTipo(null);
        setLoading(1);
        if (!email || !senha) {
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro!')
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setLoading(0);
            setMsgTipo('sucesso')
        }).catch(erro => {
            setLoading(0);
            setMsgTipo('erro')
            switch (erro.message)
            {
                case 'Password should be at least 6 characteres!':
                    setMsg('A senha deve ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account!':
                    setMsg('Este email já está sendo usado por outro usuário!');
                    break;
                case 'The email address is badly formatted!':
                    setMsg('O formato do seu email é inválido!');
                    break;
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde');
                    break;
            }
        })
    }


    return (
        <div className="wrapper">
            <div className="Login-banner">
                <h1>Cadastro</h1>
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
                    {loading ?
                     <div class="spinner-border text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                        :
                    <div className="Login-container-button">
                        <button onClick={cadastrar} type="submit">Cadastrar</button>
                    </div>
                    }
                </form>
                <div className="saudacoes">
                    {msgTipo === 'sucesso' && <strong>Usuário cadastrado com sucesso!</strong>}
                {msgTipo === 'erro' && <strong>{msg}</strong>}
                </div>
            </div>
        </div>
    );
};

export default UsuarioNovo;