import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

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
            <nav className={styles.navbar}>
                <div className={styles.barContainer}>
                    <a href="/" className={styles.logo}><img src="../recursos/logo.png" alt="Logo Restaurante" /></a>
                    <div className={styles.userActions}>
                        <ion-icon name="home-outline"></ion-icon>
                        <a href="/" className={styles.inicioButton}>Inicio</a>
                    </div>
                </div>
            </nav>
            <div className={`${styles.container} ${isToggled ? styles.toggle : ''}`}>
                <div className={styles.containerForm}>
                    <form className={styles.signIn} onSubmit={handleLogin}>
                        <h2>Iniciar sesión</h2>
                        <span>Use su correo y contraseña</span>
                        <div className={styles.containerInput}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" placeholder="correo" />
                        </div>
                        <div className={styles.containerInput}>
                            <ion-icon name="key-outline"></ion-icon>
                            <input type="password" placeholder="contraseña" />
                            <button type="button" id="toggle-login-password" className={styles.togglePassword}>👁️</button>
                        </div>
                        <button className={styles.boton} id="iniciar">Iniciar sesión</button>
                        <br />
                        <span>Inicie sesión con</span>
                        <div className={styles.icons}>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-google"></ion-icon>
                            <ion-icon name="logo-apple"></ion-icon>
                        </div>
                    </form>
                </div>
                <div className={styles.containerForm}>
                    <form className={styles.signUp} onSubmit={handleRegistration}>
                        <h2>Registrarse</h2>
                        <span>Ingrese los datos solicitados</span>
                        <div className={styles.containerInput}>
                            <ion-icon name="person-add-outline"></ion-icon>
                            <input type="text" placeholder="Nombre y Apellido" />
                        </div>
                        <div className={styles.containerInput}>
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="text" placeholder="correo" />
                        </div>
                        <div className={styles.containerInput}>
                            <ion-icon name="key-outline"></ion-icon>
                            <input type="password" placeholder="Crear contraseña" />
                            <button type="button" id="toggle-register-password" className={styles.togglePassword}>👁️</button>
                        </div>
                        <div className={styles.containerInput}>
                            <ion-icon name="reload-outline"></ion-icon>
                            <input type="password" placeholder="Repetir contraseña" />
                            <button type="button" id="toggle-repeat-password" className={styles.togglePassword}>👁️</button>
                        </div>
                        <button className={styles.boton} id="registro">Registrarse</button>
                        <br />
                        <span>registrarse con</span>
                        <div className={styles.icons}>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-google"></ion-icon>
                            <ion-icon name="logo-apple"></ion-icon>
                        </div>
                    </form>
                </div>
                <div className={styles.containerWelcome}>
                    <div className={styles.welcomeSignUp}>
                        <h3>Bienvenido</h3>
                        <p>Ingrese su correo y contraseña para poder hacer reservaciones en nuestro restaurante</p>
                        <button className={styles.boton} id="btn-sign-up" onClick={handleToggle}>Registrarse</button>
                    </div>
                    <div className={styles.welcomeSignIn}>
                        <h3>Bienvenido</h3>
                        <p>Regístrese para poder hacer reservaciones en nuestro restaurante</p>
                        <button className={styles.boton} id="btn-sign-in" onClick={handleToggle}>Iniciar sesión</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;