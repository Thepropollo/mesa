import React, { useState } from 'react';
import useDynamicCSS from './useDynamicCSS';


const AsaderoPage = () => {
    useDynamicCSS('../css/asatilo.css');
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            src: "../recursos/BChr5mKi9byKZVn7sN7m.jpg",
            alt: "Carne Asada",
            caption: "Carne Asada"
        },
        {
            src: "../recursos/Costillas-de-cerdo-a-la-BBQ.jpg",
            alt: "Costillas BBQ",
            caption: "Costillas BBQ"
        },
        {
            src: "../recursos/chorizo-asado_1000x.jpg",
            alt: "Chorizo Parrillero",
            caption: "Chorizo Parrillero"
        },
        {
            src: "../recursos/Pollo-a-al-abrasa.jpg",
            alt: "Pollo a la Brasa",
            caption: "Pollo a la Brasa"
        }
    ];

    const showSlide = (index) => {
        if (index < 0) {
            setCurrentIndex(items.length - 1);
        } else if (index >= items.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(index);
        }
    };

    return (
        <Container>
            <Nav>
                <NavContent>
                    <div className="nav-logo">
                        <img src="../recursos/logotablitaeltartaro-1705963669711.png" alt="Logo El Asadero" />
                    </div>
                    <div className="nav-items">
                        <div className="nav-title">Tablita del Tártaro</div>
                        <div className="nav-links">
                            <a href="../htmls/lobby.html">Inicio</a>
                            <a href="#contacto">Quienes Somos</a>
                            <a href="#Menu">Menú</a>
                            <a href="#contacto">Contáctenos</a>
                        </div>
                    </div>
                    <div className="reservation-button">
                        <a href="../htmls/reserva.html">Reservar</a>
                    </div>
                </NavContent>
            </Nav>

            <main className="container">
                <h1>Nuestras Especialidades</h1>
                <div id="Menu" className="carousel">
                    <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {items.map((item, index) => (
                            <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                                <img src={item.src} alt={item.alt} />
                                <div className="carousel-caption">{item.caption}</div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-prev" onClick={() => showSlide(currentIndex - 1)}>&lt;</button>
                    <button className="carousel-next" onClick={() => showSlide(currentIndex + 1)}>&gt;</button>
                </div>
            </main>

            <footer className="footer">
                <div id="contacto" className="container">
                    <p>&copy; 2024 Tablita del Tártaro. Todos los derechos reservados.</p>
                </div>
            </footer>
        </Container>
    );
};

export default AsaderoPage;