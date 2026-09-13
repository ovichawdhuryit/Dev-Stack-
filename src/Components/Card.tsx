import type { Technology } from "../Types/Types";

interface CardProps {
    technology: Technology;
    selectedTechnologies: Technology[];
    addToStack: (technology: Technology) => void;
}

export default function Card({
    technology,
    selectedTechnologies,
    addToStack,
}: CardProps) {
    const isAdded = selectedTechnologies.some(
        (item) => item.id === technology.id
    );

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="size-12 object-contain"
                    />

                    <span className="badge badge-xs badge-warning">
                        {technology.badge}
                    </span>
                </div>

                <h2 className="text-xl font-bold">
                    {technology.name}
                </h2>

                <p className="text-sm text-base-content/60">
                    {technology.description}
                </p>

                <div className="flex items-center gap-2">
                    <span className="badge badge-sm badge-ghost">
                        {technology.category}
                    </span>

                    <span className="text-xs text-base-content/60">
                        {technology.difficulty}
                    </span>
                </div>

                <div className="mt-2 text-sm">
                    <span className="text-warning">★</span>
                    <span className="ml-1">
                        {technology.rating}
                    </span>
                </div>

                <div className="mt-4">
                    <button
                        className="btn btn-primary btn-block"
                        disabled={isAdded}
                        onClick={() => addToStack(technology)}
                    >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                </div>
            </div>
        </div>
    );
}