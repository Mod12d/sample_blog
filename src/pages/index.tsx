import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Blog from '@/components/Blog'
import Portfolio from '@/components/Portfolio'
import { client } from '@/libs/client'

type blog={
  blog : Array<blog>
}

const Home:NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog
}: Props) => {
  return (
    <>
    <Header />
      <section className={styles.container}>
        <div className={styles.content}>
          <h3>Shimabu IT University</h3>
          <p>しまぶーのポートフォリオのためのページです</p>
        </div>
      </section>    
      <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Home
