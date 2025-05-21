export default function Header() {

    return <>
        <header className="site-header py-4 border-bottom">
            <div className="container d-flex justify-content-between align-items-center">

                {/* Logo */}
                <div className="brand d-flex align-items-start">
                    <span className="brand-name">NextFirstSteps</span>
                    <img
                        src="/logo.svg"
                        alt="Company Logo"
                        className="brand-icon"
                    />
                </div>

                {/* Navigation */}
                <nav className="main-nav d-none d-md-flex">
                    <a href="#">Services</a>
                    <a href="#">For Employers</a>
                    <a href="#">For Students</a>
                </nav>

                {/* CTA Button */}
                <a href="#" className="btn btn-primary">
                    Get Started
                </a>
            </div>
        </header>
    </>

}