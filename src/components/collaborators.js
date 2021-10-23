import React from "react";
import Collaborator from "./Collaborator";

const Collaborators = () => {
  return (
    <div className="collaborators sides">
      <h2 className="bottom">Participantes</h2>
      <Collaborator
        who="Rosario Perazolo Masjoan"
        what="Lisiada, cineasta y agitadora cultural"
      />
      <Collaborator
        who="Karen Palacio"
        what="live coder, programadora y artista digital"
      />
      <Collaborator
        who="Sol Avila Vazquez"
        what="productora audiovisual y artista visual"
      />
      <Collaborator
        who="Yamo"
        what="diseñador gráfico, productor de contenido multimedia, muralista, gestor cultural, tallerista, vj y tatuador"
      />
      <Collaborator
        who="Carolina Bottani aka Cherryla"
        what="diseñadora gráfica publicitaria, música experimental electrónica en formato live performance"
      />
      <Collaborator
        who="Axel Schneeberger"
        what=" Videografo, Fotografo y artista visual"
      />
      <Collaborator
        who="Hanni Halliday"
        what="Artista audiovisual, gestora y pastelera vegana de Córdoba Capital"
      />
      <Collaborator who="Victoria Falco" what="arquitecta y artistista" />
      <Collaborator
        who="Sergio Scotta"
        what="programador, diseñador, productor y artista tecnológico"
      />
    </div>
  );
};

export default Collaborators;
