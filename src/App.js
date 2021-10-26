import main from "./styles/main.scss";
import PageHeader from "./components/pageHeader.js";
import ProjectHeader from "./components/projectHeader";
import TitleParagraph from "./components/TitleParagraph";
import Collaborators from "./components/collaborators.js";
import Gal from "./components/gallery.js";
import Wave from "./components/backgroundWave.js";
import Documentation from "./components/documentation.js";
import { renderToStaticMarkup } from 'react-dom/server';

function App() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<Wave/>));
  return (
    <div className="App">
      <h1
      style={{
          backgroundImage: `url("data:image/svg+xml,${svgString}")`
        }}
      >
      </h1>
      <PageHeader />
      <ProjectHeader />
      <TitleParagraph />
      <Collaborators />
      <Gal />
      <Documentation />
    </div>
  );
}

export default App;
