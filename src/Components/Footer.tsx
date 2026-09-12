export default function Footer() {
    return (
        <footer>
            <div className="flex justify-between ">
                <div>
                    <img src="/assets/logo-text.png" alt="footer logo" />

                    <p className="py-1.5">Curated tools, technologies, and resources for developers building <br /> modern software.</p>

                    <ul className="flex gap-2.75">
                        <li> GitHub</li>
                        <li> Twitter </li>
                        <li> LinkedIn</li>
                    </ul>
                </div>

                <div>
                    <h3>PRODUCT</h3>
                    <ul className="py-1.5">
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                </div>

                <div>
                    <h3>COMPANY</h3>
                    <ul className="py-1.5">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Career</li>
                    </ul>
                </div>

                <div>
                    <h3>LEGAL</h3>
                    <ul className="py-1.5">
                        <li> Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}