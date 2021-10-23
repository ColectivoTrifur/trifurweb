import "./App.css";
import PageHeader from "./components/PageHeader.js";
import ProjectHeader from "./components/ProjectHeader";
import TitleParagraph from "./components/TitleParagraph";
import Collaborators from "./components/Collaborators";
import Gallery from "./components/Gallery";
import { ReactComponent as Circle } from "./components/circle.svg";
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
