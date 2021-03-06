import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const OBTENER_USUARIO = gql`
  query obtenerUsuario{
    obtenerUsuario{
      id
      nombre
      apellido
    }
  }
`

function Header() {

  // Routing
  const router = useRouter()

  // Query de apollo
  const { data, loading, error } = useQuery(OBTENER_USUARIO)

  // Proteger que no accedamos a data sin obtener resultados
  if(loading) return null

  // Si no hay información
  if(!data){
    router.push('/login')
    return <p>Cargando...</p>
  }

  const { nombre, apellido } = data.obtenerUsuario

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return (
    <div className='flex justify-between mb-6'>
      <p className='mr-2'>Hola {nombre} {apellido}</p>
      <button 
        onClick={() => cerrarSesion()}
        type='button' 
        className='bg-blue-800 w-full sm:w-auto font-bold uppercase rounded py-1 px-2 text-white shadow-md'
      >Cerrar Sesion</button>
    </div>
  )
}

export default Header
