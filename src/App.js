import "./App.css";
import PageHeader from "./components/pageHeader.js";
import ProjectHeader from "./components/projectHeader";
import Description from "./components/description";
import Collaborators from "./components/collaborators";
import Gallery from "./components/gallery";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <ProjectHeader />
      <Description />
      <Collaborators />
      <Gallery />
    </div>
  );
}

export default App;
