import React, { useState } from 'react';
import '../css/logstyle.css';

const Login = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Manejo de inicio de sesión
    };

    const handleRegistration = (event) => {
        event.preventDefault();
        // Manejo de registro
    };

    return (
        <div>
            <nav className="navbar">
                <div className="bar-container">
                    <a href="/" className="logo"><img src="../recursos/logo.png" alt="Logo Restaurante" /></a>
                    <div className="user-actions">
                        <ion-icon name="home-outline"></ion-icon>
                        <a href="/" className="inicio-button">Inicio</a>
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
                            <button type="button" id="toggle-login-password" className="toggle-password">👁️</button>
                        </div>
                        <button className="boton" id="iniciar">Iniciar sesión</button>
                        <br />
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
                            <button type="button" id="toggle-register-password" className="toggle-password">👁️</button>
                        </div>
                        <div className="container-input">
                            <ion-icon name="reload-outline"></ion-icon>
                            <input type="password" placeholder="Repetir contraseña" />
                            <button type="button" id="toggle-repeat-password" className="toggle-password">👁️</button>
                        </div>
                        <button className="boton" id="registro">Registrarse</button>
                        <br />
                        <span>registrarse con</span>
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
                        <button className="boton" id="btn-sign-up" onClick={handleToggle}>Registrarse</button>
                    </div>
                    <div className="welcome-sign-in welcome">
                        <h3>Bienvenido</h3>
                        <p>Regístrese para poder hacer reservaciones en nuestro restaurante</p>
                        <button className="boton" id="btn-sign-in" onClick={handleToggle}>Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;