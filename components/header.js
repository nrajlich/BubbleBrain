import Iconb from '../components/iconb'
import Script from 'next/script'

export default function Header(){
    return <>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
            crossorigin="anonymous" />
    <nav className="navbar navbar-expand-lg bg-transparent border-bottom shadow">
    <div className="container">
        <Iconb></Iconb>
 <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header border-bottom shadow">
               <Iconb></Iconb>
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
</>
}