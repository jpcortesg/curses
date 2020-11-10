import React from 'react'
import Layout from './../components/Layout'

function login() {
  return (
    <>

      <Layout>
        <h1 className='text-center text-2xl text-white'>Login</h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-sm">
            <form action="" className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'>
              
              <div className='mb-4' >
                <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input type="email" className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' placeholder='Email Usuario'/>
              </div>

              <div className='mb-4' >
                <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input type="password" className='shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='password' placeholder='Password Usuario'/>
              </div>
              
              <input type="submit" className='bg-gray-800 mt-5 w-full p-2 text-white uppercase hover:bg-gray-900' value='Iniciar Sesión' />

            </form>
          </div>
        </div>
      </Layout>

    </>
  )
}

export default login
