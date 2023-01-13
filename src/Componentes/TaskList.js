import { useSelector , useDispatch} from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../firebase";
import "./Tasklist.css";


function TaskList ( ) {
    const [user, loading, /*error*/] = useAuthState(auth);
    const tasks = useSelector (state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }


    return (

        <div>
        
          {tasks.map(task => (
            <div className='Casilla-publicacion'>
            <div key={task.id}>
             <div className='image-user'/>
             <p className="text-xl mb-4" >Bienvenido:  {user.displayName || user.email}</p> 
             <p className='Text-Area'>{task.title}</p>
             <button className='Opc-edicion' onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
            <div className='seccion-like'></div>

            </div>
         ))}
        
         
        </div>
    )
}

export default TaskList;