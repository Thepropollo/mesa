import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useDynamicCSS from './useDynamicCSS'; // Importa el hook personalizado

const Login = () => {
    const [isToggled, setIsToggled] = useState(false);

    // Carga dinámica del CSS de inicio de sesión
    useDynamicCSS('../css/logstyle.css'); // Cambia la ruta si es necesario

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Iniciar sesión');
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        console.log('Registrarse');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="bar-container">
                    <a href="/" className="logo">
                        <img src="../recursos/logo.png" alt="Logo Restaurante" />
                    </a>
                    <div className="user-actions">
                        <ion-icon name="home-outline"></ion-icon>
                        <button className="inicio-button">
                            <Link to="/" className="iniccio-button">Inicio</Link>
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`container ${isToggled ? 'toggle' : ''}`}>
                <div className="container-form">
                    <form className="sign-in" onSubmit={handleLogin}>
                        <h2>Iniciar sesión</h2>
                        <span>Use su correo y contraseña</span>
                        <div className="container-input">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" placeholder="correo" />
                        </div>
                        <div className="container-input">
                            <ion-icon name="key-outline"></ion-icon>
                            <input type="password" placeholder="contraseña" />
                            <button type="button" className="toggle-password">👁️</button>
                        </div>
                        <button className="boton">Iniciar sesión</button>
                        <span>Inicie sesión con</span>
                        <div className="icons">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-google"></ion-icon>
                            <ion-icon name="logo-apple"></ion-icon>
                        </div>
                    </form>
                </div>
                <div className="container-form">
                    <form className="sign-up" onSubmit={handleRegistration}>
                        <h2>Registrarse</h2>
                        <span>Ingrese los datos solicitados</span>
                        <div className="container-input">
                            <ion-icon name="person-add-outline"></ion-icon>
                            <input type="text" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="container-input">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" placeholder="correo" />
                        </div>
                        <div className="container-input">
                            <ion-icon name="key-outline"></ion-icon>
                            <input type="password" placeholder="Crear contraseña" />
                            <button type="button" className="toggle-password">👁️</button>
                        </div>
                        <div className="container-input">
                            <ion-icon name="reload-outline"></ion-icon>
                            <input type="password" placeholder="Repetir contraseña" />
                            <button type="button" className="toggle-password">👁️</button>
                        </div>
                        <button className="boton">Registrarse</button>
                        <span>Registrarse con</span>
                        <div className="icons">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-google"></ion-icon>
                            <ion-icon name="logo-apple"></ion-icon>
                        </div>
                    </form>
                </div>
                <div className="container-welcome">
                    <div className="welcome-sign-up welcome">
                        <h3>Bienvenido</h3>
                        <p>Ingrese su correo y contraseña para poder hacer reservaciones en nuestro restaurante</p>
                        <button className="boton" onClick={handleToggle}>Registrarse</button>
                    </div>
                    <div className="welcome-sign-in welcome">
                        <h3>Bienvenido</h3>
                        <p>Regístrese para poder hacer reservaciones en nuestro restaurante</p>
                        <button className="boton" onClick={handleToggle}>Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;