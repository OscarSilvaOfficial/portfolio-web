import React from 'react'

class Menu extends React.Component{
    render() {
        return(
            <>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src="/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"></img>
                        <h1 className="text-light"><a href="index.html">Oscar da Silva</a></h1>
                        <div className="social-links mt-3 text-center">
                        <a href="https://www.linkedin.com/in/dasilvaoscar" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        <a href="https://github.com/OscarSilvaOfficial" className="git"><i className="bx bxl-github"></i></a>

                        </div>
                    </div>

                    <nav className="nav-menu">
                        <ul>
                        <li className="active"><a href="index.html"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about"><i className="bx bx-user"></i> <span>Sobre</span></a></li>
                        <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Carreira</span></a></li>
                        <li><a href="#skills"><i className="bx bx-message-check"></i> <span>Skills</span></a></li>
                        <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
                        <li><a href="#contact"><i className="bx bx-envelope"></i> Contato</a></li>

                        </ul>
                    </nav>
                    <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
                </div>
            </header>
            </>
        )
    }
}

export default Menu