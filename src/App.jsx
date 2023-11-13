import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portofolio";
import Resume from "./components/resume";

function App() {
  return (
    <>
    <Header />
    <main id = "main">
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </main>
    <Footer />
    </>
  )
}

export default App;