import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import Portfolio from '@/components/Portfolio'

const Home: NextPage = () => {

  return (
    <>
      <Header />
      
      <Portfolio />
      
    <Footer />
   </>
  )
}

export default Home
