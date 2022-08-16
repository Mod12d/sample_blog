import type { NextPage } from 'next'
import Link from "next/link"
import Image from 'next/image'
import styles from '@/styles/Portfolio.module.scss'
import sample from '@/images/portfolio/sample.svg' 
import { useState } from 'react'

type blog = {
  id?: number;
  title?: string;
  content?: string;
  timestamp?: string;
}

const Blog: NextPage = () => {
  const count = 6
  // mock data
  const contentList:blog[] = []
  const title = "This is a header";
  const content = "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。"
  const timestamp ="2022.07.11"
  for (let i = 0; i < count; i++) {
    contentList.push({ id:(i+ 1) ,title:title,content:content,timestamp:timestamp})
  }

  const loadMorePosts = () => {
 };
  return (
    <>
    <div className={styles.container} >
      <h3 >
        Portfolio
      </h3>
      <hr />
      <div >
       {contentList.map((todo) => {
          return (
              <div className={styles.card} key={todo.id}>
              <Image src={sample} width={316} height={184}></Image>
              <text>{todo.content}</text>
              <text>{todo.timestamp}</text>
            </div>
            
          );
       })}
      </div>
      </div> 
      </>
  )
}

export default Blog
