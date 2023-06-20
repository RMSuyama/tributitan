import React from 'react';
import './esquemaestudos.css'

const StudySchedule = () => {
  return (
    <div className="container">
      <h2>Rotina de Estudos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Período</th>
            <th>Horário</th>
            <th>Matéria</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manhã</td>
            <td>08:00 - 09:00</td>
            <td>Matemática</td>
            <td>
              Dedique-se aos tópicos mais importantes e complexos de matemática, de acordo com o cronograma que foi sugerido anteriormente.
              Resolva exercícios práticos para reforçar o aprendizado.
            </td>
          </tr>
          <tr>
            <td>Manhã</td>
            <td>09:00 - 10:00</td>
            <td>Raciocínio Lógico</td>
            <td>
              Foque nos conceitos-chave, como tabela verdade e raciocínio dedutivo.
              Resolva problemas e questões relacionadas a esses tópicos.
            </td>
          </tr>
          <tr>
            <td>Manhã</td>
            <td>10:00 - 11:00</td>
            <td>Língua Portuguesa</td>
            <td>
              Estude os aspectos mais complexos da língua portuguesa, como estruturação do texto, recursos de coesão e interpretação de textos literários e não literários.
              Faça exercícios de interpretação de texto e prática de gramática.
            </td>
          </tr>
          <tr>
            <td>Tarde</td>
            <td>13:00 - 14:00</td>
            <td>Constitucional, Administrativo e Processo Civil</td>
            <td>
              Estude os pontos-chave dessas disciplinas, conforme o cronograma anterior.
              Faça anotações e revise os principais conceitos.
            </td>
          </tr>
          <tr>
            <td>Tarde</td>
            <td>14:00 - 15:00</td>
            <td>Revisão geral</td>
            <td>
              Revise os tópicos estudados anteriormente em matemática, raciocínio lógico, língua portuguesa e disciplinas jurídicas.
              Faça exercícios de revisão para fixar o conteúdo.
            </td>
          </tr>
          <tr>
            <td>Tarde</td>
            <td>15:00 - 16:00</td>
            <td>Simulados e resolução de questões anteriores</td>
            <td>
              Faça simulados para praticar seu desempenho em tempo real.
              Resolva questões de provas anteriores para se familiarizar com o formato da prova e identificar suas áreas de melhoria.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudySchedule;
