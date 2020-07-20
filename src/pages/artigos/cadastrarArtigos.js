import React, { useState } from 'react';
import MainTitle from '../../components/layoutPieces/mainTitle';
import './styles.css';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';

import 'firebase/auth';

function CadastrarArtigos() {
    const [msgTipo, setMsgTipo] = useState();


    return (
        <section className="section-artigos">
            <MainTitle value="Cadastrar Artigos" />
            <div className="">
                <p>Upload de foto:</p>
                <input type="file"></input>
            </div>
            <div className="saudacoes">
                {msgTipo === 'sucesso' && <strong>Você está conectado!</strong>}
                {msgTipo === 'erro' && <strong>Verifique se a senha ou usuário estão corretos!</strong>}
            </div>
        </section>
    );
}

export default CadastrarArtigos