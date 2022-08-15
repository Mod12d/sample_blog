import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Home: NextPage = () => {

  return (
    <>
    <Header />
      <section className={styles.container}>
        <title>Shimabu IT University</title>
        <br/>
        <text>しまぶーのポートフォリオのためのページです</text>
    </section>        
     <main className={styles.main}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>
    <Footer />
   </>
  )
}

export default Home
