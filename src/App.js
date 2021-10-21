import "./App.css";
import PageHeader from "./components/pageHeader.js";
import ProjectHeader from "./components/ProjectHeader";
import TitleParagraph from "./components/TitleParagraph";
import Collaborators from "./components/collaborators";
import Gallery from "./components/gallery";
import main from "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <ProjectHeader />
      <TitleParagraph />
      <Collaborators />
      <Gallery />
    </div>
  );
}

export default App;
