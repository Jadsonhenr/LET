import React from 'react';
import './PrimeiroCaderno.css';

const conteudoPrimeiroCaderno = [
  {
    type: 'texto',
    content: 'O Primeiro Caderno é uma iniciativa inovadora que visa aprimorar o aprendizado de nossos alunos, proporcionando um conteúdo interativo e dinâmico.'
  },
  {
    type: 'imagem',
    content: '/path/to/primeira-imagem.jpg' // Substitua pelo caminho real da imagem
  },
  {
    type: 'texto',
    content: 'Além do aprendizado teórico, o Primeiro Caderno oferece atividades práticas que incentivam o desenvolvimento de habilidades essenciais para o mercado de trabalho.'
  },
  {
    type: 'imagem',
    content: '/path/to/segunda-imagem.jpg' // Substitua pelo caminho real da imagem
  },
  {
    type: 'texto',
    content: 'Com uma abordagem multidisciplinar, o projeto busca conectar o conteúdo acadêmico com o mundo real, preparando os alunos para desafios futuros.'
  },
];

const PrimeiroCaderno = () => {
  return (
    <div className="primeiro-caderno-container">
      <h1>Primeiro Caderno</h1>
      <div className="conteudo-primeiro-caderno">
        {conteudoPrimeiroCaderno.map((item, index) => (
          <div key={index} className={item.type}>
            {item.type === 'texto' ? (
              <p>{item.content}</p>
            ) : (
              <img src={item.content} alt={`Imagem ${index}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimeiroCaderno;
