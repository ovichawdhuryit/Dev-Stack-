import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import Stack from "./Components/Stack";
import type { Technology } from "./Types/Types";
import { useState } from "react";



function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    if (selectedTechnologies.some((item) => item.id === technology.id)) {
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);
  };

  const removeFromStack = (id: number) => {
    setSelectedTechnologies(
      selectedTechnologies.filter((item) => item.id !== id)
    );
  };

  const removeAll = () => {
    setSelectedTechnologies([]);
  };


  return (
    <>
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <List
              selectedTechnologies={selectedTechnologies}
              addToStack={addToStack}
            />
          </div>

          <Stack
            selectedTechnologies={selectedTechnologies}
            removeFromStack={removeFromStack}
            removeAll={removeAll}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;