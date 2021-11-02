import main from "./styles/main.scss";
import PageHeader from "./components/pageHeader.js";
import ProjectHeader from "./components/projectHeader";
import TitleParagraph from "./components/TitleParagraph";
import Collaborators from "./components/collaborators.js";
import Gal from "./components/gallery.js";
import Wave from "./components/backgroundWave.js";
import BackgroundCircles from "./components/backgroundCircles.js";
import Documentation from "./components/documentation.js";
import { renderToStaticMarkup } from 'react-dom/server';

function App() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<Wave/>));
    const svgString2 = encodeURIComponent(renderToStaticMarkup(<BackgroundCircles/>));
  return (
    <div className="App grid">
      <PageHeader />
      <ProjectHeader />
      <TitleParagraph />
      <Collaborators />
      <Gal />
      <div 
      style={{
          backgroundImage: `url("data:image/svg+xml,${svgString2}")`
        }}
      >
      </div>
    </div>
  );
}

export default App;
