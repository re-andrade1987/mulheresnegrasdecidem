import React, { useState } from 'react';
import '../index.css';
import api from '../services/api';


const Form = () => {
  const [formPost, setFormPost] = useState({ title: '', body: '' });

  const handleChange = (event) => {
    setFormPost({[event.target.name]: event.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await api.post('posts', formPost)
    console.log(response)
  }

  return (
    <div className="App">
      <h1>Escrever Posts</h1>
      <form className="form" onSubmit={handleSubmit}  >
        <input
          type="text"
          name="title"
          placeholder="Escreva o titulo"
          value={formPost.title} onChange={handleChange} required
        />
        <input
          type="text"
          name="body"
          placeholder=" Escreva sua mensagem"
          value={formPost.body} onChange={handleChange} required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


export default Form;