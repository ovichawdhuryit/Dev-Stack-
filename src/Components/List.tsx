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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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