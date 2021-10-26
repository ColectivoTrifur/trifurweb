import React from "react";
import Collaborator from "./Collaborator";

const Collaborators = () => {
  const data = [
  {
    "who": "Rosario Perazolo Masjoan",
    "what": "Lisiada, cineasta y agitadora cultural",
    "src": "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    "fullBio": "Karen Palacio es una live coder, programadora y artista digital de Córdoba Capital. Es diplomada en Ciencias de Datos del FaMAFyC, estudia la Lic en Ciencias de la Computación en el FaMAFyC y trabaja como A.I. Software Architect en una empresa de Software de Córdoba Capital. Como live coder de visuales ha hecho performances de improvisación de código en encuentros de noise, conferencias de tecnología, museos, y fiestas electrónicas -entre otros lugares- llegando a programar hasta 5 horas seguidas en vivo.\nSu trabajo está centrado en una visión feminista de la tecnología, pensando el lugar de las mujeres como pioneras en la experiencia encarnada de lo digital, lo algorítmico y lo computacional. En sus procesos artísticos se relaciona con y desarrolla Software Libre, y resemantiza tecnologías que conoce de su trayectoria laboral como programadora en la industria del Software."
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
            src={person.src}
            fullBio={person.fullBio}
          />)
      }
    </div>
  );
};

export default Collaborators;
