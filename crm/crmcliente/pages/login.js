import React, { useState } from 'react'
import Layout from './../components/Layout'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const AUTENTICAR_USUARIO = gql`
  mutation autenticarUsuario($input : autenticarInput){
    autenticarUsuario(input: $input){
      token
    }
  }
`

function login() {

  // Routing
  const router = useRouter()
  
  // State para el mensaje de error
  const [mensaje, setMensaje] = useState(null)

  // Mutation para crear nuevos usuarios
  const [ autenticarUsuario ] = useMutation(AUTENTICAR_USUARIO)

  // Validacion formulario
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string()
                  .email('El email no es valido')
                  .required('El email no puede ir vacio'),
      password: yup.string()
                    .required('El password es obligatorio')
                    .min(6, 'El password debe ser de 6 caracters')
    }),
    onSubmit: async valores => {

      const { email, password } = valores

      try {
        const { data } = await autenticarUsuario({
          variables: {
            input: {
              email,
              password
            }
          }
        })
        
        // Usuario creado correctamente
        setMensaje('Autenticando...')

        // Guardar el token
        const {token} = data.autenticarUsuario
        localStorage.setItem('token', token)

        // Redireccionar hacia cliente

        setTimeout(() => {
          setMensaje(null)
          router.push('/')
        }, 1000);

      } catch (error) {
        setMensaje(error.message)

        setTimeout(() => {
          setMensaje(null)
        }, 2000);
      }
    }
  })

  const mostrarMensaje = () => {
    return(
      <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
        <p>{mensaje}</p>
      </div>
    )
  }

  return (
    <>

      <Layout>

        { mensaje && mostrarMensaje() }

        <h1 className='text-center text-2xl text-white'>Login</h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
              onSubmit={formik.handleSubmit}
            >
              
              <div className='mb-4' >
                <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type="email" 
                  className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  id='email' 
                  placeholder='Email Usuario'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>

              { formik.touched.email && formik.errors.email ? (
                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                  <p className='font-bold'>Error</p>
                  <p>{formik.errors.email}</p>
                </div>
              ) : null }

              <div className='mb-4' >
                <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input type="password" 
                  className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  id='password' 
                  placeholder='Password Usuario'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>

              { formik.touched.password && formik.errors.password ? (
                <div className='my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4'>
                  <p className='font-bold'>Error</p>
                  <p>{formik.errors.password}</p>
                </div>
              ) : null }
              
              <input type="submit" 
                className='bg-gray-800 mt-5 w-full p-2 text-white uppercase hover:bg-gray-900' 
                value='Iniciar Sesión' />

            </form>
          </div>
        </div>
      </Layout>

    </>
  )
}

export default login
