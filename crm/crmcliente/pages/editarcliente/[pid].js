import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { useQuery, gql, useMutation } from '@apollo/client'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'

// Query para obtener un cliente en especifico
const OBTENER_CLIENTE = gql`
  query obtenerCliente($id: ID!){
    obtenerCliente(id:$id){
      nombre
      email
      apellido
      telefono
      empresa
    }
  }
`

// Mutation para actualizar cliente
const ACTUALIZAR_CLIENTE = gql`
  mutation actualizarCliente($id:ID!, $input: ClienteInput){
    actualizarCliente(id: $id, input: $input){
      nombre
      email
      apellido
      telefono
      empresa
    }
  }
`

const OBTENER_CLIENTES_USUARIO = gql`
  query obtenerClientesVendedor{
    obtenerClientesVendedor{
      id
      nombre
      apellido
      empresa
      email
    }
  }
`

const EditarCliente = () => {

  // Obtener el id actual
  const router = useRouter()

  const { query: { id } } = router

  // Consultar para obtener el cliente
  const { data, loading, error } = useQuery(OBTENER_CLIENTE, {
    variables: {
      id
    }
  })

  // Actualizar el cliente
  const [ actualizarCliente ] = useMutation(ACTUALIZAR_CLIENTE)

  // Schema de validación
  const schemaValidacion = Yup.object({
    nombre: Yup.string()
                .required('El nombre del cliente es obligatorio'),
    apellido: Yup.string()
                .required('El apellido del cliente es obligatorio'),
    empresa: Yup.string()
                .required('La empresa del cliente es obligatorio'),
    email: Yup.string()
                .email('Email no es valido')
                .required('La empresa del cliente es obligatorio'),             
  })

  if(loading) return 'Cargando...'

  const { obtenerCliente } = data

  // Modificar el cliente en la BD
  const actualizarInfoCliente = async (valores) => {
    const { nombre, apellido, empresa, email, telefono } = valores

    try {
      const { data } = await actualizarCliente({
        variables: {
          id,
          input: {
            nombre,
            apellido,
            empresa,
            email,
            telefono
          }
        }
      })

      console.log(data);

      // TODO: sweet alert
      Swal.fire(
        `Actualizado`,
        'El cliente se actualizo correctamente',
        'success'
      )

      // TODO: Redireccionar
      router.push('/')

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <h1 className='text-2xl text-gray-800'>Editar Cliente</h1>

      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            validationSchema = { schemaValidacion }
            enableReinitialize
            initialValues = { obtenerCliente }
            onSubmit={ (valores) => {
              actualizarInfoCliente(valores)
            }}
          >

            {
              props => {
                return (

                  <form className='bg-white shadow-md px-8 pt-6 pb-8 mb-4'
                    onSubmit={props.handleSubmit}
                  >

                    <div className='mb-4' >
                      <label htmlFor="nombre" className='block text-gray-700 text-sm font-bold mb-2'>Nombre</label>
                      <input type="text" 
                        className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id='nombre' 
                        placeholder='Nombre Cliente'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.nombre}
                      />
                    </div>

                    { props.touched.nombre && props.errors.nombre ? (
                        <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                          <p className='font-bold'>Error</p>
                          <p>{props.errors.nombre}</p>
                        </div>
                      ) : null }

                    <div className='mb-4' >
                      <label htmlFor="apellido" className='block text-gray-700 text-sm font-bold mb-2'>Apellido</label>
                      <input type="text" 
                        className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id='apellido' 
                        placeholder='Apellido Cliente'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.apellido}
                      />
                    </div>

                    { props.touched.apellido && props.errors.apellido ? (
                        <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                          <p className='font-bold'>Error</p>
                          <p>{props.errors.apellido}</p>
                        </div>
                      ) : null }

                    <div className='mb-4' >
                      <label htmlFor="empresa" className='block text-gray-700 text-sm font-bold mb-2'>Empresa</label>
                      <input type="text" 
                        className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id='empresa' 
                        placeholder='Empresa Cliente'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.empresa}
                      />
                    </div>

                    { props.touched.empresa && props.errors.empresa ? (
                        <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                          <p className='font-bold'>Error</p>
                          <p>{props.errors.empresa}</p>
                        </div>
                      ) : null }

                    <div className='mb-4' >
                      <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                      <input type="email" 
                        className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id='email' 
                        placeholder='Email Cliente'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.email}
                      />
                    </div>

                    { props.touched.email && props.errors.email ? (
                        <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                          <p className='font-bold'>Error</p>
                          <p>{props.errors.email}</p>
                        </div>
                      ) : null }

                    <div className='mb-4' >
                      <label htmlFor="telefono" className='block text-gray-700 text-sm font-bold mb-2'>Telefono</label>
                      <input type="tel" 
                        className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                        id='telefono' 
                        placeholder='Telefono Cliente'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.telefono}
                      />
                    </div>

                    <input type="submit"
                      className='bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900 rounded'
                      value='Editar Cliente'
                    />

                  </form>

                )
              }
            }
          </Formik>
        </div>
      </div>
    </Layout>
  )
}

export default EditarCliente
