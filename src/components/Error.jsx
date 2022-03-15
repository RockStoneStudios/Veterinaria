

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-700 text-white text-center p-2 rounded-md uppercase font-bold mb-3' >
    <p>{mensaje}</p>
   </div>
  )
}

export default Error