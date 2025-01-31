import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Stacks from "./components/Stacks/Stacks";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Hero />
        </section>
        <section id="sobre-mi">
          <About />
        </section>
        <section>
          <Stacks />
        </section>
        <section id="experiencia">
          <Experience />
        </section>
        <section id="proyectos">
          <Projects />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
