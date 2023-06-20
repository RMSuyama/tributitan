import React from "react";
import jsPDF from "jspdf";

const GeradorProc = () => {
  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Definir a formatação do texto
    const font = "spectral";
    const fontSize = 12;
    const lineHeight = 1.25;
    const titleFontSize = 16;

    // Definir o conteúdo do documento
    const title = "AD JUDICIA ET EXTRA";
    const text = `Por este instrumento particular de procuração e na melhor forma de direito, comparece como outorgante o Srº. MARCO AURELIO DA SILVA FARIAS, brasileiro, solteiro, nascido em 25/10/1988, portador do RG nº 416687453– SSP/SP e do CPF nº 432.388.628-47, residente e domiciliado na cidade de Registro/SP, na Rua Limeira, nº 296, Jardim São Paulo, CEP: 11900-000, para nomear e constituir como seus procurador, RAFAEL MOREIRA SUYAMA, brasileiro, advogado, inscrito na OAB/SP sob o nº. 484.261, portador do RG nº. 50.078.611-2 – SSP/SP, e inscrito no CPF sob o nº. 455.787.608-05, ambos com escritório na Rua Celso Xavier, 590 – Sala 02, nesta cidade de Registro/SP, podendo ditos procuradores, como se eu presente estivesse, transigir, desistir, receber citação, dar quitação, substabelecer, prestar declarações, assumir compromissos, recorrer de despachos e sentenças, fazer acordos, enfim, praticarem todos os atos necessários para o fiel e cabal desempenho do presente mandato, em conformidade com o artigo 105 no Código de Processo Civil.

Registro/SP, 20 de dezembro de 2022.

MARCO AURELIO DA SILVA FARIAS`;

    // Definir a posição inicial do texto
    const margin = 10;
    let y = margin;

    // Centralizar o título
    const titleWidth = doc.getTextWidth(title);
    const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
    doc.setFont(font, "bold");
    doc.setFontSize(titleFontSize);
    doc.text(title, titleX, y);
    y += titleFontSize + margin;

    // Definir o estilo do texto
    doc.setFont(font);
    doc.setFontSize(fontSize);
    doc.setTextColor(0, 0, 0);

    // Definir o espaçamento de linha
    const lineSpacing = fontSize * lineHeight;

    // Quebrar o texto em parágrafos
    const paragraphs = text.split("\n");

    // Escrever os parágrafos no PDF
    paragraphs.forEach((paragraph) => {
      doc.text(paragraph, margin, y, { align: "justify" });
      y += lineSpacing;
    });

    doc.save("procuracao.pdf");
  };

  return (
    <div id="pdf" className="container">
      <button className="btn btn-primary" onClick={generatePDF}>
        Gerar PDF
      </button>
    </div>
  );
};

export default GeradorProc;
