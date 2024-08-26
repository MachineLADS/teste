import { useState } from 'react';

export default function App() {
// Grupo: Lucas Amoirim, Guilherme Angelo 
  const [message, setMessage] = useState('');


  const correctAnswer = 'a';

  const [mensagem, setMensagem] = useState('');

  
  const respostaCorreta = 'C';

  const [resposta, setResposta] = useState('');

  
  const respostaCor = 'Correto';

  const [retorno, setRetorno] = useState('');

  
  const alternativaCorreta = '1';

  const [respC, setrespC] = useState('');

  
  const respCorreta = '2';

  function Atualiza(event, value) {
    event.preventDefault(); 

    
    if (value === correctAnswer) {
      setMessage('Correto! A resposta é: Uma biblioteca open-source para criar interfaces de usuário com JavaScript.');
    } else {
      setMessage('Incorreto.');
    }
  }  
  function U(event, value) {
    event.preventDefault(); 
  if (value === respostaCorreta) {
    setMensagem('Correto! O correto seria: Hooks');
  } else {
    setMensagem('Incorreto.');
  }
  }
  function P(event, value) {
    event.preventDefault(); 
  if (value === respostaCor) {
    setResposta('Correto!');
  } else {
    setResposta('Incorreto.');
  }
}
function D(event, value) {
  event.preventDefault(); 
  if (value === alternativaCorreta) {
    setRetorno('Correto! A resposta é:Desenvolvimento baseado em componentes e hooks.');
  } else {
    setRetorno('Incorreto.');
  }
  
  }
  
  function A(event, value) {
    event.preventDefault(); 
    if (value === respCorreta) {
      setrespC('Correto! A resposta é: useState, useEffect, useContext.');
    } else {
      setrespC('Incorreto.');
    }
    
    }

  return (
    <div>
      <p>Nome:</p>
      <input type="text" name="name" />

      <p>Matricula:</p>
      <input type="text" name="matricula" />

      <h2>Questionàrio React</h2>

      <p>1- O que é React:</p>

      <form onSubmit={(e) => Atualiza(e, 'a')}>
        <button type="submit">a-</button> Uma biblioteca open-source para criar interfaces de usuário com JavaScript.
      </form>
      <br />
      <form onSubmit={(e) => Atualiza(e, 'b')}>
        <button type="submit">b-</button> uma função no HTML.
      </form>
      <br />
      <form onSubmit={(e) => Atualiza(e, 'c')}>
        <button type="submit">c-</button> uma ferramenta de soluções de problemas.
      </form>
      <br />
      <form onSubmit={(e) => Atualiza(e, 'd')}>
        <button type="submit">d-</button> um código em JavaScript que tem a função de mostrar o progresso do código.
      </form>
      <br />
      <form onSubmit={(e) => Atualiza(e, 'e')}>
        <button type="submit">e-</button> nenhuma das anteriores.
      </form>

      {message && <p>{message}</p>}
      <br />
      <p>2- No React os componentes são funções especiais que permitem utilizar recursos do React em componentes funcionais. A afirmativa esta:</p>
      <br />
      <form onSubmit={(e) => U(e, 'E')}>
        <button type="submit">Correto</button>
      </form>
      <br />
      <form onSubmit={(e) => U(e, 'C')}>
        <button type="submit">Errado</button> 
      </form>
      <br />

      {mensagem && <p>{mensagem}</p>}

      <p>3- A Mistura de JavaScript com XML que permite escrever HTML dentro do código JS</p>
      <br />
      <form onSubmit={(e) => P(e, 'Correto')}>
        <button type="submit">Correto</button>
      </form>
      <br />
      <form onSubmit={(e) => P(e, 'Errado')}>
        <button type="submit">Errado</button>
      </form>
      <br />

      {resposta && <p>{resposta}</p>}

      <p>4- Quais são das opções a seguir representa as características de um React?</p>

      <form onSubmit={(e) => D(e, '0')}>
        <button type="submit">a-</button> Focado na camada View do padrão HTML.
      </form>
      <br />
      <form onSubmit={(e) => D(e, '0')}>
        <button type="submit">b-</button> Só pode ser renderizado no server-side.
      </form>
      <br />
      <form onSubmit={(e) => D(e, '0')}>
        <button type="submit">c-</button> Utiliza uma abordagem neutra para construir UIs usando a sintaxe JSX.
      </form>
      <br />
      <form onSubmit={(e) => D(e, '1')}>
        <button type="submit">d-</button> Desenvolvimento baseado em componentes e hooks.
      </form>
      <br />
      <form onSubmit={(e) => D(e, '0')}>
        <button type="submit">e-</button> Todas as alternativas estão certas.
      </form>
      <br />
      {retorno && <p>{retorno}</p>}
      

      <p>5- Hooks Básicos do React?</p>

      <form onSubmit={(e) => A(e, '0')}>
        <button type="submit">a-</button> useStille, useCreat, useDelete.
      </form>
      <br />
      <form onSubmit={(e) => A(e, '2')}> 
        <button type="submit">b-</button> useState, useEffect, useContext. 
      </form>
      <br />
      <form onSubmit={(e) => A(e, '0')}>
        <button type="submit">c-</button> useUpDate, useLoad, useEffect.
      </form>
      <br />
      <form onSubmit={(e) => A(e, '0')}>
        <button type="submit">d-</button> useWeb, useAction, useValue. 
      </form>
      <br />
      <form onSubmit={(e) => A(e, '0')}>
        <button type="submit">e-</button> useValue, useCreat, useStille.
      </form>
      <br />
      {respC && <p>{respC}</p>}
      
      <br />
    
           
    </div>
  );
}