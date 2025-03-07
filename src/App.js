import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import WorkEx from "./pages/WorkEx/WorkEx";


function App() {
  return (
    <>
      <Layout />
      <div className="container">
      <About />
      <Education />
      <Skills />
      <Projects />
      <WorkEx />
      <Contact />
      </div>
    </>
  );
}

export default App;
