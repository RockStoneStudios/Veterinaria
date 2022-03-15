import { useState,useEffect } from "react";
import Formulario from "./components/Formulario"
import Header from "./components/Header";
import ListaPacientes from "./components/ListaPacientes";
function App() {

 const [pacientes,setPacientes] = useState([]);
 const [paciente, setPaciente] = useState({});
 
 useEffect(()=>{
     const obtenerLs = ()=>{
       const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? []
     setPacientes(pacientesLs)
      }
       obtenerLs();
 },[]);
 useEffect(()=>{
       localStorage.setItem('pacientes',JSON.stringify(pacientes))
 },[pacientes])

 const eliminarPaciente = (id)=>{
       const pacientesActualizados = pacientes.filter(paciente=> paciente.id !== id);
       setPacientes(pacientesActualizados);
 }
  return (
   <div className="container mx-auto mt-20">
   <Header isAdmin ={false}/>
   <div className="mt-12 md:flex">
    <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente = {paciente} setPaciente={setPaciente}/>
    <ListaPacientes 
    setPaciente = {setPaciente}
      pacientes={pacientes}
      eliminarPaciente = {eliminarPaciente}
    />
   </div>
   </div>
  )
}

export default App
