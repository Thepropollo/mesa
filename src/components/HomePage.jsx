import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const indicators = [0, 1, 2];

    const showSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % indicators.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [indicators.length]);

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
                <div className={styles.carouselInner} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <div className={`${styles.carouselItem} ${styles.active}`}>
                        <img src="../recursos/china.png" alt="Imagen 1" />
                    </div>
                    <div className={styles.carouselItem}>
                        <img src="../recursos/italia.png" alt="Imagen 2" />
                    </div>
                    <div className={styles.carouselItem}>
                        <img src="../recursos/sushi.png" alt="Imagen 3" />
                    </div>
                </div>
                <div className={styles.carouselControls}>
                    <button className={styles.prev} onClick={() => showSlide((currentSlide - 1 + indicators.length) % indicators.length)}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className={styles.next} onClick={() => showSlide((currentSlide + 1) % indicators.length)}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div className={styles.carouselIndicators}>
                    {indicators.map((indicator, index) => (
                        <button key={index} className={currentSlide === index ? styles.active : ''} onClick={() => showSlide(index)}></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Notification = ({ onClose }) => (
    <div className={styles.notification}>
        <p>Para poder reservar, primero debe registrarse o iniciar sesión si ya cuenta con una cuenta.</p>
        <button className={styles.regresar} onClick={onClose}>Regresar</button>
        <Link to="/login" className={styles.registrarse}>Registrarse</Link>
    </div>
);

const InfoSection = ({ imgSrc, title, description }) => (
    <section className={styles.infoSection}>
        <img src={imgSrc} alt={description} />
        <div className={styles.infoText}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.reserveButtonContainer}>
                <Link to="/login" className={styles.reserveButton}>Reserve con nosotros</Link>
            </div>
        </div>
    </section>
);

const HomePage = () => {
    const [showNotification, setShowNotification] = useState(false);

    const handleReserveClick = () => {
        setShowNotification(true);
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <a href="./index.html" className={styles.logo}><img src="../recursos/logo.png" alt="Logo Restaurante" /></a>
                    <h2>¡Bienvenido a VLJR!</h2>
                    <div className={styles.userActions}>
                        <Link to="/" className={styles.inicioButton}>Inicio</Link>
                        <Link to="/login" className={styles.registerButton}>Registrarse</Link>
                    </div>
                </div>
            </nav>

            <section className={styles.mainContent}>
                <div className={styles.container}>
                    <Carousel />
                </div>
                <div className={styles.reserveButtonContainer}>
                    <button className={styles.reserveButton} onClick={handleReserveClick}>Reserva ahora</button>
                </div>
            </section>

            <InfoSection
                imgSrc="../recursos/jesus.png"
                title="Shifa Dinastia"
                description="Shifa Dinastía es un restaurante especializado en auténtica comida china, ofreciendo una experiencia culinaria única con sabores tradicionales y platos elaborados con ingredientes frescos y de alta calidad."
            />
            <InfoSection
                imgSrc="../recursos/vane.png"
                title="Dolce Vita"
                description="Dolce Vita es un restaurante italiano que celebra la esencia de la cocina mediterránea, ofreciendo pastas frescas, pizzas artesanales y sabores auténticos que te transportan al corazón de Italia."
            />
            <InfoSection
                imgSrc="../recursos/Ramon.png"
                title="La tablita del Tartaro"
                description="La Tablita del Tártaro es un restaurante especializado en asados a la parrilla, donde los cortes de carne premium y las técnicas tradicionales se combinan para ofrecer una experiencia gastronómica llena de sabor y autenticidad."
            />

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <p>&copy; 2024 VLJR. Todos los derechos reservados.</p>
                    <div className={styles.socialIcons}>
                        <a href="https://es-la.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                </div>
            </footer>

            {showNotification && <Notification onClose={() => setShowNotification(false)} />}
        </div>
    );
};

export default HomePage;