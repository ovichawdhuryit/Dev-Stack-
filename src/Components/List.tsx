import { useEffect, useState } from "react";
import Card from "./Card";
import type { Technology } from "../Types/Types";

interface ListProps {
    selectedTechnologies: Technology[];
    addToStack: (technology: Technology) => void;
}

export default function List({
    selectedTechnologies,
    addToStack,
}: ListProps) {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/card.json")
            .then((response) => response.json())
            .then((data: Technology[]) => {
                setTechnologies(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading technologies...</p>;
    }

    return (
        <section>
            <div className="mb-6">
                <h2 className="text-2xl font-bold">
                    Explore the{" "}
                    <span className="text-pink-500">Technologies</span>
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {technologies.map((technology) => (
                    <Card
                        key={technology.id}
                        technology={technology}
                        selectedTechnologies={selectedTechnologies}
                        addToStack={addToStack}
                    />
                ))}
            </div>
        </section>
    );
}