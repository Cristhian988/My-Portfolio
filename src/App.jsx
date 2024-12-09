import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Stacks from "./components/Stacks/Stacks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stacks />
    </>
  );
}

export default App;
