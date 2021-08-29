import React from 'react'
import './provisory-component.css'

const ProvisoryComponent = () => (
  <div className="home">
    <h2 className="title">Lucas Ruy</h2>
    <h1 className="title title--sub">Desenvolvedor Front-end</h1>
    <p className="paragraph">
        <span className="text-item text-item--1">Olá, seja muito bem-vindo!</span>
        <span className="text-item text-item--1">
          Me chamo Lucas, tenho 27 anos e sou formado em Análise e Desenvolimento de Sistemas pela Universidade Anhembi Morumbi. 
          Trabalho como desenvolvedor fron-end desde 2015, sempre atuei em projetos de grandes responsabilidades e com clientes de médio ou grande porte. 
        </span>
        <span className="text-item text-item--1">
            Ao longo dessa minha trajetória na área de tecnologia eu tive a oportunidade de participar de ótimos projetos e adquirir muitos conhecimentos em 
            tecnologias que despertaram ainda mais meu interesse em trabalhar com Javascript.
            Atualmente sou desenvolvedor front-end na PagSeguro PagBank e atuo com tecnologias como: React, NextJS, Jest e NodeJS com Express. 
        </span>
        <span className="text-item text-item--1">
            Abaixo deixo alguns links com mais informações sobre mim. Caso queira saber um pouco mais, não deixe de enviar uma mensagem!
        </span>
        <span className="text-item text-item--2 text-item--strong text-item--upper text-item--white">Contatos</span>
        <ul className="contacts-list">
            <li className="contacts-list contacts-list--item">
              <a className="item-link" href="https://github.com/LucasRuy" target="_blank">
                <span className="item-link item-link--title">GitHub</span>
                <span className="item-link item-link--sub">Projetos pessoais</span>
              </a>
            </li>
            <li className="contacts-list contacts-list--item">
              <a className="item-link" href="https://www.linkedin.com/in/lucasruy/" target="_blank">
                <span className="item-link item-link--title">Linkedin</span>
                <span className="item-link item-link--sub">Experiência de trabalho</span>
              </a>
            </li>
            <li className="contacts-list contacts-list--item contacts-list--email">
              <a className="item-link" href="mailto:lucasplet@gmail.com">
                <span className="item-link item-link--title">E-mail</span>
                <span className="item-link item-link--sub">lucasplet@gmail.com</span>
              </a>
            </li>
        </ul>
    </p>
  </div>
)

export default ProvisoryComponent
