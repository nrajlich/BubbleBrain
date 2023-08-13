import Script from 'next/script'

export default function () {
    return <>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
            crossorigin="anonymous" />

        <nav className="navbar navbar-expand-lg bg-transparent border-bottom shadow">
            <div className="container">
                <a className="navbar-brand fs-4" href="#">
                    <img src="images/blogo.png" alt="Logo"
                        style={{ height: '30px', width: 'auto', position: 'relative', top: '-4px', marginLeft: '20px', marginRight: '2px' }} />ubble
                    Brain
                </a>

                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">

                    <div className="offcanvas-header border-bottom shadow">
                        <a className="navbar-brand fs-4" href="#">
                            <img src="images/blogo.png" alt="Logo"
                                style={{ height: '30px', width: 'auto', marginRight: '3px', position: 'relative', top: '-4px' }} />ubble
                            Brain
                        </a>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                        <ul
                            className="navbar-nav custom-navbar justify-content-center align-items-center fs-5 flex-grow-1 pe-3">

                            <li className="nav-item mx-2">

                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#courses">Courses</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#mylearning">My Learning</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#instructor">Instructor</a>

                            </li>

                        </ul>


                        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                            <a href="#login" className="text-black">Login</a>
                            <a href="#signup" className="text-white text-decoration-none px-3 py-1 rounded-4"
                                style={{ backgroundColor: 'rgb(237, 127, 187)' }}>Sign Up</a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
        <div className="landing">


            <div className="intro-container">
                <h1>Welcome to Bubble Brain!</h1>
                <div className="welcome-text">
                    <p className="welcome"> A digital space that provides free access to knowledge and skill-building
                        resources in graphic design, visual aesthetics, and web design.</p></div>
                <div className="button-container">
                    <button className="button1">Get Started</button>
                    <button className="button2">I already have an account</button>
                </div>

            </div>

            <div className="image-container">
                <img src="images/bubble3.png" alt="bubble brain" />
            </div>


        </div>



        <div className="landing2">
            <div className="image-container2">
                <img src="images/graphic-design.png" />
            </div>
            <div className="graphic-container">
                <h2>Unleash Your Creativity</h2>
                <div className="graphic-text">
                    <p className="graphic">
                        <span className="non-mobile">Whether you're a seasoned designer or just getting started, learn design
                            elements from fun tutorials and brush up your skills. Let's transform ideas into compelling visuals together!</span>
                        <span className="mobile">Whether you are a designer or just getting started, let's transform ideas into compelling visual together!</span>
                    </p>
                </div>
            </div>
        </div>


        <div className="landing3">

            <div className="web-container">
                <h3>Design. Develop. Deliver.</h3>
                <div className="web-text">
                    <p className="web">
                        <span className="non-mobile"> Web design is more than building websites—it's crafting experiences.
                            Discover insightful resources on UX/UI design and coding tutorials.
                            Together we will create functional, aesthetic, and user-friendly websites.</span>
                        <span className="mobile"> Web design is more than building websites, it's crafting experiences.
                            Together we will create functional, aesthetic, and user-friendly websites.</span>
                    </p>

                </div>
            </div>

            <div className="image-container3">
                    <img src="images/web-design.png" />
                </div>


        </div>


        <div className="landing4">
            <div className="image-container4">
                <img src="images/hand.png" />
            </div>
            <div className="visual-container">
                <h4>Essential Aesthetics</h4>
                <div className="visual-text">
                    <p className="visual">
                        <span className="non-mobile">Optimize your design workflow and expand your knowledge about
                            color harmonies, grid layouts,and typographical hierarchy.
                            A fun blend of art, design, and efficiency awaits. </span>
                        <span className="mobile">Optimize your design workflow and expand your knowledge. A fun blend of art, design, and efficiency awaits!</span>
                    </p>
                </div>
            </div>
        </div>

        <footer className="footer">
            <div className="footerimg">
                <img src="images/bubble4.png" /></div>
            <div className="footer-content">

                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                    <li><a href="#terms">Terms and Conditions</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#instructor">Instructor</a></li>
                </ul>
            </div>
            <div className="rights">All rights reserved © 2023 Nayama Rajlich</div>
        </footer>
    </>
}