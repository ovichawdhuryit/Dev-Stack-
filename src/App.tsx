import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import Stack from "./Components/Stack";


function App() {
  return (
    <>
      <Navbar />


      <Hero />
      <Card />
      <main>
        <List />
        <Stack />
      </main>
      <Footer />

    </>
  )
}

export default App