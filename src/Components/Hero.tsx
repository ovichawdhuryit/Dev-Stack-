export default function Hero() {
    return (
        <section className="flex bg-white justify-between items-center py-6 px-9 max-w-9xl mx-auto ml-59 mr-9.5">
            <div className="items-center "  >
                <h1 className="font-bold text-5xl max-w-2xl ">
                    Build Your Ideal  <br />
                    <span className="text-5xl bg-[linear-gradient(to_right,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>
                <p className="py-2 max-w-2xl">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>

                <div className=" gap-2 py-3 flex">
                    <button className="font-white boarder-8 px-2.5 py-2 rounded-xl bg-[linear-gradient(to_right,#FF5722_0%,#D81B7E_50%)]">
                        Explore Technologies
                    </button>
                    <button className="rounded-xl border px-2.5 py-2 ">
                        Learn More
                    </button>
                </div>

            </div>
            <div>
                <img src="/banner-stack.png" alt="banner stack" />
            </div>




        </section>
    )
}