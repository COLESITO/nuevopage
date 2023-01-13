import { createSlice } from "@reduxjs/toolkit";

import TaskList from "../../Componentes/TaskList";
const initialState = [
    {
        id: "1",
        title: "Tarea de prueba",
        description: "Ejemplo de la tarea", 
        completed: false
    },
]



export const taskSlice = createSlice({
    name: 'tasks', 
    initialState,
    reducers: {

        addTask: (state, action) => {
            state.push(action.payload);

        }, 
        deleteTask: (state, action) => {
         const taskFound = state.find(task => task.id === action.payload)
         if(taskFound){
            state.splice(state.indexOf(taskFound), 1)
         }
        }
    },
});

export const {addTask, deleteTask} = taskSlice.actions;
export default taskSlice.reducer