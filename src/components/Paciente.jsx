import React from 'react'

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {
  
   const handleEliminar = ()=>{
     const confirmar = confirm("Seguro deseas Eliminar ?");
       if(confirmar){
         eliminarPaciente(paciente.id);
       }
     
   } 

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-md">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre{" "}
      <span className="font-normal normal-case">{paciente.nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario{" "}
      <span className="font-normal normal-case">{paciente.propietario}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Email{" "}
      <span className="font-normal normal-case">{paciente.email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Dado de Alta{" "}
      <span className="font-normal normal-case">{paciente.fecha}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas{" "}
      <span className="font-normal normal-case">{paciente.sintoma}</span>
    </p>
    <div className='flex justify-between mt-8'>
      <button type='button' onClick={()=>setPaciente(paciente)}
       className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg uppercase' 
      >Editar</button>
      <button  className='py-2 px-10 bg-red-600 hover:bg-red-800 text-white rounded-lg uppercase' type='button' onClick={handleEliminar}>Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente