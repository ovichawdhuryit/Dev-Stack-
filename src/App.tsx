import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import Stack from "./Components/Stack";
import type { Technology } from "./Types/Types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

    const addToStack = (technology: Technology) => {
        if (selectedTechnologies.some((item) => item.id === technology.id)) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setSelectedTechnologies([...selectedTechnologies, technology]);
        toast.success(`${technology.name} added to your stack!`);
    };

    const removeFromStack = (id: number) => {
        const technology = selectedTechnologies.find(
            (item) => item.id === id
        );

        setSelectedTechnologies(
            selectedTechnologies.filter((item) => item.id !== id)
        );

        if (technology) {
            toast.info(`${technology.name} removed from your stack!`);
        }
    };

    const removeAll = () => {
        setSelectedTechnologies([]);
        toast.info("All technologies removed from your stack!");
    };

    return (
        <>
            <Navbar />
            <Hero />

            <main className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-4">
                    <div className="min-w-0 lg:col-span-3">
                        <List
                            selectedTechnologies={selectedTechnologies}
                            addToStack={addToStack}
                        />
                    </div>

                    <div className="lg:mt-[79px]">
                        <Stack
                            selectedTechnologies={selectedTechnologies}
                            removeFromStack={removeFromStack}
                            removeAll={removeAll}
                        />
                    </div>
                </div>
            </main>

            <ToastContainer />

            <Footer />
        </>
    );
}

export default App;