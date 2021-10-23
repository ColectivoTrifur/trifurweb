import main from "./styles/main.scss";
import PageHeader from "./components/PageHeader.js";
import ProjectHeader from "./components/ProjectHeader";
import TitleParagraph from "./components/TitleParagraph";
import Collaborators from "./components/Collaborators";
import Gallery from "./components/Gallery";
import Documentation from "./components/Documentation";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <ProjectHeader />
      <TitleParagraph />
      <Collaborators />
      <Gallery />
      <Documentation />
    </div>
  );
}

export default App;
