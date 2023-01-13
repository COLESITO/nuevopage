import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "./firebase";
import "./Reset.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);
  return (
    <div className="reset">
      <div className="matt">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"/>
        <button
          className="reset__btn"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Enviar
        </button>
        <div>
          ¿No tienes cuenta? 
        </div>
        <div>
        <Link to="/register">Crea una cuenta</Link> ahora.

        </div>
      </div>
      </div>
    </div>
  );
}
export default Reset;