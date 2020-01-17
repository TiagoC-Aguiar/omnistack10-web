import React, { useState } from 'react';

import Header from './Header'

import './style.css'
import './app.css'
import './sidebar.css'
import './main.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input type="text" name="github_username" id="github_username" required />

          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" />
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento</p>
            <a href="#">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento</p>
            <a href="#">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento</p>
            <a href="#">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="Diego Fernandes" />
              <div className="user-info">
                <strong>Diego Fernandes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento</p>
            <a href="#">Acessar perfil no github</a>
          </li>
          
        </ul>
      </main>
    </div>
  );
}

export default App;
