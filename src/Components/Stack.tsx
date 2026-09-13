import type { Technology } from "../Types/Types";

interface StackProps {
    selectedTechnologies: Technology[];
    removeFromStack: (id: number) => void;
    removeAll: () => void;
}

export default function Stack({
    selectedTechnologies,
    removeFromStack,
    removeAll,
}: StackProps) {
    return (
        <aside className="card h-fit border border-base-200 bg-base-100 shadow-sm">
            <div className="card-body p-4">
                <h2 className="card-title text-base">
                    Your Stack
                </h2>

                <p className="text-xs text-base-content/50">
                    {selectedTechnologies.length} Technology Selected
                </p>

                {selectedTechnologies.length === 0 ? (
                    <div className="py-8 text-center text-sm text-base-content/50">
                        Your stack is empty.
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {selectedTechnologies.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-2">
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="size-8 object-contain"
                                    />

                                    <div>
                                        <p className="text-sm font-medium">
                                            {technology.name}
                                        </p>

                                        <p className="text-xs text-base-content/50">
                                            {technology.category}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    className="btn btn-ghost btn-xs"
                                    onClick={() =>
                                        removeFromStack(technology.id)
                                    }
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    className="btn btn-outline btn-error btn-sm mt-4 w-full"
                    onClick={removeAll}
                    disabled={selectedTechnologies.length === 0}
                >
                    Remove All
                </button>
            </div>
        </aside>
    );
}