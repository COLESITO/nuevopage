import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Register from "./Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);
  return (
    <div className="login">
      <div className="matt">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <div className="texto1">
          <Link to="/reset" className="link">¿Olvidaste tu contraseña?</Link>
        </div>
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          <FontAwesomeIcon icon="fa-brands fa-google" />Iniciar sesión
        </button>
        <div className="texto2">
          ¿Aun no tienes cuenta?
        </div>  
        <button className="crearCuenta">
        <Link to="/register" className="link3">Crea una cuenta ahora</Link>
        </button>
        <div className="O">
          ó
        </div>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
        <FontAwesomeIcon icon={faGoogle}/> Iniciar sesión con google
        </button>

        
        
       
      </div>
      </div>
    </div>
  );
}
export default Login;