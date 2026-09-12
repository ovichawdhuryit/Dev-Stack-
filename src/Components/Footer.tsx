export default function Footer() {
    return (
        <footer className="border-t border-gray-200 px-6 py-12">
            <div className="mx-auto max-w-7xl flex  justify-between ">
                <div>
                    <img src="/assets/logo-text.png" alt="footer logo" />

                    <p className=" my-2.5 text-sm text-gray-600">Curated tools, technologies, and resources for developers building <br /> modern software.</p>

                    <ul className="flex gap-2.75 my-6">
                        <a href="">GitHub</a>
                        <a href="">Twitter</a>
                        <a href="">LinkedIn</a>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-semibold">PRODUCT</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-semibold">COMPANY</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Career</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-semibold">LEGAL</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li> Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-7xl border-t border-gray-200 pt-6">
                <div className="flex justify-between text-sm text-gray-500">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}