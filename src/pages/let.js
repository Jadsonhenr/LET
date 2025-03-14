import React from 'react';
import './Let.css';

const conteudoLet = [
  {
    type: 'texto',
    content: 'O LABORATÓRIO DE ESTUDOS TRIDIMENSIONAIS\n\n' +
      'O ensino relacionado ao desenvolvimento da percepção espacial e às formas de representação gráfica nos cursos de graduação da Escola de Engenharia (EE) da FURG encontra diversos desafios, relacionados a fatores múltiplos, dentre os quais merecem destaque as novas demandas sociais relacionadas ao crescimento da importância do design e da percepção da forma e os avanços tecnológicos, que impõem novos processos projetuais e ampliam a linha de fronteira entre as diferentes abordagens relacionadas ao espaço físico e ao imaginário digital. Por isso, é imprescindível que sejam adotadas novas ações nos estudos de representação, interpretação e produção gráfica. Assim, a longo dos anos, foram organizados no contexto do Núcleo da Arquitetura e Urbanismo e do Espaço de Expressão Gráfica, há alguns anos atrás, um esforço crítico, no intuito de agregar pesquisas e aplicações humanas específicas, que contribuam com a consolidação do Núcleo. As sucessivas transformações na área de Expressão Gráfica e as novas tendências de projetos evidenciaram a necessidade da estruturação de um novo espaço. No intuito de garantir a continuidade e evolução das atividades, foi estruturado um espaço destinado aos estudos tridimensionais, realizados na analogia e/ou digitais. Neste contexto, e em linha de acordo com as transformações metodológicas na área de estudos do campo do espaço físico e tridimensional e devido ao crescente interesse de acadêmicos e professores, desde 2024, há um estudo para instalação de um laboratório voltado ao estudo do espaço, o Laboratório de Estudos Tridimensionais (LET), associado ao Núcleo da Arquitetura e Urbanismo. Esse laboratório possibilitará um pensamento projetual e abrirá a universidade ao espaço de discussão de recursos digitais para uso da FURG, dando um caráter de desenvolvimento e internacionalização, pautado nas ações que o LET tem se especializado em contribuir.'
  },
  {
    type: 'texto',
    content: 'MISSÃO\n\nO LET tem como potencial abrir para considerar o campo de percepção espacial como um conjunto de estudos e utilização de realidade - na FURG, através do desenvolvimento de aplicações e do estudo do campo de representação gráfica.'
  },
  {
    type: 'texto',
    content: 'OBJETIVO\n\nCriar um espaço que incentive as análises de durabilidade dos equipamentos e estruturas, a diminuição da projeção de tempos e a necessidade de recursos para execução de projetos, além de oportunizar novas conexões com a comunidade acadêmica, novas tecnologias e aplicações para o desenvolvimento digital, a acessibilidade e a cooperação interdisciplinar.'
  },
  {
    type: 'imagem',
    content: '/path/to/imagem1.png' // Substitua pelo caminho real das imagens
  },
  {
    type: 'imagem',
    content: '/path/to/imagem1.png'
  },
  {
    type: 'imagem',
    content: '/path/to/imagem3.png'
  },
  {
    type: 'imagem',
    content: '/path/to/imagem4.png'
  },
  {
    type: 'imagem',
    content: '/path/to/imagem5.png'
  },
  {
    type: 'imagem',
    content: '/path/to/imagem6.png'
  }
];

const Let = () => {
  return (
    <div className="let-container">
      <h1>Laboratório de Estudos Tridimensionais</h1>
      <div className="conteudo-let">
        {conteudoLet.map((item, index) => (
          <div key={index} className={item.type}>
            {item.type === 'texto' ? (
              <p>{item.content}</p>
            ) : ( 
              <div className="imagem">
                <img src={item.content} alt={`Imagem ${index}`} />
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Let;
