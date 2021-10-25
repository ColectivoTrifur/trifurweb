import main from "./styles/main.scss";
import PageHeader from "./components/pageHeader.js";
import ProjectHeader from "./components/projectHeader";
import TitleParagraph from "./components/TitleParagraph";
import Collaborators from "./components/collaborators.js";
import Gal from "./components/gallery.js";
import Documentation from "./components/documentation.js";

function App() {
  return (
    <div className="App">
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
