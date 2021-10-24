import React from "react";
import Collaborator from "./Collaborator";

const Collaborators = () => {
  const data = [
  {
    "who": "Rosario Perazolo Masjoan",
    "what": "Lisiada, cineasta y agitadora cultural"
  },
  {
    "who": "Karen Palacio",
    "what": "live coder, programadora y artista digital"
  },
  {
    "who": "Sol Avila Vazquez",
    "what": "productora audiovisual y artista visual"
  },
  {
    "who": "Yamo",
    "what": "diseñador gráfico, productor de contenido multimedia, muralista, gestor cultural, tallerista, vj y tatuador"
  },
  {
    "who": "Carolina Bottani aka Cherryla",
    "what": "diseñadora gráfica publicitaria, música experimental electrónica en formato live performance"
  },
  {
    "who": "Axel Schneeberger",
    "what": " Videógrafo, Fotógrafo y artista visual"
  },
  {
    "who": "Hanni Halliday",
    "what": "Artista audiovisual, gestora y pastelera vegana de Córdoba Capital"
  },
  {
    "who": "Victoria Falco",
    "what": "arquitecta y artista"
  },
  {
    "who": "Sergio Scotta",
    "what": "programador, diseñador, productor y artista tecnológico"
  }
]

  return (
    <div className="collaborators sides bottom-l">
      <h2 className="bottom">Participantes</h2>
      {data.map((person) => 
          <Collaborator
            who={person.who}
            what={person.what}
          />)
      }
    </div>
  );
};

export default Collaborators;
