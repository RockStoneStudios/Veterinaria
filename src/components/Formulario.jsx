import {useState,useEffect} from 'react'
import Error from './Error';
const Formulario = ({ pacientes,setPacientes,paciente,setPaciente}) => {
   const [nombre,setNombre] = useState('');
   const [propietario,setPropietario] = useState('');
   const [email,setEmail] = useState('');
   const [fecha,setFecha] = useState('');
   const [sintoma,setSintoma] = useState('');
   const [error,setError] = useState(false);
    const generarId = () =>{
       const random = Math.random().toString(36).substring(2);
       const fecha = Date.now().toString(36);
       return random+fecha;
    }
     const handleSubmit = (e)=>{
        e.preventDefault();
        if([nombre,propietario,email,fecha,sintoma].includes('')){
         setError(true);
        }
         else {
           console.log("Formulario Correcto");
           setError(false);
            const nuevoPaciente ={
               nombre,
               propietario,
               email,
               fecha,
               sintoma,
               
            }
            if(paciente.id){
              //Editando el registro 
               nuevoPaciente.id = paciente.id;
               const pacientesActualizado = pacientes.map(pacienteState =>pacienteState.id == paciente.id ? nuevoPaciente : pacienteState);
               setPacientes(pacientesActualizado) ;
               setPaciente({});
            }else {
              //Nuevo Registro
              nuevoPaciente.id = generarId();
              setPacientes([...pacientes,nuevoPaciente]);
            }

             //ReiniciarForm
             setNombre('');
             setPropietario('');
             setEmail('');
             setFecha('');
             setSintoma('');
             
          }
        }
        useEffect(()=>{
            if(Object.keys(pacientes).length>0){
                 setNombre(paciente.nombre);
                 setPropietario(paciente.propietario);
                 setEmail(paciente.email);
                 setFecha(paciente.fecha);
                 setSintoma(paciente.sintoma)
            }
        },[paciente])

        return (
          <div className=' md:w-1/2 lg:w-2/5 mx-5'>
        <h3 className='font-black text-3xl text-center'>Seguimiento Pacientes</h3>
        <p className='mt-5 text-center mb-10'>Añade Pacientes y {''}
         <span className='text-indigo-600 font-bold text-lg'>Administralos</span>
        </p>
        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-7 px-5 mb-10 '>
          {error && <Error
            mensaje = "Todos los campos son obligatorios"
           />}
            <div className='mb-4'>
            <label  htmlFor='mascota' className='block text-gray-700 font-bold'>Nombre Mascota</label>
            <input type="text" className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                placeholder='Nombre de la mascota' id='mascota' onChange={(e)=>setNombre(e.target.value)} value={nombre}
                />
          </div>
          <div className='mb-4'>
            <label  htmlFor='propietario' className='block text-gray-700 font-bold'>Nombre Propietario</label>
            <input type="text" className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                placeholder='Nombre del propietario' id='propietario' onChange={(e)=>setPropietario(e.target.value)} value={propietario}
                />
          </div>
          <div className='mb-4'>
            <label  htmlFor='email' className='block text-gray-700 font-bold'>Email</label>
            <input type="email" className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                placeholder='Email Propietario' id='email' onChange={(e)=>setEmail(e.target.value)} value={email}
                />
          </div>
          <div className='mb-4'>
            <label  htmlFor='alta' className='block text-gray-700 font-bold'>Alta</label>
            <input type="date" className='border-2 w-full p-1 mt-1 placeholder-gray-400 rounded-md' 
                 id='alta' onChange={(e)=>setFecha(e.target.value)} value={fecha}
                 />
          </div>
          <div className='mb-4'>
            <label  htmlFor='sintomas' className='block text-gray-700 font-bold'>Alta</label>
            <textarea type="date" className='border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                 id='sintomas' placeholder='Describe los sintomas' onChange={(e)=>setSintoma(e.target.value)} value={sintoma}
                 ></textarea>
          </div>
          <button type='submit' className='bg-indigo-600 w-full p-3 text-white uppercase cursor-pointer transition-all font-bold hover:bg-indigo-700'>{paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}</button>
        </form>
    </div>
  )
}

export default Formulario