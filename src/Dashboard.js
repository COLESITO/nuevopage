import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Forms from "./Componentes/TaskMain";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Sidebar from "./rightbar/Sidebar";

import TaskList from "./Componentes/TaskList";

import user1 from './img/griffith.jpg'
import user2 from './img/Artorias.jpg'
import user3 from './img/namelessking.jpg'
import user4 from './img/solaire.jpg'


function Dashboard() {
  const [user, loading /*error*/] = useAuthState(auth);
  //const [user, loading, logout ] = useAuthState(auth)
  //metodo de salida
  /*const handleLogout = async () =>{
  try {
      await logout()    
  } catch (error) {
      console.log(error);
  }
  
  //navigate('/login')
}*/

  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (error) {
      console.error(error);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading, navigate]);

  return (
    <div className="dashboard">
      <div className="App">
        <div className="nav-bar">
        <a href="http://localhost:3000/dashboard" > Home</a>
        <a href="https://www.nmas.com.mx/?gclid=CjwKCAiAheacBhB8EiwAItVO2xVkwz_G9LqPvqhb-I3FKpbFXyY-TadOtcorW7DTmxGEwRf0XcKtUhoCT-sQAvD_BwE" > News</a>
        <a href="https://www.youtube.com/@foxdeportes" > Sports</a>
        <a href="#" > Videos</a>
        <a href="#" > Info</a>
        <div className="search">
        <form action="#">
            <input 
              type="text"
              placeholder="Buscar..."
              Name="search"
            ></input>
            <button> 
              <i className="">

              </i>
            </button>
          </form>
        </div>  
        

          <div className="dashboard__container">
            <button className="dashboard__btn" onClick={logout}>
              Salir
            </button>
          </div>
          
        </div>
        <div className="seccion-1">
          <div className="social-bar">
            <a href="https://www.facebook.com/" class="icon icon-facebook" target="_blank"></a>
            <a href="https://twitter.com/" class="icon icon-twitter" target="_blank"></a>
            <a href="https://www.youtube.com/" class="icon icon-youtube" target="_blank"></a>
            <a href="https://www.instagram.com/" class="icon icon-instagram" target="_blank"></a>
          </div>
          </div>
        <div className="seccion-2">
          <Forms />
          <TaskList />
        </div>
        
        <div className="seccion-3">
          <div className="barra">
                <Sidebar />
          </div>          
          
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
