import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import "./TaskMain.css";
import {v4 as uuid} from 'uuid'
import {useState} from 'react'
import {addTask} from '../features/tasks/taskSlice'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faImage,  faFaceLaughBeam} from '@fortawesome/free-solid-svg-icons';



function Forms() {

const [task, setTask]= useState({
  title: '', 
  description: 'Panel de publicaciones'
})
 
const dispatch = useDispatch()

const handleChange = e =>{ 
 setTask ({
  ...task, 
  [e.target.name]: e.target.value,
  });
  
};

const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(addTask({
    ...task, 
    id:uuid(),
 }))
}

return(
  
    <div className='Box-item'>
    <div className='image-user'></div>
    
    <input className='input-form' 
    name='title'
    placeholder='¿Cuentanos tu como te sientes? '
    onChange={handleChange}/> 
    <hr className='hr'/>
    <button  className='button' onClick={handleSubmit}> <FontAwesomeIcon className='icono1' icon={faPlusSquare}/>  Crear publicacion</button>
    <button  className='button'><FontAwesomeIcon className='icono2' icon={faImage}/>  Foto / video</button>
    <button  className='button'><FontAwesomeIcon className='icono3' icon={faFaceLaughBeam}/>  Feeling / activity </button>

      
    </div>
  )
}

export default Forms;