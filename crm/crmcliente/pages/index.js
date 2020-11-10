import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './../components/Layout'

export default function Index() {
  return (
    <div>
      <Layout>
        <h1 className='text-2xl text-gray-800'>Clientes</h1>
      </Layout>
    </div>
  )
}
