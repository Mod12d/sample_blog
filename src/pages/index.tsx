import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import Portfolio from '@/components/Portfolio'

const Home: NextPage = () => {
  return (
    <>
    <Header />
      <section className={styles.container}>
        <div className={styles.content}>
          <h3>Shimabu IT University</h3>
          <p>しまぶーのポートフォリオのためのページです</p>
        </div>
      </section>    
      <Blog />
     <button className={styles.button}>
      View All
     </button>      
      <Portfolio />
     <button className={styles.button}>
      View All
     </button>       
    <Footer />
   </>
  )
}

export default Home
