import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Contact.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'

const Home: NextPage = () => {

  return (
    <>
      <Header />

      <div className={styles.container}>
      <h3 >
        Contact
        </h3>
        <hr></hr>
        <form>
          <p>Email</p>
          <input className={styles.input}/>
          <p>Name</p>
          <input className={styles.input}/>
          <p>Your message</p>
          <input className={styles.input}/>        
        </form>
      <button className={styles.button}>
      Send Message
     </button>   
      </div>
    <Footer />
   </>
  )
}

export default Home
